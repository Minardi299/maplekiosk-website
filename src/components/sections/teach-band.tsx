import { useI18n } from "@/lib/i18n"

export function TeachBand() {
  const { t } = useI18n()
  return (
    <section className="border-y bg-muted">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <p className="font-heading text-2xl leading-[1.45] font-medium text-balance sm:text-3xl">
          {t.teach.pre}
          <span className="font-heading text-[1.6em] leading-none font-bold text-primary">
            {t.teach.zero}
          </span>
          {t.teach.post}
        </p>
      </div>
    </section>
  )
}
