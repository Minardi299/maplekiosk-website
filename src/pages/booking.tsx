import { Link } from "react-router"
import { CallButton } from "@/components/call-button"
import { Faq } from "@/components/faq"
import { IsoFigure, type FigureName } from "@/components/iso/iso-figure"
import { PageMeta } from "@/components/page-meta"
import { Done, Screen, ScreenHead, Transcript } from "@/components/plan-screens/screen-kit"
import { FinalCta } from "@/components/sections/final-cta"
import { headingClass, pad2, SectionHead } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

const USE_FIGURES: FigureName[] = ["counter-scene", "nail"]
const USE_PATHS = ["/restaurants", "/salons"]

export default function BookingPage() {
  const { t, path } = useI18n()
  const b = t.booking
  const call = t.salons.plan.screens.call
  return (
    <>
      <PageMeta title={t.meta.booking.title} desc={t.meta.booking.desc} />
      <section className="site-container grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20 lg:pb-24">
        <div className="flex flex-col gap-6">
          <h1 className={cn(headingClass, "text-[44px] sm:text-6xl lg:text-[62px]")}>{b.title}</h1>
          <p className="max-w-[32em] text-lg leading-relaxed sm:text-[19px]">{b.sub}</p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <CallButton size="lg" />
            <Link
              to={path(SITE.demoUrl)}
              className="font-semibold underline decoration-[1.5px] underline-offset-[5px] hover:text-primary"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
        <div className="flex flex-col border-[1.5px] border-foreground bg-card">
          <div className="mx-auto h-56 w-full max-w-sm px-6 pt-4 sm:h-64">
            <IsoFigure name="ai" />
          </div>
          <div className="p-4 sm:p-5">
            <Screen>
              <ScreenHead left={`☎ ${call.incoming}`} right={call.time} />
              <Transcript lines={call.lines} labels={{ caller: call.caller, assistant: call.assistant }} />
              <Done>{call.done}</Done>
            </Screen>
          </div>
        </div>
      </section>

      <section className="border-t border-foreground bg-card">
        <div className="site-container section">
          <SectionHead title={b.before.title} />
          <div className="mt-11 border-t-2 border-foreground">
            <div className="hidden grid-cols-[56px_1fr_1fr] gap-8 border-b border-foreground py-3 font-mono text-[11.5px] tracking-[0.08em] uppercase md:grid">
              <span />
              <span className="text-muted-foreground">{b.before.beforeTag}</span>
              <span className="text-primary">{b.before.afterTag}</span>
            </div>
            {b.before.rows.map((row, i) => (
              <div key={row.after} className="grid gap-x-8 gap-y-2 border-b border-border py-5 md:grid-cols-[56px_1fr_1fr]">
                <span className="font-mono text-[13px] text-primary">{pad2(i + 1)}</span>
                <p className="text-base leading-relaxed text-muted-foreground">
                  <span className="mr-2 font-mono text-[10.5px] tracking-[0.08em] uppercase md:hidden">{b.before.beforeTag}</span>
                  {row.before}
                </p>
                <p className="text-base leading-relaxed font-medium">
                  <span className="mr-2 font-mono text-[10.5px] tracking-[0.08em] text-primary uppercase md:hidden">
                    {b.before.afterTag}
                  </span>
                  {row.after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground">
        <div className="site-container section">
          <SectionHead title={b.how.title} />
          <ol className="mt-11 grid gap-x-10 md:grid-cols-3">
            {b.how.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-3 border-t-2 border-foreground pt-5 pb-8">
                <span className="font-heading text-[56px] leading-none font-[650] tracking-[-0.04em] text-primary">
                  {pad2(i + 1)}
                </span>
                <h3 className="font-heading text-[24px] leading-[1.15] font-[650] tracking-[-0.015em]">{step.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-foreground bg-card">
        <div className="site-container section grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <SectionHead title={b.does.title} />
          <ol className="border-t-2 border-foreground">
            {b.does.items.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[44px_1fr] gap-x-4 gap-y-1 border-b border-border py-5">
                <span className="font-mono text-[13px] text-primary">{pad2(i + 1)}</span>
                <h3 className="font-heading text-[21px] leading-tight font-[650] tracking-[-0.015em]">{item.title}</h3>
                <p className="col-start-2 text-[15.5px] leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-foreground">
        <div className="site-container section">
          <SectionHead title={b.uses.title} />
          <ol className="mt-11 border-t-2 border-foreground">
            {b.uses.rows.map((row, i) => (
              <li key={row.hook}>
                <Link
                  to={path(USE_PATHS[i])}
                  className="group grid grid-cols-[1fr_88px] items-center gap-x-5 gap-y-3 border-b border-foreground py-7 transition-colors duration-200 ease-out hover:bg-card sm:grid-cols-[1.15fr_1fr_150px] sm:gap-x-8"
                >
                  <span>
                    <span className="block font-heading text-[26px] leading-[1.08] font-[650] tracking-[-0.02em] sm:text-[32px]">
                      {row.hook}
                    </span>
                  </span>
                  <span className="col-span-2 sm:col-span-1">
                    <span className="block text-base leading-relaxed text-muted-foreground">{row.body}</span>
                    <span className="mt-3 inline-flex items-center gap-2 font-semibold">
                      {row.link}
                      <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </span>
                  <span className="col-start-2 row-start-1 h-20 sm:col-start-auto sm:row-start-auto sm:h-28">
                    <IsoFigure name={USE_FIGURES[i]} />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="site-container section grid gap-8 lg:grid-cols-2 lg:gap-14">
          <h2 className={headingClass}>{b.trust.title}</h2>
          <ul className="flex flex-col border-t-2 border-white/80">
            {b.trust.points.map((point) => (
              <li key={point} className="flex gap-3 border-b border-white/30 py-4 text-[17px] leading-relaxed">
                <span aria-hidden>—</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-container section">
        <SectionHead title={b.faqTitle} />
        <div className="mt-10">
          <Faq items={b.faq} />
        </div>
      </section>

      <FinalCta title={b.finalTitle} sub={b.finalSub} action={<CallButton size="lg" />} />
    </>
  )
}
