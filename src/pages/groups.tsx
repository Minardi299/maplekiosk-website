import { CtaLink } from "@/components/cta-link"
import { IsoFigure } from "@/components/iso/iso-figure"
import { PageMeta } from "@/components/page-meta"
import { FinalCta } from "@/components/sections/final-cta"
import { headingClass, pad2, SectionHead } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function GroupsPage() {
  const { t } = useI18n()
  const g = t.groups
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(g.mailSubject)}`
  return (
    <>
      <PageMeta title={t.meta.groups.title} desc={t.meta.groups.desc} />
      <section className="site-container grid items-center gap-10 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-20">
        <div className="flex flex-col gap-6">
          <h1 className={cn(headingClass, "sm:text-5xl lg:text-[58px]")}>{g.title}</h1>
          <p className="max-w-[32em] text-lg leading-relaxed sm:text-[19px]">{g.sub}</p>
          <CtaLink href={mailto} size="lg" className="self-start">
            {g.cta} <span aria-hidden>→</span>
          </CtaLink>
        </div>
        <div className="h-56 sm:h-72">
          <IsoFigure name="stores" />
        </div>
      </section>

      <section className="border-t border-foreground bg-card">
        <div className="site-container section">
          <ol className="grid border-t-2 border-foreground md:grid-cols-2 md:gap-x-14">
            {g.pains.map((pain, i) => (
              <li key={pain.label} className="flex flex-col gap-2.5 border-b border-border py-6">
                <span className="font-mono text-[11.5px] tracking-[0.08em] text-muted-foreground uppercase">
                  <span className="mr-2.5 text-primary">{pad2(i + 1)}</span>
                  {pain.label}
                </span>
                <h2 className="font-heading text-[26px] leading-[1.1] font-[650] tracking-[-0.018em] text-balance">{pain.hook}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">{pain.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-foreground">
        <div className="site-container section grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <SectionHead title={g.insightsTitle} sub={g.insightsBody} />
          <div className="mx-auto h-60 w-full max-w-sm">
            <IsoFigure name="insights" />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground bg-card">
        <div className="site-container section grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-6">
            <SectionHead title={g.proofTitle} />
            <ul className="border-t-2 border-foreground">
              {g.proofPoints.map((point) => (
                <li key={point} className="flex gap-3 border-b border-border py-3.5 text-[15.5px] leading-relaxed">
                  <span aria-hidden className="text-primary">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-[1.5px] border-foreground">
            <div className="border-b border-foreground px-5 py-2.5 font-mono text-[11.5px] tracking-[0.08em] text-primary uppercase">
              {g.partnerTag}
            </div>
            <div className="flex flex-col gap-2 p-5 sm:p-7">
              <h2 className="font-heading text-[26px] leading-[1.12] font-[650] tracking-[-0.018em] text-balance">{g.partnerTitle}</h2>
              <ol>
                {g.partnerPoints.map((point, i) => (
                  <li key={point.title} className="flex items-baseline gap-4 border-b border-border py-4 last:border-b-0">
                    <span aria-hidden className="font-mono text-sm text-primary">
                      {pad2(i + 1)}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold">{point.title}</span>
                      <span className="text-[15px] leading-relaxed text-muted-foreground">{point.body}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title={g.ctaTitle}
        sub={g.ctaSub}
        action={
          <CtaLink href={mailto} size="lg">
            {g.cta} <span aria-hidden>→</span>
          </CtaLink>
        }
      />
    </>
  )
}
