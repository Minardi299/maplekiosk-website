import { useEffect, useState } from "react"
import { fill, Panel, Seg, usePrice } from "@/components/demo/kit"
import { Stamps } from "@/components/plan-screens/screen-kit"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type Ticket = { n: number; src: string; lines: string[]; t0: number }
type Screen = { kind: "idle" } | { kind: "thanks"; n: number } | { kind: "ready"; n: number }

const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`

export function CafeDemo({ push }: { push: (text: string) => void }) {
  const { t } = useI18n()
  const c = t.demo.cafe
  const price = usePrice()
  const [device, setDevice] = useState<"kiosk" | "counter">("kiosk")
  const [cart, setCart] = useState<Record<string, number>>({})
  const [orderNo, setOrderNo] = useState(44)
  const [now, setNow] = useState(0)
  const [tickets, setTickets] = useState<Ticket[]>(() =>
    c.seed.map((s, i) => ({ n: s.n, src: s.src, lines: [...s.lines], t0: i === 0 ? -95 : -21 })),
  )
  const [soldOut, setSoldOut] = useState<Set<string>>(() => new Set())
  const [customer, setCustomer] = useState<number | null>(null)
  const [stamps, setStamps] = useState(() => c.customers.map((x) => x.stamps))
  const [screen, setScreen] = useState<Screen>({ kind: "idle" })

  useEffect(() => {
    const id = setInterval(() => setNow((n) => n + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const lines = c.items.filter((it) => cart[it.id])
  const total = lines.reduce((sum, it) => sum + it.price * cart[it.id], 0)

  function add(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
  }
  function removeOne(id: string) {
    setCart((prev) => {
      const next = { ...prev, [id]: (prev[id] ?? 0) - 1 }
      if (next[id] <= 0) delete next[id]
      return next
    })
  }
  function send() {
    if (!lines.length) return
    setTickets((prev) => [...prev, { n: orderNo, src: c.src[device], lines: lines.map((it) => `${cart[it.id]} × ${it.name}`), t0: now }])
    push(fill(c.events.sent, { n: orderNo, src: c.src[device].toLowerCase() }))
    if (customer !== null) {
      const n = Math.min(10, stamps[customer] + 1)
      setStamps((prev) => prev.map((v, i) => (i === customer ? n : v)))
      push(fill(c.events.stamp, { name: c.customers[customer].name, n }))
    }
    setScreen({ kind: "thanks", n: orderNo })
    setCart({})
    setOrderNo((n) => n + 1)
  }
  function bump(n: number) {
    setTickets((prev) => prev.filter((tk) => tk.n !== n))
    setScreen({ kind: "ready", n })
    push(fill(c.events.bumped, { n }))
  }
  function toggleSoldOut(id: string, name: string) {
    const wasOut = soldOut.has(id)
    const next = new Set(soldOut)
    if (wasOut) next.delete(id)
    else next.add(id)
    setSoldOut(next)
    if (wasOut) {
      push(fill(c.events.back, { item: name }))
      return
    }
    push(fill(c.events.soldOut, { item: name }))
    setCart((prev) => {
      const copy = { ...prev }
      delete copy[id]
      return copy
    })
  }
  function pickCustomer(i: number | null) {
    setCustomer(i)
    if (i !== null) push(fill(c.events.customer, { name: c.customers[i].name }))
  }

  const cartBlock = (
    <div className="flex flex-col gap-2 border-t border-border pt-3">
      <div className="flex justify-between font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
        <span>{fill(c.order, { n: orderNo })}</span>
        {customer !== null && <span className="text-primary">{c.customers[customer].name}</span>}
      </div>
      {lines.length === 0 && <p className="text-sm text-muted-foreground">{c.empty}</p>}
      {lines.map((it) => (
        <div key={it.id} className="flex items-center gap-2 text-[14.5px]">
          <span className="font-mono text-primary">{cart[it.id]}×</span>
          <span className="flex-1">{it.name}</span>
          <span className="font-mono">{price(it.price * cart[it.id])}</span>
          <button
            type="button"
            aria-label={fill(c.remove, { item: it.name })}
            onClick={() => removeOne(it.id)}
            className="size-7 rounded-[4px] border border-border hover:border-foreground"
          >
            −
          </button>
        </div>
      ))}
      <div className="flex justify-between border-t border-dashed border-border pt-2 font-semibold">
        <span>{c.total}</span>
        <span className="font-mono">{price(total)}</span>
      </div>
      <button
        type="button"
        disabled={!lines.length}
        onClick={send}
        className="min-h-11 rounded-md bg-primary px-4 font-semibold text-primary-foreground transition-colors duration-150 ease-out hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-40"
      >
        {device === "kiosk" ? c.pay : c.charge} · {price(total)}
      </button>
    </div>
  )

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr]">
      <Panel
        tag={c.inputTag}
        right={
          <Seg
            label={c.inputTag}
            value={device}
            onChange={setDevice}
            options={[
              { value: "kiosk", label: c.kiosk },
              { value: "counter", label: c.counter },
            ]}
          />
        }
      >
        {device === "kiosk" ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {c.items.map((it) => {
              const out = soldOut.has(it.id)
              return (
                <button
                  key={it.id}
                  type="button"
                  disabled={out}
                  onClick={() => add(it.id)}
                  className="flex min-h-20 flex-col items-start justify-between gap-1 border-[1.5px] border-foreground bg-background p-2.5 text-left transition-colors duration-150 ease-out hover:bg-muted disabled:cursor-not-allowed disabled:border-border disabled:text-muted-foreground"
                >
                  <span className="text-[14.5px] leading-tight font-semibold">{it.name}</span>
                  {out ? (
                    <span className="rounded-[3px] bg-primary px-1.5 py-px font-mono text-[10px] tracking-[0.06em] text-white uppercase">
                      {c.soldOut}
                    </span>
                  ) : (
                    <span className="font-mono text-[13px]">{price(it.price)}</span>
                  )}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              {c.items.map((it) => {
                const out = soldOut.has(it.id)
                return (
                  <div key={it.id} className="flex items-center gap-2 border-b border-border py-1.5 text-[14.5px]">
                    <button
                      type="button"
                      disabled={out}
                      onClick={() => add(it.id)}
                      className="flex flex-1 items-center justify-between gap-2 py-1 text-left hover:text-primary disabled:text-muted-foreground disabled:line-through"
                    >
                      <span>{it.name}</span>
                      <span className="font-mono">{price(it.price)}</span>
                    </button>
                    <button
                      type="button"
                      aria-pressed={out}
                      onClick={() => toggleSoldOut(it.id, it.name)}
                      className={cn(
                        "min-h-8 min-w-16 rounded-[4px] border px-2 font-mono text-[11px] tracking-[0.06em] uppercase",
                        out ? "border-primary bg-primary text-white" : "border-foreground hover:bg-muted",
                      )}
                    >
                      {out ? c.back : c.mark}
                    </button>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">{c.customerTag}</span>
              {[null, 0, 1, 2].map((i) => (
                <button
                  key={String(i)}
                  type="button"
                  aria-pressed={customer === i}
                  onClick={() => pickCustomer(i)}
                  className={cn(
                    "min-h-8 rounded-[4px] border px-2.5 text-[13px]",
                    customer === i ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground",
                  )}
                >
                  {i === null ? c.noCustomer : c.customers[i].name}
                </button>
              ))}
            </div>
          </div>
        )}
        {cartBlock}
      </Panel>

      <div className="flex flex-col gap-5">
        <Panel tag={c.kitchen} right={<span>{tickets.length}</span>}>
          {tickets.length === 0 && <p className="text-sm text-muted-foreground">{c.noTickets}</p>}
          <ol className="grid gap-2 sm:grid-cols-3">
            {tickets.map((tk) => {
              const age = Math.max(0, now - tk.t0)
              return (
                <li key={tk.n} className="flex animate-in flex-col border-[1.5px] border-foreground duration-200 zoom-in-95 fade-in">
                  <div
                    className={cn(
                      "flex justify-between px-2 py-1 font-mono text-[10.5px] tracking-[0.04em] uppercase",
                      age > 90 ? "bg-primary text-white" : "bg-muted",
                    )}
                  >
                    <span>
                      #{tk.n} · {tk.src}
                    </span>
                    <span>{clock(age)}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-2 text-[13.5px]">
                    {tk.lines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => bump(tk.n)}
                    className="m-2 mt-0 min-h-9 rounded-[4px] bg-ink font-mono text-xs tracking-[0.06em] text-ink-foreground uppercase hover:bg-ink/85"
                  >
                    {c.bump}
                  </button>
                </li>
              )
            })}
          </ol>
        </Panel>
        <div className="grid gap-5 sm:grid-cols-2">
          <Panel tag={c.screen} dark>
            <div aria-live="polite" className="flex min-h-36 flex-col justify-center gap-2.5">
              {customer !== null && (
                <>
                  <b className="font-heading text-xl">{fill(c.welcome, { name: c.customers[customer].name })}</b>
                  <Stamps filled={stamps[customer]} dark />
                  <span className="text-sm text-ink-muted">{fill(c.stamps, { n: stamps[customer] })}</span>
                </>
              )}
              {lines.length > 0 ? (
                <div className="flex items-baseline justify-between border-t border-white/15 pt-2">
                  <span className="text-ink-muted">{fill(c.order, { n: orderNo })}</span>
                  <b className="font-mono text-2xl">{price(total)}</b>
                </div>
              ) : screen.kind === "ready" ? (
                <b className="font-heading text-[26px] leading-tight text-[#f3c9c1]">{fill(c.ready, { n: screen.n })}</b>
              ) : screen.kind === "thanks" ? (
                <span className="text-lg">{fill(c.thanks, { n: screen.n })}</span>
              ) : (
                customer === null && <span className="text-lg text-ink-muted">{c.idle}</span>
              )}
            </div>
          </Panel>
          <Panel tag={c.tv} dark>
            <ul className="flex flex-col gap-1.5">
              {c.items.map((it) => {
                const out = soldOut.has(it.id)
                return (
                  <li key={it.id} className={cn("flex items-baseline gap-2 text-[14px]", out && "text-ink-faint line-through")}>
                    <span>{it.name}</span>
                    <span aria-hidden className="flex-1 -translate-y-1 border-b-[1.5px] border-dotted border-white/25" />
                    {out ? (
                      <span className="rounded-[3px] bg-primary px-1.5 py-px font-mono text-[10px] tracking-[0.06em] text-white uppercase no-underline">
                        {c.soldOut}
                      </span>
                    ) : (
                      <span className="font-mono">{price(it.price)}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}
