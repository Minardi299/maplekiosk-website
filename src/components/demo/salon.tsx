import { useEffect, useState } from "react"
import { CallButton } from "@/components/call-button"
import { fill, Panel, usePrice } from "@/components/demo/kit"
import { Transcript } from "@/components/plan-screens/screen-kit"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const TIPS = [15, 18, 20]
const NEW_SLOT = 4

export function SalonDemo({ push }: { push: (text: string) => void }) {
  const { t } = useI18n()
  const s = t.demo.salon
  const price = usePrice()
  const [shown, setShown] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [booked, setBooked] = useState(false)
  const [open, setOpen] = useState(() => s.open.map((o) => ({ ...o })))
  const [selected, setSelected] = useState(0)
  const [tip, setTip] = useState(18)
  const [tips, setTips] = useState(() => [...s.tipsStart])
  const [waiting, setWaiting] = useState<string[]>(() => s.walkins.slice(0, 2))
  const [nextWalkin, setNextWalkin] = useState(2)

  useEffect(() => {
    if (!playing) return
    if (shown >= s.script.length) {
      setPlaying(false)
      setBooked(true)
      push(s.events.booked)
      return
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const id = setTimeout(() => setShown((n) => n + 1), reduced ? 0 : shown === 0 ? 300 : 1300)
    return () => clearTimeout(id)
  }, [playing, shown, s, push])

  function play() {
    setShown(0)
    setBooked(false)
    setPlaying(true)
    push(s.events.call)
  }

  const current = open[selected]
  const tipAmount = current ? Math.round(current.price * tip) / 100 : 0
  function charge() {
    if (!current) return
    const total = current.price + tipAmount
    setTips((prev) => prev.map((v, i) => (i === current.tech ? Math.round((v + tipAmount) * 100) / 100 : v)))
    push(fill(s.events.charged, { client: current.client, total: price(total), tip: price(tipAmount), tech: s.techs[current.tech] }))
    setOpen((prev) => prev.filter((_, i) => i !== selected))
    setSelected(0)
  }

  function addWalkin() {
    const name = s.walkins[nextWalkin % s.walkins.length]
    setWaiting((prev) => [...prev, name])
    setNextWalkin((n) => n + 1)
    push(fill(s.events.added, { name }))
  }
  function seat() {
    if (!waiting.length) return
    push(fill(s.events.seated, { name: waiting[0] }))
    setWaiting((prev) => prev.slice(1))
  }

  const rows = s.hours.length
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr_1fr]">
      <div className="flex flex-col gap-5">
        <Panel tag={s.phoneTag} right={<span>{playing ? s.playing : ""}</span>}>
          <div aria-live="polite" className="flex min-h-56 flex-col gap-3">
            <Transcript lines={s.script.slice(0, shown)} labels={{ caller: s.caller, assistant: s.assistant }} />
            {playing && shown < s.script.length && (
              <span aria-hidden className="kds-live font-mono text-sm text-muted-foreground">
                ···
              </span>
            )}
          </div>
          <button
            type="button"
            disabled={playing}
            onClick={play}
            className="min-h-11 rounded-md bg-ink px-4 font-semibold text-ink-foreground transition-colors duration-150 ease-out hover:bg-ink/85 disabled:opacity-50"
          >
            {playing ? s.playing : shown ? s.again : s.play}
          </button>
        </Panel>
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[11.5px] tracking-[0.08em] text-muted-foreground uppercase">{s.realTitle}</p>
          <CallButton />
        </div>
      </div>

      <Panel tag={s.calendarTag}>
        <div
          className="grid gap-x-1.5"
          style={{ gridTemplateColumns: "44px repeat(3, minmax(0, 1fr))", gridTemplateRows: `28px repeat(${rows}, 44px)` }}
        >
          <span />
          {s.techs.map((tech) => (
            <span key={tech} className="border-b border-foreground text-center font-mono text-[11px] tracking-[0.06em] uppercase">
              {tech}
            </span>
          ))}
          {s.hours.map((h, i) => (
            <span
              key={h}
              className="border-t border-border pt-0.5 font-mono text-[10.5px] text-muted-foreground"
              style={{ gridColumn: 1, gridRow: i + 2 }}
            >
              {h}
            </span>
          ))}
          {s.hours.map((h, i) =>
            [0, 1, 2].map((c) => (
              <span key={`${h}-${c}`} className="border-t border-border" style={{ gridColumn: c + 2, gridRow: i + 2 }} />
            )),
          )}
          {s.bookings.map((b) => (
            <div
              key={b.what}
              className="z-10 m-0.5 overflow-hidden rounded-[3px] border border-foreground bg-muted px-1.5 py-1 text-[11.5px] leading-tight"
              style={{ gridColumn: b.tech + 2, gridRow: `${b.start + 2} / span ${b.len}` }}
            >
              {b.what}
            </div>
          ))}
          {booked &&
            [0, 1].map((c) => (
              <div
                key={c}
                className="z-10 m-0.5 flex animate-in flex-col overflow-hidden rounded-[3px] bg-primary px-1.5 py-1 text-[11.5px] leading-tight text-white duration-300 zoom-in-90 fade-in"
                style={{ gridColumn: c + 2, gridRow: NEW_SLOT + 2 }}
              >
                {s.newBooking}
                <span className="font-mono text-[9.5px] tracking-[0.05em] uppercase opacity-90">{s.byPhone}</span>
              </div>
            ))}
        </div>
      </Panel>

      <div className="flex flex-col gap-5">
        <Panel tag={s.checkoutTag}>
          {open.length === 0 ? (
            <p className="text-sm text-muted-foreground">{s.noOpen}</p>
          ) : (
            <>
              <div className="flex flex-col">
                {open.map((o, i) => (
                  <button
                    key={o.client}
                    type="button"
                    aria-pressed={selected === i}
                    onClick={() => setSelected(i)}
                    className={cn(
                      "flex items-baseline justify-between gap-2 border-b border-border px-2 py-2 text-left text-[14px]",
                      selected === i ? "bg-foreground text-background" : "hover:bg-muted",
                    )}
                  >
                    <span>
                      <b>{o.client}</b> · {o.service}{" "}
                      <span className={selected === i ? "text-ink-muted" : "text-muted-foreground"}>
                        {fill(s.with, { tech: s.techs[o.tech] })}
                      </span>
                    </span>
                    <span className="font-mono">{price(o.price)}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="mr-1 font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">{s.tip}</span>
                {TIPS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    aria-pressed={tip === p}
                    onClick={() => setTip(p)}
                    className={cn(
                      "min-h-8 min-w-12 rounded-[4px] border font-mono text-[13px]",
                      tip === p ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground",
                    )}
                  >
                    {p}%
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={charge}
                className="min-h-11 rounded-md bg-primary px-4 font-semibold text-primary-foreground transition-colors duration-150 ease-out hover:bg-primary-hover"
              >
                {fill(s.charge, { total: price((current?.price ?? 0) + tipAmount) })}
              </button>
            </>
          )}
        </Panel>
        <Panel tag={s.payrollTag}>
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-5 gap-y-1.5 text-[14px]">
            {s.cols.map((col) => (
              <span key={col} className="font-mono text-[10.5px] tracking-[0.06em] text-muted-foreground uppercase last:text-right">
                {col}
              </span>
            ))}
            {s.techs.map((tech, i) => (
              <div key={tech} className="contents">
                <span>{tech}</span>
                <span className="font-mono">{s.hoursWorked[i]}</span>
                <span className="text-right font-mono">{price(tips[i])}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel tag={s.waitTag} right={<span>{waiting.length}</span>}>
          {waiting.length === 0 && <p className="text-sm text-muted-foreground">{s.noWait}</p>}
          <ol className="flex flex-col gap-1">
            {waiting.map((w, i) => (
              <li key={`${w}-${i}`} className="flex items-center gap-2 text-[14px]">
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-[3px] font-mono text-[11px]",
                    i === 0 ? "bg-primary text-white" : "bg-muted",
                  )}
                >
                  {i + 1}
                </span>
                {w}
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={addWalkin} className="min-h-9 rounded-[4px] border border-foreground px-3 text-[13px] font-semibold hover:bg-muted">
              {s.add}
            </button>
            <button
              type="button"
              disabled={!waiting.length}
              onClick={seat}
              className="min-h-9 rounded-[4px] bg-ink px-3 text-[13px] font-semibold text-ink-foreground hover:bg-ink/85 disabled:opacity-40"
            >
              {s.seat}
            </button>
          </div>
        </Panel>
      </div>
    </div>
  )
}
