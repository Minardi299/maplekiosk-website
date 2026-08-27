import { PageMeta } from "@/components/page-meta"
import { DayTimeline } from "@/components/sections/day-timeline"
import { FinalCta } from "@/components/sections/final-cta"
import { Hero } from "@/components/sections/hero"
import { LineCost } from "@/components/sections/line-cost"
import { useI18n } from "@/lib/i18n"

export default function CoffeePage() {
  const { t } = useI18n()
  const c = t.coffee
  return (
    <>
      <PageMeta title={t.meta.coffee.title} desc={t.meta.coffee.desc} />
      <Hero />
      <section className="site-container section flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
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
      </section>
      <LineCost />
      <DayTimeline />
      <FinalCta title={t.day.question} notes={t.day.also} />
    </>
  )
}
