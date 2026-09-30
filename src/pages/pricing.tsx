import { Link } from "react-router"
import { CtaLink } from "@/components/cta-link"
import { Faq } from "@/components/faq"
import { IsoFigure, type FigureName } from "@/components/iso/iso-figure"
import { PageMeta } from "@/components/page-meta"
import { FinalCta } from "@/components/sections/final-cta"
import { TermsChips } from "@/components/sections/terms-chips"
import { headingClass, SectionHead } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

const FIGURES: FigureName[] = ["kiosk", "kds", "nail"]

export default function PricingPage() {
  const { t, path } = useI18n()
  const p = t.pricing
  const doors = [
    { to: "/restaurants", label: t.footer.coffee },
    { to: "/restaurants", label: t.footer.restaurants },
    { to: "/salons", label: t.footer.nails },
  ]
  return (
    <>
      <PageMeta title={t.meta.pricing.title} desc={t.meta.pricing.desc} />
      <section className="site-container grid gap-6 pt-10 pb-12 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14 lg:pt-20">
        <div className="flex flex-col gap-5">
          <h1 className={cn(headingClass, "sm:text-5xl lg:text-[58px]")}>{p.title}</h1>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">{p.sub}</p>
      </section>
      <section className="site-container pb-12">
        <div className="border-[1.5px] border-foreground bg-card">
          <div className="hidden grid-cols-[96px_1.2fr_1fr_1fr_1fr] gap-6 border-b border-foreground px-5 py-2.5 font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase md:grid">
            <span />
            <span>{p.colApp}</span>
            <span>{p.colFor}</span>
            <span>{p.colPrice}</span>
            <span>{p.colOnPrem}</span>
          </div>
          {p.apps.map((app, i) => (
            <div
              key={app.name}
              className="grid grid-cols-[72px_1fr] items-center gap-x-5 gap-y-2 border-b border-border px-5 py-5 last:border-b-0 md:grid-cols-[96px_1.2fr_1fr_1fr_1fr] md:gap-6"
            >
              <div className="row-span-3 h-16 md:row-span-1 md:h-20">
                <IsoFigure name={FIGURES[i]} />
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 className="font-heading text-2xl font-[650] tracking-[-0.015em]">{app.name}</h2>
                {app.tag && (
                  <span className="rounded-[3px] bg-primary px-2 py-0.5 font-mono text-[10.5px] tracking-[0.08em] text-white uppercase">
                    {app.tag}
                  </span>
                )}
              </div>
              <Link to={path(doors[i].to)} className="text-[15px] underline decoration-[1.5px] underline-offset-4 hover:text-primary">
                {doors[i].label}
              </Link>
              <p className="flex items-baseline gap-1">
                <span className="font-mono text-[32px] leading-none">{app.price}</span>
                <span className="text-muted-foreground">{p.per}</span>
              </p>
              <p className="col-start-2 text-[15px] text-muted-foreground md:col-start-auto">{p.onPremValue}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{p.note}</p>
      </section>
      <section className="border-y border-foreground bg-card">
        <div className="site-container flex flex-wrap items-center justify-between gap-6 py-10">
          <div className="flex max-w-xl flex-col gap-2">
            <h2 className="font-heading text-[30px] leading-tight font-[650] tracking-[-0.02em]">{p.buyTitle}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{p.buyBody}</p>
          </div>
          <CtaLink href={`mailto:${SITE.email}`} variant="ink" size="lg">
            {p.buyCta}
          </CtaLink>
        </div>
      </section>
      <TermsChips />
      <section className="site-container section pt-4">
        <SectionHead title={p.faqTitle} />
        <div className="mt-10">
          <Faq items={p.faq} />
        </div>
      </section>
      <FinalCta />
    </>
  )
}
