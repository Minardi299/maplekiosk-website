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
  const { t } = useI18n()
  return (
    <>
      <PageMeta title={t.meta.home.title} desc={t.meta.home.desc} />
      <Hero />
      <RouterBand />
      <MoneyDiagram />
      <TeachBand />
      <Calculator />
      <TermsChips />
      <FinalCta />
    </>
  )
}
