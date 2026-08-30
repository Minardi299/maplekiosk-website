import { Link } from "react-router"
import { PageMeta } from "@/components/page-meta"
import { Calculator } from "@/components/sections/calculator"
import { FinalCta } from "@/components/sections/final-cta"
import { Hero } from "@/components/sections/hero"
import { MoneyDiagram } from "@/components/sections/money-diagram"
import { RouterBand } from "@/components/sections/router-band"
import { TeachBand } from "@/components/sections/teach-band"
import { TermsChips } from "@/components/sections/terms-chips"
import { useI18n } from "@/lib/i18n"

export default function HomePage() {
  const { t, path } = useI18n()
  return (
    <>
      <PageMeta title={t.meta.home.title} desc={t.meta.home.desc} />
      <Hero />
      <RouterBand />
      <section className="site-container flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3 py-10">
        <div className="flex max-w-2xl flex-col gap-1">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            {t.groupsBand.title}
          </h2>
          <p className="text-[15px] text-muted-foreground">{t.groupsBand.body}</p>
        </div>
        <Link
          to={path("/groupes")}
          className="text-[15px] font-semibold text-primary underline-offset-4 hover:underline"
        >
          {t.groupsBand.link} →
        </Link>
      </section>
      <MoneyDiagram />
      <TeachBand />
      <Calculator />
      <TermsChips />
      <FinalCta />
    </>
  )
}
