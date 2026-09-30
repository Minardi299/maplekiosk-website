import { useI18n } from "@/lib/i18n"

export function TeachBand() {
  const { t } = useI18n()
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="site-container grid items-center gap-6 py-12 sm:grid-cols-[auto_1fr] sm:gap-14 sm:py-14">
        <p className="font-heading text-[128px] leading-[0.8] font-[750] tracking-[-0.06em] sm:text-[190px] lg:text-[210px]">
          {t.teach.zero}
          <sup className="relative top-[0.08em] ml-[0.04em] align-top text-[0.32em]">*</sup>
        </p>
        <div>
          <p className="max-w-[24em] font-heading text-2xl leading-[1.3] font-medium tracking-[-0.012em] sm:text-[27px]">
            {t.teach.body}
          </p>
          <p className="mt-4 font-mono text-[11.5px] tracking-[0.08em] uppercase opacity-90">{t.zeroNote}</p>
        </div>
      </div>
    </section>
  )
}
