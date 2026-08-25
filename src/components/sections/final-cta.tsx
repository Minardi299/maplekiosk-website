import { CtaLink } from "@/components/cta-link"
import { useI18n } from "@/lib/i18n"

export function FinalCta() {
  const { t, path } = useI18n()
  return (
    <section className="border-t bg-muted">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
          {t.finalCta.title}
        </h2>
        <p className="max-w-[36em] text-lg leading-relaxed text-muted-foreground">
          {t.finalCta.sub}
        </p>
        <CtaLink to={path("/demo")} size="lg" className="mt-2">
          {t.nav.cta}
        </CtaLink>
      </div>
    </section>
  )
}
