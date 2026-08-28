import { Link } from "react-router"
import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { FinalCta } from "@/components/sections/final-cta"
import { TermsChips } from "@/components/sections/terms-chips"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

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
      <section className="site-container section flex flex-col gap-12">
        <div className="flex max-w-2xl flex-col gap-3">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {p.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {p.sub}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {p.apps.map((app, i) => (
            <div
              key={app.name}
              className="flex flex-col gap-3 rounded-2xl border bg-card p-7 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
                  {doors[i].label}
                </span>
                {app.tag && (
                  <span className="rounded-md bg-primary px-2 py-0.5 font-mono text-[11px] tracking-[0.08em] text-primary-foreground uppercase">
                    {app.tag}
                  </span>
                )}
              </div>
              <h2 className="font-heading text-2xl font-semibold">
                {app.name}
              </h2>
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-4xl">{app.price}</span>
                <span className="text-lg text-muted-foreground">{p.per}</span>
              </div>
              <Link
                to={path(doors[i].to)}
                className="mt-auto pt-1 text-[15px] font-semibold text-primary hover:text-primary-hover"
              >
                {doors[i].label} →
              </Link>
            </div>
          ))}
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {p.note}
        </p>
        <div className="flex flex-col gap-4 rounded-2xl border bg-card p-8 sm:p-10">
          <h2 className="font-heading text-2xl font-semibold">{p.buyTitle}</h2>
          <p className="leading-relaxed text-muted-foreground">{p.buyBody}</p>
          <CtaLink
            href={`mailto:${SITE.email}`}
            className="mt-auto self-start"
          >
            {p.buyCta}
          </CtaLink>
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
                className="faq-item group rounded-xl border bg-card px-6 py-4"
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
