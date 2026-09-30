import { CallButton } from "@/components/call-button"
import { CtaLink } from "@/components/cta-link"
import { IsoPlan } from "@/components/iso/iso-plan"
import { salonPlan } from "@/components/iso/scenes/salon"
import { PageMeta } from "@/components/page-meta"
import { useSalonModules } from "@/components/plan-screens/salon"
import { FinalCta } from "@/components/sections/final-cta"
import { headingClass, SectionHead } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function SalonsPage() {
  const { t, path } = useI18n()
  const s = t.salons
  const modules = useSalonModules()
  return (
    <>
      <PageMeta title={t.meta.salons.title} desc={t.meta.salons.desc} />
      <section className="site-container grid gap-6 pt-10 pb-10 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14 lg:pt-20">
        <div className="flex flex-col gap-5">
          <h1 className={cn(headingClass, "sm:text-5xl lg:text-[58px]")}>{s.title}</h1>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="text-lg leading-relaxed sm:text-[19px]">{s.sub}</p>
          <CtaLink to={path(SITE.demoUrl)} size="lg">
            {t.nav.cta} <span aria-hidden>→</span>
          </CtaLink>
        </div>
      </section>
      <section className="site-container pb-16 lg:pb-20">
        <IsoPlan
          scene={salonPlan}
          modules={modules}
          s={{ ...s.plan, ...t.planUi }}
          demoTo={path(SITE.demoUrl)}
          ariaLabel={s.plan.aria}
        />
      </section>
      <section className="border-t border-foreground">
        <div className="site-container section">
          <SectionHead title={s.bandTitle} />
          <ol className="mt-10 grid border-t-2 border-foreground lg:grid-cols-3 lg:gap-x-10">
            {s.quotes.map((quote, i) => (
              <li key={quote.q} className="flex flex-col gap-3 border-b border-border py-6 lg:border-b-0">
                <span className="font-mono text-[13px] text-primary">0{i + 1}</span>
                <p className="font-heading text-[24px] leading-[1.15] font-[650] tracking-[-0.015em] text-balance">
                  {quote.q}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">{quote.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-t border-foreground bg-card">
        <div className="site-container section grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-5">
            <SectionHead title={s.listenTitle} />
            <p className="max-w-[34em] text-[15px] leading-relaxed text-muted-foreground">{s.disclosure}</p>
          </div>
          <CallButton size="lg" className="self-start lg:self-center lg:justify-self-start" />
        </div>
      </section>
      <FinalCta />
    </>
  )
}
