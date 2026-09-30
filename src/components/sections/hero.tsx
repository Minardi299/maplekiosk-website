import { CtaLink } from "@/components/cta-link"
import { ModuleBoard } from "@/components/iso/module-board"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function Hero() {
  const { t, path } = useI18n()
  const h = t.hero
  return (
    <section className="site-container grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-2 lg:gap-14 lg:pt-20 lg:pb-24">
      <div className="flex flex-col gap-6">
        <h1 className="font-heading text-[36px] leading-[1] font-[650] tracking-[-0.035em] sm:text-6xl lg:text-[56px]">
          {h.titleA} <span className="block text-primary">{h.titleB}</span>
        </h1>
        <p className="max-w-[30em] text-lg leading-relaxed sm:text-[19px]">{h.body}</p>
        <p className="text-lg font-bold sm:text-[19px]">{h.wedge}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-4">
          <CtaLink to={path(SITE.demoUrl)} size="lg">
            {t.nav.cta} <span aria-hidden>→</span>
          </CtaLink>
          <a
            href="#modules"
            className="font-semibold underline decoration-[1.5px] underline-offset-[5px] hover:text-primary"
          >
            {h.explore}
          </a>
        </div>
      </div>
      <ModuleBoard />
    </section>
  )
}
