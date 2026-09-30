import { useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react"
import { Link } from "react-router"
import { pad2 } from "@/components/ui-kit"
import { cn } from "@/lib/utils"

export type Scene = {
  readonly viewBox: string
  readonly svg: string
  readonly markers: readonly { readonly id: number; readonly x: number; readonly y: number }[]
  readonly labels: readonly { readonly key: string; readonly x: number; readonly y: number }[]
}

export type PlanModule = {
  id: number
  name: string
  body: string
  screen: ReactNode
}

export type PlanStrings = {
  introBody: string
  prev: string
  next: string
  demo: string
  labels: Readonly<Record<string, string>>
}

export function IsoPlan({
  scene,
  modules,
  s,
  demoTo,
  ariaLabel,
}: {
  scene: Scene
  modules: PlanModule[]
  s: PlanStrings
  demoTo: string
  ariaLabel: string
}) {
  const [active, setActive] = useState(0)
  const panel = useRef<HTMLDivElement>(null)
  const n = modules.length
  const current = modules.find((m) => m.id === active)

  function show(id: number, reveal = false) {
    setActive(id)
    if (reveal && panel.current && window.matchMedia("(max-width: 1023px)").matches) {
      panel.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") show(0)
    else if (e.key === "ArrowRight") show((active % n) + 1)
    else if (e.key === "ArrowLeft") show(active <= 1 ? n : active - 1)
    else if (/^[1-9]$/.test(e.key) && +e.key <= n) show(+e.key)
    else return
    e.preventDefault()
  }

  function onDrawingClick(e: MouseEvent) {
    const hit = (e.target as Element).closest("[data-obj]")
    if (hit) show(Number(hit.getAttribute("data-obj")), true)
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="iso-plan border-[1.5px] border-foreground bg-card outline-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ring"
      data-active={active || undefined}
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="flex items-center px-2 py-4 sm:px-5 sm:py-5">
          <div className="relative w-full" onClick={onDrawingClick}>
            <svg
              viewBox={scene.viewBox}
              className="iso-svg"
              aria-hidden
              dangerouslySetInnerHTML={{ __html: scene.svg }}
            />
            {scene.labels.map((l) => (
              <span
                key={l.key}
                aria-hidden
                className="pointer-events-none absolute hidden -translate-x-1/2 -translate-y-1/2 bg-background/90 px-1 font-mono text-[10px] tracking-[0.08em] whitespace-nowrap text-muted-foreground uppercase sm:block"
                style={{ left: `${l.x}%`, top: `${l.y}%` }}
              >
                {s.labels[l.key]}
              </span>
            ))}
            {scene.markers.map((mk) => {
              const mod = modules.find((m) => m.id === mk.id)
              return (
                <button
                  key={mk.id}
                  type="button"
                  aria-label={`${mk.id}. ${mod?.name ?? ""}`}
                  aria-pressed={active === mk.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    show(mk.id, true)
                  }}
                  className={cn(
                    "absolute flex size-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-white font-mono text-[10px] sm:border-2 font-medium text-white transition-[background-color,box-shadow] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:size-7 sm:text-[12.5px]",
                    active === mk.id
                      ? "bg-foreground shadow-[0_0_0_3px_#fff,0_0_0_5px_var(--primary)]"
                      : "bg-primary hover:bg-foreground",
                  )}
                  style={{ left: `${mk.x}%`, top: `${mk.y}%` }}
                >
                  {mk.id}
                </button>
              )
            })}
          </div>
        </div>
        <div
          ref={panel}
          aria-live="polite"
          className="flex scroll-mt-24 flex-col gap-3.5 border-t-[1.5px] lg:min-h-[520px] border-foreground p-5 sm:p-6 lg:border-t-0 lg:border-l-[1.5px]"
        >
          {current ? (
            <div key={current.id} className="flex flex-1 animate-in flex-col gap-3.5 duration-150 fade-in">
              <h3 className="font-heading text-[28px] leading-[1.05] font-[650] tracking-[-0.02em] text-balance">
                {current.name}
              </h3>
              <p className="text-[15.5px] leading-relaxed text-muted-foreground">{current.body}</p>
              {current.screen}
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3.5">
                <Link
                  to={demoTo}
                  className="text-[14.5px] font-semibold underline decoration-[1.5px] underline-offset-4 hover:text-primary"
                >
                  {s.demo} →
                </Link>
                <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <button
                    type="button"
                    aria-label={s.prev}
                    onClick={() => show(active <= 1 ? n : active - 1)}
                    className="size-8 rounded-md border border-foreground bg-card text-foreground hover:bg-muted"
                  >
                    ←
                  </button>
                  {pad2(current.id)} / {pad2(n)}
                  <button
                    type="button"
                    aria-label={s.next}
                    onClick={() => show((active % n) + 1)}
                    className="size-8 rounded-md border border-foreground bg-card text-foreground hover:bg-muted"
                  >
                    →
                  </button>
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 animate-in flex-col gap-3.5 duration-150 fade-in">
              <p className="text-[15.5px] leading-relaxed text-muted-foreground">{s.introBody}</p>
              <ul className="flex flex-col border-t border-border">
                {modules.map((m) => (
                  <li key={m.id}>
                    <button
                      type="button"
                      onClick={() => show(m.id)}
                      className="flex w-full items-center gap-3 border-b border-border py-2.5 text-left text-[15px] hover:text-primary"
                    >
                      <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-primary font-mono text-[11px] text-white">
                        {m.id}
                      </span>
                      <span className="flex-1">{m.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
