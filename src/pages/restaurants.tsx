import { CtaLink } from "@/components/cta-link"
import { IsoPlan } from "@/components/iso/iso-plan"
import { restaurantPlan } from "@/components/iso/scenes/restaurant"
import { PageMeta } from "@/components/page-meta"
import { useRestaurantModules } from "@/components/plan-screens/restaurant"
import { DayTimeline } from "@/components/sections/day-timeline"
import { FinalCta } from "@/components/sections/final-cta"
import { Insights } from "@/components/sections/insights"
import { ArrowLink, headingClass } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

// real QR for https://starb.ca (version 2, ECC M), generated offline
const QR_ROWS = [
  "1111111011001111001111111",
  "1000001010010111001000001",
  "1011101011001110001011101",
  "1011101001110011101011101",
  "1011101010000101001011101",
  "1000001000111110001000001",
  "1111111010101010101111111",
  "0000000001100010000000000",
  "1001111111000111110010111",
  "0010110011101011010111110",
  "1011011000011011101101001",
  "1100010000110011111001111",
  "0001011010010111101000001",
  "1110110010101001100010010",
  "1100001110100011101011111",
  "1011000100001111011101101",
  "1010001001111000111110110",
  "0000000010110000100010110",
  "1111111010001110101010001",
  "1000001010010100100010001",
  "1011101010110101111110001",
  "1011101011101100011000011",
  "1011101000110101000011111",
  "1000001001111100011110111",
  "1111111011011100110001001",
]
function Qr({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" className={className} fill="currentColor" shapeRendering="crispEdges" aria-hidden>
      {QR_ROWS.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "1" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null,
        ),
      )}
    </svg>
  )
}

const BARS = [2, 1, 3, 1, 2, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 2, 2, 1, 3, 1]
function Barcode({ className }: { className?: string }) {
  let x = 0
  return (
    <svg viewBox="0 0 60 18" className={className} fill="currentColor" preserveAspectRatio="none" aria-hidden>
      {BARS.map((w, i) => {
        const r = <rect key={i} x={x} y="0" width={w} height="18" />
        x += w + 1.5
        return r
      })}
    </svg>
  )
}

