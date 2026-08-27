import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export default function NotFoundPage() {
  const { t, path } = useI18n()
  return (
    <>
      <PageMeta title={t.meta.notFound.title} desc={t.meta.notFound.desc} />
      <div className="site-container mx-auto flex max-w-xl flex-col items-center gap-5 py-28 text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.notFound.title}
        </h1>
        <p className="text-lg text-muted-foreground">{t.notFound.text}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3.5">
          <CtaLink to={path("/")}>{t.notFound.back}</CtaLink>
          <CtaLink to={SITE.demoUrl} reloadDocument variant="outline">
            {t.nav.cta}
          </CtaLink>
        </div>
      </div>
    </>
  )
}
