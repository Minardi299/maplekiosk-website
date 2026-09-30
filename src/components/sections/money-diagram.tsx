import type { ReactNode } from "react"
import { SectionHead } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function Node({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("border border-foreground bg-card px-3 py-2.5 text-center text-[15px] leading-snug", className)}>
      {children}
    </span>
  )
}

function Flow({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={cn("h-1 w-0 min-w-5 flex-1", className)}>
      <line x1="0" y1="2" x2="100%" y2="2" className="money-path" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function MoneyDiagram() {
  const { t } = useI18n()
  const d = t.diagram
  return (
    <section className="site-container section">
      <SectionHead title={d.sub} />
      <div className="mt-11 grid border-[1.5px] border-foreground bg-card lg:grid-cols-2">
        <div className="flex flex-col gap-6 p-5 sm:p-7">
          <span className="font-mono text-[11.5px] tracking-[0.08em] text-muted-foreground uppercase">{d.othersTag}</span>
          <div className="flex flex-col items-stretch">
            <div className="flex items-center">
              <Node>{d.you}</Node>
              <Flow />
              <span className="flex max-w-[15rem] flex-[2] flex-col bg-foreground px-3 py-3 text-center leading-snug text-background">
                <b className="text-[15px] font-semibold">{d.othersName}</b>
                <span className="text-[12.5px] text-ink-muted">{d.othersParts}</span>
              </span>
              <Flow />
              <Node>{d.bank}</Node>
            </div>
            <div className="flex flex-col items-center text-primary">
              <svg aria-hidden className="h-7 w-1">
                <line x1="2" y1="0" x2="2" y2="100%" className="money-path" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="font-mono text-xs tracking-[0.06em] uppercase">{d.cut}</span>
            </div>
          </div>
          <p className="text-[15px] leading-relaxed text-muted-foreground">{d.othersNote}</p>
        </div>
        <div className="flex flex-col gap-6 border-t-[1.5px] border-foreground p-5 sm:p-7 lg:border-t-0 lg:border-l-[1.5px]">
          <span className="font-mono text-[11.5px] tracking-[0.08em] text-primary uppercase">{d.usTag}</span>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Node>{d.you}</Node>
              <Flow />
              <Node className="flex max-w-[15rem] flex-[2] flex-col">
                <b className="font-semibold">{d.acqName}</b>
                <span className="text-[12.5px] text-muted-foreground">{d.acqRate}</span>
              </Node>
              <Flow />
              <Node>{d.bank}</Node>
            </div>
            <div className="ml-6 flex flex-col items-start sm:ml-10">
              <span aria-hidden className="h-6 border-l-[1.5px] border-dashed border-primary" />
              <span className="border-[1.5px] border-dashed border-primary bg-card px-3.5 py-2 text-[14.5px] font-semibold text-primary">
                {d.usBox}
              </span>
            </div>
          </div>
          <p className="text-[15px] leading-relaxed text-muted-foreground">{d.usNote}</p>
        </div>
      </div>
      <p className="mt-3 text-[12.5px] text-muted-foreground">{t.zeroNote}</p>
    </section>
  )
}
