import { useI18n } from "@/lib/i18n"

export function TermsChips() {
  const { t } = useI18n()
  return (
    <section className="site-container section">
      <div className="flex max-w-3xl flex-col gap-10">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-[38px]">
          {t.chips.title}
        </h2>
        <ol className="flex flex-col divide-y border-y">
          {t.chips.items.map((chip, i) => (
            <li
              key={chip}
              className="flex items-baseline gap-5 py-6 sm:gap-8 sm:py-7"
            >
              <span
                aria-hidden="true"
                className="font-mono text-sm tabular-nums text-primary sm:text-base"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-[26px] leading-[1.15] font-semibold tracking-tight text-balance sm:text-[34px]">
                {chip}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
