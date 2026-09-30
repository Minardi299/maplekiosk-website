import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { IsoFigure } from "@/components/iso/iso-figure"
import { headingClass } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  const { t, path } = useI18n()
  const a = t.about
  return (
    <>
      <PageMeta title={t.meta.about.title} desc={t.meta.about.desc} />
      <section className="site-container section grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <h1 className={cn(headingClass, "sm:text-5xl lg:text-[56px]")}>{a.title}</h1>
          <div className="flex flex-col border-t-2 border-foreground">
            {a.paras.map((para) => (
              <p key={para} className="max-w-xl border-b border-border py-5 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <CtaLink to={path(SITE.demoUrl)} size="lg" className="self-start">
            {t.nav.cta} <span aria-hidden>→</span>
          </CtaLink>
        </div>
        <div className="mx-auto h-64 w-full max-w-sm self-center sm:h-80">
          <IsoFigure name="counter-scene" />
        </div>
      </section>
    </>
  )
}
