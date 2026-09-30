import { IsoFigure, type FigureName } from "@/components/iso/iso-figure"
import { PageMeta } from "@/components/page-meta"
import { FinalCta } from "@/components/sections/final-cta"
import { headingClass, pad2 } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const FIGURES: FigureName[] = ["kiosk", "counter", "kds", "delivery", "tv", "loyalty", "register", "server"]

export default function FeaturesPage() {
  const { t } = useI18n()
  const f = t.features
  return (
    <>
      <PageMeta title={t.meta.features.title} desc={t.meta.features.desc} />
      <section className="site-container grid gap-6 pt-10 pb-12 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14 lg:pt-20">
        <div className="flex flex-col gap-5">
          <h1 className={cn(headingClass, "sm:text-5xl lg:text-[58px]")}>{f.title}</h1>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">{f.sub}</p>
      </section>
      <section className="site-container pb-16 lg:pb-24">
        <ol className="border-t-2 border-foreground">
          {f.blocks.map((b, i) => (
            <li key={b.title} className="grid items-center gap-6 border-b border-foreground py-8 md:grid-cols-2 md:gap-14">
              <figure className={cn("border-[1.5px] border-foreground bg-card", i % 2 === 1 && "md:order-2")}>
                <div className="mx-auto h-52 max-w-xs p-5 sm:h-60">
                  <IsoFigure name={FIGURES[i]} />
                </div>
              </figure>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[13px] text-primary">{pad2(i + 1)}</span>
                <h2 className="font-heading text-[30px] leading-[1.08] font-[650] tracking-[-0.02em] sm:text-[36px]">{b.title}</h2>
                <p className="max-w-md text-[17px] leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <FinalCta />
    </>
  )
}
