import { useState } from "react"
import { CtaLink } from "@/components/cta-link"
import { useI18n } from "@/lib/i18n"

function Slider({
  id,
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  id: string
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-base font-semibold">
          {label}
        </label>
        <span className="font-mono text-xl text-white">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  )
}

export function Calculator({ intro }: { intro?: string }) {
  const { t, path, money, lang } = useI18n()
  const c = t.calc
  const [volume, setVolume] = useState(20000)
  const [debit, setDebit] = useState(50)
  const [ticket, setTicket] = useState(8)

  const d = debit / 100
  const credit = volume * (1 - d)
  const debitAmt = volume * d
  const debitTx = ticket > 0 ? debitAmt / ticket : 0
  const allTx = ticket > 0 ? volume / ticket : 0
  const square = credit * 0.025 + debitAmt * 0.0075 + debitTx * 0.07
  const clover = volume * 0.023 + allTx * 0.1
  const acqLow = credit * 0.013 + debitTx * 0.08 + 60
  const acqHigh = credit * 0.018 + debitTx * 0.08 + 60
  const squareWins = square <= acqHigh
  const savings = `${money(Math.max(0, square - acqHigh))} – ${money(Math.max(0, square - acqLow))}`
  const pct =
    lang === "en" || lang === "vi" ? `${debit}%` : `${debit} %`

  return (
    <section id="calculateur" className="bg-ink text-ink-foreground">
      <div className="site-container section flex flex-col gap-11">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">
            {c.title}
          </h2>
          <p className="text-lg text-ink-muted">{intro ?? c.sub}</p>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-9">
            <Slider
              id="calc-volume"
              label={c.volume}
              value={volume}
              display={money(volume)}
              min={5000}
              max={80000}
              step={1000}
              onChange={setVolume}
            />
            <Slider
              id="calc-debit"
              label={c.debit}
              value={debit}
              display={pct}
              min={0}
              max={100}
              step={5}
              onChange={setDebit}
            />
            <Slider
              id="calc-ticket"
              label={c.ticket}
              value={ticket}
              display={money(ticket)}
              min={4}
              max={40}
              step={1}
              onChange={setTicket}
            />
            <p className="text-[12.5px] leading-relaxed text-ink-faint">
              {c.disclaimer}
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded-2xl bg-background p-7 text-foreground sm:p-9">
            <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground">
              {c.resultTag}
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-baseline justify-between border-b pb-3">
                <span className="text-base">{c.square}</span>
                <span className="font-mono text-[22px]">{money(square)}</span>
              </div>
              <div className="flex items-baseline justify-between border-b pb-3">
                <span className="text-base">{c.clover}</span>
                <span className="font-mono text-[22px]">{money(clover)}</span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-base font-semibold text-primary">
                  {c.acq}
                </span>
                <span className="font-mono text-[22px] whitespace-nowrap text-primary">
                  {money(acqLow)} – {money(acqHigh)}
                </span>
              </div>
            </div>
            <p className="rounded-lg bg-muted p-4 text-[15px] leading-relaxed">
              {squareWins ? (
                <>
                  <strong>{c.honestTitle}</strong>
                  {c.honestBody}
                </>
              ) : (
                <>
                  <strong>{c.saveTitle}</strong> {savings}
                  {c.saveBody}
                </>
              )}
            </p>
            <CtaLink to={path("/demo")}>{c.cta}</CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
