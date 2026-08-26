import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { FinalCta } from "@/components/sections/final-cta"
import { useI18n } from "@/lib/i18n"

export default function RestaurantsPage() {
  const { t, path } = useI18n()
  const r = t.restaurants
  return (
    <>
      <PageMeta title={t.meta.restaurants.title} desc={t.meta.restaurants.desc} />
      <section className="bg-ink text-ink-foreground">
        <div className="site-container flex max-w-4xl flex-col gap-6 py-14 sm:py-16 lg:py-20">
          <h1 className="font-heading text-4xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[54px]">
            {r.title}
          </h1>
          <p className="max-w-[34em] text-lg leading-relaxed sm:text-[21px]">
            {r.sub}
          </p>
          <p className="max-w-[34em] text-lg leading-relaxed sm:text-[21px]">
            <strong>{t.hero.wedgeStrong}</strong>
            {t.hero.wedgeRest}
          </p>
          <div className="mt-1 flex flex-wrap gap-3.5">
            <CtaLink to={path("/demo")} size="lg">
              {t.router.cta}
            </CtaLink>
          </div>
        </div>
      </section>
      <section className="site-container section flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-[38px]">
            {r.bandTitle}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {r.quotes.map((quote) => (
            <div
              key={quote.q}
              className="flex flex-col gap-3.5 rounded-2xl border bg-card p-7"
            >
              <p className="font-heading text-xl leading-snug font-semibold text-balance">
                {quote.q}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {quote.body}
              </p>
            </div>
          ))}
        </div>
        <a
          href="/shop-demo/index.html"
          className="text-[15px] font-semibold text-primary hover:text-primary-hover"
        >
          {t.router.demoShop} →
        </a>
      </section>
      <FinalCta />
    </>
  )
}
