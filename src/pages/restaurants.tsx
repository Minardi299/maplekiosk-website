import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { DayTimeline } from "@/components/sections/day-timeline"
import { FinalCta } from "@/components/sections/final-cta"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export default function RestaurantsPage() {
  const { t } = useI18n()
  const r = t.restaurants
  const moreQuotes = [r.quotes[2], t.coffee.quotes[2]]
  const STATUS = [
    { dot: "bg-primary", text: "text-primary" },
    { dot: "bg-ink", text: "text-foreground" },
    { dot: "border-[1.5px] border-muted-foreground", text: "text-muted-foreground" },
  ]
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
          <div className="mt-1 flex flex-wrap gap-3.5">
            <CtaLink to={SITE.demoUrl} reloadDocument size="lg">
              {t.nav.cta}
            </CtaLink>
          </div>
        </div>
      </section>
      <section className="site-container section flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-[38px]">
            {r.bandTitle}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-[19px]">
            {r.quotes[0].q} {r.quotes[0].body}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-2.5 font-mono text-[11px] tracking-[0.08em] uppercase">
            <span>{r.kds.railLeft}</span>
            <span className="text-primary">{r.kds.railRight}</span>
          </div>
          <div className="h-1 rounded-full bg-ink" />
          <div className="grid gap-6 pt-6 md:grid-cols-2 lg:grid-cols-4 lg:pt-0">
            {r.kds.tickets.map((tk, i) => (
              <div key={tk.no} className="flex flex-col">
                <div className="mx-auto hidden h-6 w-1.5 bg-ink lg:block" />
                <div className="flex flex-1 flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm">№ {tk.no}</span>
                    <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] tracking-[0.08em] uppercase">
                      {tk.src}
                    </span>
                  </div>
                  <div className="text-[15px] leading-relaxed font-medium">
                    <div>{tk.l1}</div>
                    <div>{tk.l2}</div>
                  </div>
                  <div
                    className={`mt-auto flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] uppercase ${STATUS[i].text}`}
                  >
                    <span className={`size-2 rounded-full ${STATUS[i].dot}`} />
                    {tk.status}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col">
              <div className="mx-auto hidden h-6 w-1.5 bg-ink lg:block" />
              <div className="flex flex-1 flex-col gap-3 rounded-xl bg-ink p-5 text-ink-foreground">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading text-lg font-semibold">
                    {r.kds.soldQuote}
                  </span>
                  <span className="rounded-md bg-primary px-2 py-0.5 font-mono text-[11px] tracking-[0.08em] text-primary-foreground uppercase">
                    {r.kds.soldBadge}
                  </span>
                </div>
                <div className="text-[15px] font-medium text-ink-muted line-through">
                  {r.kds.soldItem}
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {r.kds.soldBody}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex max-w-2xl flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-[38px]">
            {r.moreTitle}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {moreQuotes.map((quote) => (
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
      <DayTimeline />
      <FinalCta title={t.day.question} notes={t.day.also} />
    </>
  )
}
