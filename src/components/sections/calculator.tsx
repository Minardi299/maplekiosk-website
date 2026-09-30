import { useState } from "react"
import { FeeChart } from "@/components/sections/fee-chart"
import { SectionHead } from "@/components/ui-kit"
import { fees, VOLUME_MAX, VOLUME_MIN } from "@/lib/fees"
import { useI18n } from "@/lib/i18n"

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
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[15.5px] font-semibold">
          {label}
        </label>
        <span className="font-mono text-lg">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        className="range"
        min={min}
        max={max}
        step={step}
        value={value}
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
  const { square, clover, acqLow, acqHigh } = fees(volume, debit, ticket)
  const squareWins = square <= acqHigh
  const n = locations
  const range = (lo: number, hi: number) => `${money(lo)} – ${money(hi)}`
  const pct = lang === "en" || lang === "vi" ? `${debit}%` : `${debit} %`

  return (
    <section id="calculateur" className="site-container section">
      <SectionHead title={c.title} sub={intro ?? c.sub} />
      <div className="mt-11 grid border-[1.5px] border-foreground bg-card lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col gap-7 p-5 sm:p-7">
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
          <Slider id="calc-debit" label={c.debit} value={debit} display={pct} min={0} max={100} step={5} onChange={setDebit} />
          <Slider id="calc-ticket" label={c.ticket} value={ticket} display={money(ticket)} min={4} max={40} step={1} onChange={setTicket} />
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
          <p className="text-[12.5px] leading-relaxed text-muted-foreground">{c.disclaimer}</p>
        </div>
        <div className="flex flex-col gap-5 border-t-[1.5px] border-foreground p-5 sm:p-7 lg:border-t-0 lg:border-l-[1.5px]">
          <span className="font-mono text-[11.5px] tracking-[0.08em] text-primary uppercase">{c.chartTag}</span>
          <div aria-live="polite">
            {squareWins ? (
              <p className="border-[1.5px] border-foreground px-4 py-3 text-[15px] leading-relaxed">
                <strong>{c.honestTitle}</strong>
                {c.honestBody}
              </p>
            ) : (
              <>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-[34px] leading-tight tracking-[-0.02em] sm:text-[40px]">
                    {range(Math.max(0, Math.round(square - acqHigh)) * n, Math.max(0, Math.round(square - acqLow)) * n)}
                  </span>
                  {n > 1 && (
                    <span className="text-sm text-muted-foreground">{c.totalAcross.replace("{n}", String(n))}</span>
                  )}
                </div>
                <p className="mt-1 text-[14.5px] leading-relaxed text-muted-foreground">{c.saveBody.trim()}</p>
              </>
            )}
          </div>
          <FeeChart volume={volume} debit={debit} ticket={ticket} locations={locations} />
          <dl className="flex flex-col">
            {[
              [c.square, money(square * n)],
              [c.clover, money(clover * n)],
              [c.acq, range(Math.round(acqLow) * n, Math.round(acqHigh) * n)],
            ].map(([label, value], i) => (
              <div
                key={label}
                className={`flex justify-between gap-4 border-b border-border py-2.5 text-[15px] last:border-b-0 ${i === 2 ? "font-semibold" : ""}`}
              >
                <dt>{label}</dt>
                <dd className="font-mono">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
