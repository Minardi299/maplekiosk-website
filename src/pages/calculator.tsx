import { PageMeta } from "@/components/page-meta"
import { Calculator } from "@/components/sections/calculator"
import { useI18n } from "@/lib/i18n"

export default function CalculatorPage() {
  const { t } = useI18n()
  return (
    <>
      <PageMeta title={t.meta.calculator.title} desc={t.meta.calculator.desc} />
      <Calculator intro={t.calcPage.intro} />
    </>
  )
}