export default function RestaurantsPage() {
  const { t, path } = useI18n()
  const r = t.restaurants
  const p = r.plan
  const modules = useRestaurantModules()
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
      <section className="site-container grid gap-6 pt-10 pb-10 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14 lg:pt-20">
        <div className="flex flex-col gap-5">
          <h1 className={cn(headingClass, "sm:text-5xl lg:text-[58px]")}>{r.title}</h1>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p className="text-lg leading-relaxed sm:text-[19px]">{r.sub}</p>
          <CtaLink to={path(SITE.demoUrl)} size="lg">
            {t.nav.cta} <span aria-hidden>→</span>
          </CtaLink>
        </div>
      </section>
      <section className="site-container pb-16 lg:pb-20">
        <IsoPlan
          scene={restaurantPlan}
          modules={modules}
          s={{ ...p, ...t.planUi }}
          demoTo={path(SITE.demoUrl)}
          ariaLabel={p.aria}
        />
      </section>
      <section className="border-y border-foreground bg-card">
        <div className="site-container flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-8">
          <div className="flex max-w-2xl flex-col gap-1.5">
            <h2 className="font-heading text-2xl font-[650] tracking-[-0.015em]">{t.groupsBand.title}</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{t.groupsBand.body}</p>
            <p className="text-[12.5px] text-muted-foreground">{t.zeroNote}</p>
          </div>
          <ArrowLink to={path("/groupes")}>{t.groupsBand.link}</ArrowLink>
        </div>
      </section>
      <section className="site-container section flex flex-col gap-14 lg:gap-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <div className="h-1 bg-ink" />
            <div className="grid gap-6 pt-6 md:grid-cols-2">
              {r.kds.tickets.map((tk, i) => (
                <div key={tk.no} className="flex flex-col">
                  <div className="flex flex-1 flex-col gap-3 border-[1.5px] border-foreground bg-card p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-sm">#{tk.no}</span>
                      <span
                        className={`rounded-[4px] px-2 py-0.5 font-mono text-[11px] font-medium tracking-[0.08em] uppercase ${SRC[i]}`}
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
              <div className="flex flex-col">
                <div className="flex flex-1 flex-col gap-3 bg-ink p-5 text-ink-foreground">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-heading text-lg font-semibold">
                      {r.kds.soldQuote}
                    </span>
                    <span className="rounded-[4px] bg-primary px-2 py-0.5 font-mono text-[11px] tracking-[0.08em] text-white uppercase">
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
          <div className="flex flex-col gap-3 border-t-2 border-foreground pt-5">
            <span className="font-mono text-[13px] text-primary">01</span>
            <h2 className="font-heading text-[28px] leading-[1.08] font-[650] tracking-[-0.02em] text-balance sm:text-[34px]">
              {r.bandTitle}
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-muted-foreground">
              {r.quotes[0].body}
            </p>
          </div>
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="w-full max-w-[470px] -rotate-[1.5deg] lg:order-2">
            <div className="overflow-hidden border-[1.5px] border-foreground bg-card">
              <div className="flex justify-around px-6 pt-3.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={i}
                    className="size-3 rounded-full border border-foreground bg-background"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-1 px-7 pt-5 pb-7">
                <div className="mb-3.5 flex items-baseline justify-between gap-3 border-b-2 border-primary pb-2 font-mono text-[13px]">
                  <span className="tracking-[0.14em] text-primary uppercase">
                    {v.padTag}
                  </span>
                  <span className="text-muted-foreground uppercase">{v.padTime}</span>
                </div>
                <div className="hand border-b border-border pb-1 text-4xl leading-[1.45] text-foreground">
                  {v.padL1}
                </div>
                <div className="hand border-b border-border pb-1 text-4xl leading-[1.45] text-foreground">
                  {v.padL2}
                </div>
                <div className="hand border-b border-border pb-1 text-3xl leading-[1.45] text-muted-foreground">
                  {v.padL3}
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="-rotate-[4deg] rounded border-2 border-primary px-3.5 py-1.5 font-mono text-xs tracking-[0.1em] text-primary uppercase">
                    {v.padStamp}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t-2 border-foreground pt-5">
            <span className="font-mono text-[13px] text-primary">02</span>
            <h2 className="font-heading text-[28px] leading-[1.08] font-[650] tracking-[-0.02em] text-balance sm:text-[34px]">
              {r.phoneTitle}
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-muted-foreground">
              {moreQuotes[0].body}
            </p>
          </div>
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[600px] w-full max-w-[500px]">
            {/* Android behind, left */}
            <div className="absolute top-10 left-0 w-[200px] -rotate-[8deg] rounded-[30px] bg-ink p-1.5">
              <div className="relative h-[400px] overflow-hidden rounded-[24px] bg-white">
                <span className="absolute top-2 left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-ink" />
                <div className="flex flex-col gap-2.5 p-4 pt-7">
                  <span className="font-mono text-[11px]">18:42</span>
                  <span className="text-lg font-bold">Wallet</span>
                  <div className="flex flex-col gap-2 rounded-xl bg-ink p-3.5 text-ink-foreground">
                    <div className="flex items-center gap-2">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold">
                        {v.restName[0]}
                      </span>
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate text-[14px] leading-tight font-bold">
                          {v.custName}
                        </span>
                        <span className="truncate font-mono text-[8px] tracking-[0.1em] text-ink-faint uppercase">
                          {v.restName}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">7</span>
                      <span className="text-sm text-ink-muted">/ 9</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <span
                          key={i}
                          className="size-5 rounded-full border-2 border-ink-foreground/70 bg-ink-foreground shadow-[inset_0_2px_3px_rgba(0,0,0,0.2)]"
                        />
                      ))}
                      <span className="flex size-5 items-center justify-center rounded-full border-2 border-dashed border-ink-faint font-mono text-[9px] text-ink-muted">
                        8
                      </span>
                      <span className="flex size-5 items-center justify-center rounded-full border-2 border-dashed border-ink-faint font-mono text-[9px] text-ink-muted">
                        9
                      </span>
                      <span className="flex size-5 items-center justify-center rounded-full bg-background font-mono text-[7px] font-medium text-ink">
                        {v.loyTenth}
                      </span>
                    </div>
                    <div className="flex justify-center rounded-md bg-white px-2 py-1.5">
                      <Barcode className="h-7 w-32 text-ink" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* physical card behind, right */}
            <div className="absolute top-40 right-0 w-[240px] rotate-[9deg]">
              <div className="flex flex-col gap-2.5 rounded-lg border border-background/20 bg-ink p-4 text-ink-foreground shadow-[inset_0_1px_0_rgba(248,249,251,0.12),inset_0_-1px_0_rgba(0,0,0,0.3)]">
                <div className="flex flex-col">
                  <span className="font-heading text-[15px] font-bold">{v.loyTitle}</span>
                  <span className="font-mono text-[8.5px] tracking-[0.1em] text-ink-faint uppercase">
                    {v.loyTag}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-6 rounded-full border-2 border-ink-foreground/70 bg-ink-foreground shadow-[inset_0_2px_3px_rgba(0,0,0,0.2)]"
                    />
                  ))}
                  <span className="flex size-6 items-center justify-center rounded-full border-2 border-dashed border-ink-faint font-mono text-[10px] text-ink-muted">
                    8
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full border-2 border-dashed border-ink-faint font-mono text-[10px] text-ink-muted">
                    9
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-background font-mono text-[8px] font-medium text-ink">
                    {v.loyTenth}
                  </span>
                </div>
                <span className="text-right font-mono text-[10.5px] tracking-[0.14em] uppercase">
                  {v.custName}
                </span>
                <div className="flex justify-center rounded-md bg-white px-2 py-2">
                  <Barcode className="h-8 w-40 text-ink" />
                </div>
              </div>
            </div>
            {/* iPhone in front */}
            <div className="absolute top-0 left-[46%] z-10 w-[270px] -translate-x-1/2 rotate-[2deg] rounded-[44px] bg-ink p-[7px] outline-[1.5px] outline-offset-0 outline-background">
              <div className="flex flex-col gap-3 overflow-hidden rounded-[37px] bg-white px-4 pt-3.5 pb-2.5">
                <div className="relative flex items-center justify-between">
                  <span className="text-[13px] font-semibold">18:42</span>
                  <span className="absolute left-1/2 flex h-6 w-[84px] -translate-x-1/2 items-center justify-end rounded-full bg-ink pr-2">
                    <span className="size-2 rounded-full bg-[#2e3340]" />
                  </span>
                  <span className="flex gap-1">
                    <span className="h-2.5 w-1.5 rounded-[1px] bg-[#e8883a]" />
                    <span className="h-2.5 w-1.5 rounded-[1px] bg-[#57b657]" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">Wallet</span>
                  <span className="flex size-7 items-center justify-center rounded-full bg-muted text-[11px] font-semibold">
                    {v.custName[0]}
                  </span>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl bg-ink p-4 text-ink-foreground">
                  <div className="flex flex-col">
                    <span className="font-heading text-[19px] font-bold">{v.custName}</span>
                    <span className="font-mono text-[9px] tracking-[0.1em] text-ink-faint uppercase">
                      {v.restName}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">7</span>
                    <span className="text-base text-ink-muted">/ 9</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <span
                        key={i}
                        className="size-7 rounded-full border-2 border-ink-foreground/70 bg-ink-foreground shadow-[inset_0_2px_3px_rgba(0,0,0,0.2)]"
                      />
                    ))}
                    <span className="flex size-7 items-center justify-center rounded-full border-2 border-dashed border-ink-faint font-mono text-[11px] text-ink-muted">
                      8
                    </span>
                    <span className="flex size-7 items-center justify-center rounded-full border-2 border-dashed border-ink-faint font-mono text-[11px] text-ink-muted">
                      9
                    </span>
                    <span className="flex size-7 items-center justify-center rounded-full bg-background font-mono text-[8.5px] font-medium text-ink">
                      {v.loyTenth}
                    </span>
                  </div>
                  <div className="flex justify-center rounded-xl bg-white p-3">
                    <Qr className="size-32 text-ink" />
                  </div>
                </div>
                <span className="mx-auto mt-1 h-1 w-24 rounded-full bg-ink" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t-2 border-foreground pt-5">
            <span className="font-mono text-[13px] text-primary">03</span>
            <h2 className="font-heading text-[28px] leading-[1.08] font-[650] tracking-[-0.02em] text-balance sm:text-[34px]">
              {r.walletTitle}
            </h2>
            <p className="max-w-md text-[17px] leading-relaxed text-muted-foreground">
              {moreQuotes[1].body}
            </p>
          </div>
        </div>
      </section>
      <Insights />
      <DayTimeline />
      <FinalCta title={t.day.question} notes={t.day.also} />
    </>
  )
}
