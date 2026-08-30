import { useI18n } from "@/lib/i18n"

// illustrative shape only, like the hero's order ticket
const HOURS = [2, 3, 4, 9, 7, 4, 3, 5, 8, 10, 6, 3]
const RUSH = new Set([3, 4, 8, 9])

export function Insights() {
  const { t } = useI18n()
  const s = t.insights
  return (
    <section className="border-t bg-muted">
      <div className="site-container section grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-[38px]">
            {s.title}
          </h2>
          <p className="max-w-[36em] text-lg leading-relaxed text-muted-foreground">
            {s.body}
          </p>
        </div>
        <div className="w-full max-w-[420px] justify-self-center lg:justify-self-end">
          <div className="flex flex-col gap-5 rounded-2xl border bg-card p-6 shadow-sm">
            <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground">
              {s.tag}
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm font-semibold">{s.hoursLabel}</span>
              <div className="flex h-24 items-end gap-1.5" aria-hidden="true">
                {HOURS.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm ${RUSH.has(i) ? "bg-primary" : "bg-muted-foreground/30"}`}
                    style={{ height: `${h * 10}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4 border-t pt-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold">{s.topLabel}</span>
                <ol className="flex flex-col gap-1">
                  {s.topItems.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="font-mono tabular-nums">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">{s.avgLabel}</span>
                <span className="font-mono text-3xl">{s.avgValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
