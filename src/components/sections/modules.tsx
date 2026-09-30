import { IsoFigure, type FigureName } from "@/components/iso/iso-figure"
import { pad2, SectionHead } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const FIGURES: FigureName[] = ["ai", "loyalty", "counter", "insights", "kiosk", "kds", "tv", "delivery"]

export function Modules() {
  const { t } = useI18n()
  const m = t.modules
  const cards = m.cards.map((card, i) => ({ ...card, n: i + 1, fig: FIGURES[i] }))
  const half = Math.ceil(cards.length / 2)
  return (
    <section id="modules" className="site-container section pt-8 lg:pt-10">
      <SectionHead title={m.title} className="border-b-2 border-foreground pb-6 lg:max-w-none" />
      <div className="grid lg:grid-cols-2 lg:gap-x-14">
        {[cards.slice(0, half), cards.slice(half)].map((col, c) => (
          <ol key={c} className="flex flex-col">
            {col.map((card) => (
              <li
                key={card.title}
                className="grid grid-cols-[84px_1fr] items-center gap-4 border-b border-border py-5 sm:grid-cols-[112px_1fr] sm:gap-6"
              >
                <div className="h-20 sm:h-24">
                  <IsoFigure name={card.fig} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-heading text-[21px] leading-tight font-[650] tracking-[-0.015em]">
                      <span className="mr-2.5 font-mono text-xs font-normal tracking-normal text-primary">
                        {pad2(card.n)}
                      </span>
                      {card.title}
                    </h3>
                    <span
                      className={cn(
                        "font-mono text-[10.5px] tracking-[0.08em] uppercase",
                        card.both ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {card.both ? m.both : m.restaurants}
                    </span>
                  </div>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{card.body}</p>
                </div>
              </li>
            ))}
          </ol>
        ))}
      </div>
      <p className="mt-7 text-[16.5px] leading-relaxed">{m.more}</p>
    </section>
  )
}
