import { PageMeta } from "@/components/page-meta"
import { useI18n } from "@/lib/i18n"

export default function TermsPage() {
  const { t } = useI18n()
  const l = t.legal
  return (
    <>
      <PageMeta title={t.meta.terms.title} desc={t.meta.terms.desc} />
      <section className="site-container section mx-auto flex max-w-2xl flex-col gap-8">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          {l.title}
        </h1>
        <p className="rounded-lg bg-muted px-4 py-3 font-mono text-sm leading-relaxed text-muted-foreground">
          {l.intro}
        </p>
        <p className="rounded-lg border-[1.5px] border-dashed border-primary px-4 py-3 font-mono text-sm text-primary">
          {l.review}
        </p>
      </section>
    </>
  )
}
