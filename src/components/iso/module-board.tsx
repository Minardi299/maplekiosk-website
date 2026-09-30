import { useState } from "react"
import { board } from "@/components/iso/scenes/board"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function ModuleBoard() {
  const { t } = useI18n()
  const p = t.hero.picker
  const [picked, setPicked] = useState<Set<string>>(() => new Set(["kds", "ai"]))
  const toggle = (id: string) =>
    setPicked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  const phrases = p.lanes.flatMap((l) => l.mods).filter((m) => picked.has(m.id)).map((m) => m.phrase)
  const caption = phrases.length ? p.caption.replace("{list}", joinList(phrases, p.and)) : p.captionNone

  return (
    <div className="border-[1.5px] border-foreground bg-card">
      <div className="px-4 pt-3 pb-1 sm:px-10">
        <svg
          viewBox={board.viewBox}
          className="iso-svg board"
          data-on={[...picked].join(" ")}
          aria-hidden
          dangerouslySetInnerHTML={{ __html: board.svg }}
        />
      </div>
      <div className="grid border-t border-foreground sm:grid-cols-2">
        {p.lanes.map((lane, i) => {
          return (
            <div
              key={lane.name}
              role="group"
              aria-label={lane.name}
              className={cn("flex flex-col gap-2 p-4", i === 1 && "border-t border-foreground sm:border-t-0 sm:border-l")}
            >
              <p className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">{lane.name}</p>
              <div className="mt-auto grid grid-cols-2 gap-1.5 sm:grid-cols-1">
                {lane.mods.map((m) => {
                  const active = picked.has(m.id)
                  return (
                    <button
                      key={m.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(m.id)}
                      className={cn(
                        "flex min-h-10 items-center gap-2 rounded-[5px] border px-2.5 py-1.5 text-left text-[13.5px] leading-tight font-semibold transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-dashed border-[#b3a797] bg-card text-muted-foreground hover:border-foreground hover:text-foreground",
                      )}
                    >
                      <span aria-hidden className="w-3 shrink-0 font-mono">
                        {active ? "✓" : "+"}
                      </span>
                      {m.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <p aria-live="polite" className="border-t border-foreground px-4 py-3 text-[15px] leading-snug">
        {caption}
      </p>
    </div>
  )
}

function joinList(xs: string[], and: string) {
  return xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} ${and} ${xs[xs.length - 1]}`
}
