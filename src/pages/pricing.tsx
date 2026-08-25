import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { Placeholder } from "@/components/placeholder"
import { FinalCta } from "@/components/sections/final-cta"
import { TermsChips } from "@/components/sections/terms-chips"
import { useI18n } from "@/lib/i18n"

export default function PricingPage() {
  const { t, path } = useI18n()
  const p = t.pricing
  return (
    <>
      <PageMeta title={t.meta.pricing.title} desc={t.meta.pricing.desc} />
      <section className="site-container section flex flex-col gap-12">
        <h1 className="max-w-2xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {p.title}
        </h1>
        <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-4 rounded-2xl border bg-card p-8 sm:p-10">
            <div className="flex items-baseline gap-2">
              <Placeholder className="text-3xl font-medium sm:text-4xl">
                {p.price}
              </Placeholder>
              <span className="text-xl text-muted-foreground">{p.per}</span>
            </div>
            <p className="max-w-md text-lg leading-relaxed">{p.includes}</p>
            <CtaLink to={path("/demo")} size="lg" className="mt-2 self-start">
              {t.nav.cta}
            </CtaLink>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border-[1.5px] border-secondary p-8 sm:p-10">
            <h2 className="font-heading text-2xl font-semibold">
              {p.buyTitle}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{p.buyBody}</p>
            <CtaLink
              to={path("/demo")}
              variant="outline"
              className="mt-auto self-start"
            >
              {p.buyCta}
            </CtaLink>
          </div>
        </div>
      </section>
      <TermsChips />
      <section className="border-t bg-muted">
        <div className="site-container section flex flex-col gap-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">
            {p.faqTitle}
          </h2>
          <div className="flex max-w-3xl flex-col gap-3">
            {p.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border bg-card px-6 py-4"
              >
                <summary className="cursor-pointer list-none text-base font-semibold select-none">
                  <span className="mr-2 inline-block text-primary transition-transform group-open:rotate-90">
                    ›
                  </span>
                  {item.q}
                </summary>
                <p className="pt-3 pl-5 leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
