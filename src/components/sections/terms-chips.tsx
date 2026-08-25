import { useI18n } from "@/lib/i18n"

export function TermsChips() {
  const { t } = useI18n()
  return (
    <section className="site-container section flex flex-col items-center gap-8 text-center">
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-[38px]">
        {t.chips.title}
      </h2>
      <div className="flex max-w-3xl flex-wrap justify-center gap-3.5">
        {t.chips.items.map((chip) => (
          <span
            key={chip}
            className="rounded-lg border-[1.5px] border-secondary px-5 py-3 text-base font-medium"
          >
            {chip}
          </span>
        ))}
      </div>
    </section>
  )
}
