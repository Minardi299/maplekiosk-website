import { PageMeta } from "@/components/page-meta"
import { FinalCta } from "@/components/sections/final-cta"
import { Hero } from "@/components/sections/hero"
import { LineCost } from "@/components/sections/line-cost"
import { useI18n } from "@/lib/i18n"

export default function CoffeePage() {
  const { t } = useI18n()
  const c = t.coffee
  const f = t.features
  return (
    <>
      <PageMeta title={t.meta.coffee.title} desc={t.meta.coffee.desc} />
      <Hero />
      <section className="site-container section flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
          <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
            {c.kicker}
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">
            {c.title}
          </h2>
          <p className="text-lg text-muted-foreground">{c.intro}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {c.quotes.map((quote) => (
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
      <LineCost />
      <section className="border-t bg-muted">
        <div className="site-container section flex flex-col gap-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">
            {f.timelineTitle}
          </h2>
          <div className="flex flex-col gap-7">
            {f.timeline.map((step) => (
              <div key={step.time} className="flex items-baseline gap-6">
                <span className="w-16 shrink-0 text-right font-mono text-lg font-medium text-primary">
                  {step.time}
                </span>
                <p className="max-w-xl leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
