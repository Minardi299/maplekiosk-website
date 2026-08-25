import { useI18n } from "@/lib/i18n"

function FlowBox({ children }: { children: string }) {
  return (
    <span className="rounded-lg border-[1.5px] border-secondary px-3.5 py-2.5">
      {children}
    </span>
  )
}

export function MoneyDiagram() {
  const { t } = useI18n()
  const d = t.diagram
  return (
    <section className="site-container section flex flex-col gap-10">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">
          {d.title}
        </h2>
        <p className="text-lg text-muted-foreground sm:text-[19px]">{d.sub}</p>
      </div>
      <div className="grid items-stretch gap-7 lg:grid-cols-2">
        <div className="flex flex-col gap-5 rounded-2xl border bg-card p-7">
          <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground">
            {d.othersTag}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[15px] font-medium">
            <FlowBox>{d.you}</FlowBox>
            <span className="text-muted-foreground">→</span>
            <span className="min-w-40 flex-1 rounded-lg bg-secondary px-3.5 py-2.5 text-center leading-snug text-secondary-foreground">
              {d.othersBox}
            </span>
            <span className="text-muted-foreground">→</span>
            <FlowBox>{d.bank}</FlowBox>
          </div>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {d.othersNote}
          </p>
        </div>
        <div className="flex flex-col gap-5 rounded-2xl border-2 border-primary bg-card p-7">
          <div className="font-mono text-xs tracking-[0.1em] text-primary">
            {d.usTag}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3 text-[15px] font-medium">
              <FlowBox>{d.you}</FlowBox>
              <span className="text-muted-foreground">→</span>
              <span className="min-w-40 flex-1 rounded-lg border-[1.5px] border-secondary px-3.5 py-2.5 text-center leading-snug">
                {d.acqBox}
              </span>
              <span className="text-muted-foreground">→</span>
              <FlowBox>{d.bank}</FlowBox>
            </div>
            <div className="flex flex-col items-center sm:ml-[38%] sm:items-start">
              <div className="h-5 w-0 border-l-[1.5px] border-dashed border-primary" />
              <span className="rounded-lg border-[1.5px] border-dashed border-primary px-3.5 py-2 text-center text-sm font-semibold text-primary">
                {d.usBox}
              </span>
            </div>
          </div>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {d.usNote}
          </p>
        </div>
      </div>
    </section>
  )
}
