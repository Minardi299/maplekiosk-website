import { pad2, SectionHead } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"

export function TermsChips() {
  const { t } = useI18n()
  const items = t.chips.items
  const half = Math.ceil(items.length / 2)
  return (
    <section className="site-container section">
      <SectionHead title={t.chips.title} />
      <div className="mt-10 grid border-t-2 border-foreground lg:grid-cols-2 lg:gap-x-14">
        {[items.slice(0, half), items.slice(half)].map((col, c) => (
          <ol key={c} start={c * half + 1}>
            {col.map((item, i) => (
              <li key={item} className="flex items-baseline gap-5 border-b border-border py-5 sm:gap-6">
                <span aria-hidden className="font-mono text-[13px] text-primary">
                  {pad2(c * half + i + 1)}
                </span>
                <span className="font-heading text-[26px] leading-[1.1] font-[650] tracking-[-0.018em] text-balance sm:text-[30px]">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        ))}
      </div>
    </section>
  )
}
