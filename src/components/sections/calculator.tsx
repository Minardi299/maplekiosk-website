import { useState } from "react"
import { CtaLink } from "@/components/cta-link"
import { FeeChart } from "@/components/sections/fee-chart"
import { fees, VOLUME_MAX, VOLUME_MIN } from "@/lib/fees"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function Slider({
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
        <span className="font-mono text-xl">{display}</span>
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
  const { t, money, lang } = useI18n()
  const c = t.calc
  const [volume, setVolume] = useState(20000)
  const [debit, setDebit] = useState(50)
  const [ticket, setTicket] = useState(8)
  const [locations, setLocations] = useState(1)

  // per-location math; the multiplier never flips the honest branch
  const { square, acqLow, acqHigh } = fees(volume, debit, ticket)
  const squareWins = square <= acqHigh
  const savings = `${money(Math.max(0, square - acqHigh))} – ${money(Math.max(0, square - acqLow))}`
  const savingsTotal = `${money(Math.max(0, Math.round(square - acqHigh)) * locations)} – ${money(Math.max(0, Math.round(square - acqLow)) * locations)}`
  const pct =
    lang === "en" || lang === "vi" ? `${debit}%` : `${debit} %`

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
              min={VOLUME_MIN}
              max={VOLUME_MAX}
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
            <Slider
              id="calc-locations"
              label={c.locations}
              value={locations}
              display={String(locations)}
              min={1}
              max={20}
              step={1}
              onChange={setLocations}
            />
            <p className="text-[12.5px] leading-relaxed text-ink-faint">
              {c.disclaimer}
            </p>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl bg-background p-6 text-foreground sm:p-9">
            <div className="flex flex-col gap-1.5">
              <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground">
                {c.chartTag}
              </div>
              {squareWins ? (
                <p className="text-[15px] leading-relaxed">
                  <strong>{c.honestTitle}</strong>
                  {c.honestBody}
                </p>
              ) : (
                <>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-3xl tracking-tight text-chart-1">
                      {locations > 1 ? savingsTotal : savings}
                    </span>
                    {locations > 1 && (
                      <span className="text-sm text-muted-foreground">
                        {c.totalAcross.replace("{n}", String(locations))}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.saveBody.trim()}
                  </p>
                </>
              )}
            </div>
            <FeeChart
              volume={volume}
              debit={debit}
              ticket={ticket}
              locations={locations}
            />
            <CtaLink to={SITE.demoUrl} reloadDocument>{c.cta}</CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
