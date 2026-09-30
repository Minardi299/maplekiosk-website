import { Link } from "react-router"
import { IsoFigure, type FigureName } from "@/components/iso/iso-figure"
import { SectionHead } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"

const FIGURES: FigureName[] = ["counter-scene", "nail", "ai"]

export function Services() {
  const { t, path } = useI18n()
  const s = t.services
  return (
    <section id="services" className="section scroll-mt-16 border-y border-foreground bg-card">
      <div className="site-container">
        <SectionHead title={s.title} sub={s.sub} />
        <ol className="mt-11 border-t-2 border-foreground">
          {s.cards.map((card, i) => (
            <li key={card.link}>
              <Link
                to={path(t.nav.menu[i].to)}
                className="group grid grid-cols-[1fr_88px] items-center gap-x-5 gap-y-3 border-b border-foreground py-7 transition-colors duration-200 ease-out hover:bg-background sm:grid-cols-[48px_1.15fr_1fr_150px] sm:gap-x-8"
              >
                <span className="hidden self-start pt-2 pl-1 font-mono text-[13px] text-primary sm:block">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>
                  <span className="block font-heading text-[26px] leading-[1.08] font-[650] tracking-[-0.02em] text-balance sm:text-[32px]">
                    {card.hook}
                  </span>
                </span>
                <span className="col-span-2 sm:col-span-1">
                  <span className="block text-base leading-relaxed text-muted-foreground">{card.body}</span>
                  <span className="mt-3 inline-flex items-center gap-2 font-semibold">
                    {card.link}
                    <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </span>
                <span className="col-start-2 row-start-1 h-20 sm:col-start-auto sm:row-start-auto sm:h-28">
                  <IsoFigure name={FIGURES[i]} />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
