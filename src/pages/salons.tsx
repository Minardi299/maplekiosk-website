import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { Placeholder } from "@/components/placeholder"
import { useI18n } from "@/lib/i18n"

export default function SalonsPage() {
  const { t, path } = useI18n()
  const s = t.salons
  return (
    <>
      <PageMeta title={t.meta.salons.title} desc={t.meta.salons.desc} />
      <section className="site-container section flex max-w-3xl flex-col gap-6">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {s.title}
        </h1>
        <p className="text-lg leading-relaxed">{s.sub}</p>
        <div className="flex items-center justify-center rounded-2xl border bg-muted p-10">
          <Placeholder>{s.recording}</Placeholder>
        </div>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          {s.disclosure}
        </p>
        <CtaLink to={path("/demo")} size="lg" className="mt-2 self-start">
          {t.router.cta}
        </CtaLink>
      </section>
    </>
  )
}
