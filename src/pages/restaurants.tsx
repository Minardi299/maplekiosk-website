import type { CSSProperties } from "react"
import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { DayTimeline } from "@/components/sections/day-timeline"
import { FinalCta } from "@/components/sections/final-cta"
import { useI18n } from "@/lib/i18n"
import { useVisibleOnce } from "@/lib/use-visible-once"
import { SITE } from "@/lib/site"

export default function RestaurantsPage() {
  const { t } = useI18n()
  const r = t.restaurants
  const { ref: railRef, visible } = useVisibleOnce()
  const moreQuotes = [r.quotes[2], t.coffee.quotes[2]]
  const v = r.vig
  const SRC = [
    "bg-primary text-primary-foreground",
    "bg-secondary text-secondary-foreground",
    "bg-ink text-ink-foreground",
  ]
  const STATUS = [
    { dot: "bg-primary", text: "text-primary" },
    { dot: "kds-live bg-ink", text: "text-foreground" },
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
        </div>
        <div
          ref={railRef}
          data-visible={visible || undefined}
          className="kds-rail flex flex-col"
        >
          <div className="h-1 rounded-full bg-ink" />
          <div className="grid gap-6 pt-6 md:grid-cols-2 lg:grid-cols-4 lg:pt-0">
            {r.kds.tickets.map((tk, i) => (
              <div
                key={tk.no}
                className="flex flex-col"
                style={{ "--step": i } as CSSProperties}
              >
                <div className="kds-stem mx-auto hidden h-6 w-1.5 bg-ink lg:block" />
                <div className="kds-ticket flex flex-1 flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm">#{tk.no}</span>
                    <span
                      className={`kds-src rounded-md px-2 py-0.5 font-mono text-[11px] font-medium tracking-[0.08em] uppercase ${SRC[i]}`}
                    >
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
            <div className="flex flex-col" style={{ "--step": 3 } as CSSProperties}>
              <div className="kds-stem mx-auto hidden h-6 w-1.5 bg-ink lg:block" />
              <div className="kds-ticket flex flex-1 flex-col gap-3 rounded-xl bg-ink p-5 text-ink-foreground">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading text-lg font-semibold">
                    {r.kds.soldQuote}
                  </span>
                  <span className="rounded-md bg-primary px-2 py-0.5 font-mono text-[11px] tracking-[0.08em] text-primary-foreground uppercase">
                    {r.kds.soldBadge}
                  </span>
                </div>
                <div className="text-[15px] font-medium text-ink-muted">
                  <span className="kds-strike relative">{r.kds.soldItem}</span>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {r.kds.soldBody}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:gap-x-14">
          <div className="flex flex-col gap-5">
            <div className="w-full max-w-[340px] -rotate-[1.5deg] drop-shadow-[0_16px_24px_rgba(29,33,48,0.22)]">
              <div className="overflow-hidden rounded border border-[#e3ddc9] bg-[#fdfbf4] bg-[url('/paper-texture-cream.png')] [background-size:256px_256px]">
                <div className="flex justify-around px-4 pt-2.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-[9px] rounded-full border border-[#d5cdb4] bg-background shadow-[inset_0_1px_1px_rgba(58,47,36,0.25)]"
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-0.5 px-5 pt-3.5 pb-5">
                  <div className="mb-2.5 flex items-baseline justify-between gap-3 border-b-2 border-primary pb-1.5 font-mono text-[11px]">
                    <span className="tracking-[0.14em] text-primary uppercase">
                      {v.padTag}
                    </span>
                    <span className="text-[#8a8472] uppercase">{v.padTime}</span>
                  </div>
                  <div className="hand border-b border-[#e3ddc9] pb-0.5 text-[26px] leading-[1.45] text-[#2b2820]">
                    {v.padL1}
                  </div>
                  <div className="hand border-b border-[#e3ddc9] pb-0.5 text-[26px] leading-[1.45] text-[#2b2820]">
                    {v.padL2}
                  </div>
                  <div className="hand border-b border-[#e3ddc9] pb-0.5 text-[22px] leading-[1.45] text-[#8a8472]">
                    {v.padL3}
                  </div>
                  <div className="mt-2.5 flex justify-end">
                    <span className="-rotate-[4deg] rounded border-[1.5px] border-primary px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-primary uppercase">
                      {v.padStamp}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-[380px] flex-col gap-1.5">
              <span className="text-[16.5px] font-bold">{moreQuotes[0].q}</span>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                {moreQuotes[0].body}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-full max-w-[360px] rotate-[1.2deg] drop-shadow-[0_16px_24px_rgba(29,33,48,0.22)]">
              <div className="flex flex-col gap-4 rounded-lg border border-background/20 bg-ink bg-[url('/paper-texture.png')] bg-blend-soft-light p-6 text-ink-foreground shadow-[inset_0_1px_0_rgba(248,249,251,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)] [background-size:256px_256px]">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-heading text-[17px] font-bold">
                    {v.loyTitle}
                  </span>
                  <span className="font-mono text-[10.5px] tracking-[0.1em] text-ink-faint uppercase">
                    {v.loyTag}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-9 rounded-full border-2 border-primary-hover bg-primary shadow-[inset_0_2px_3px_rgba(0,0,0,0.35)]"
                    />
                  ))}
                  <span className="flex size-9 items-center justify-center rounded-full border-2 border-dashed border-ink-faint font-mono text-xs text-ink-muted">
                    8
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border-2 border-dashed border-ink-faint font-mono text-xs text-ink-muted">
                    9
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full bg-background font-mono text-[9.5px] font-medium text-ink">
                    {v.loyTenth}
                  </span>
                </div>
                <span className="text-[13px] leading-normal text-ink-muted">
                  {v.loyNote}
                </span>
              </div>
            </div>
            <div className="flex max-w-[380px] flex-col gap-1.5">
              <span className="text-[16.5px] font-bold">{moreQuotes[1].q}</span>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                {moreQuotes[1].body}
              </p>
            </div>
          </div>
        </div>
      </section>
      <DayTimeline />
      <FinalCta title={t.day.question} notes={t.day.also} />
    </>
  )
}
