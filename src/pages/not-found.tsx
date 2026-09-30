import { CtaLink } from "@/components/cta-link"
import { IsoFigure } from "@/components/iso/iso-figure"
import { PageMeta } from "@/components/page-meta"
import { headingClass } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function NotFoundPage() {
  const { t, path } = useI18n()
  return (
    <>
      <PageMeta title={t.meta.notFound.title} desc={t.meta.notFound.desc} />
      <section className="site-container section grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-5">
          <h1 className={cn(headingClass, "sm:text-5xl lg:text-[56px]")}>{t.notFound.title}</h1>
          <p className="text-lg text-muted-foreground">{t.notFound.text}</p>
          <div className="mt-2 flex flex-wrap gap-3.5">
            <CtaLink to={path("/")} variant="ink">
              {t.notFound.back}
            </CtaLink>
            <CtaLink to={path(SITE.demoUrl)} variant="line">
              {t.nav.cta}
            </CtaLink>
          </div>
        </div>
        <div className="mx-auto h-64 w-full max-w-sm sm:h-80">
          <IsoFigure name="tv-404" />
        </div>
      </section>
    </>
  )
}
