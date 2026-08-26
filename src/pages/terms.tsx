import { PageMeta } from "@/components/page-meta"
import { TERMS_DATE, TERMS_HTML, TERMS_TITLE } from "@/lib/legal"
import { useI18n } from "@/lib/i18n"

export default function TermsPage() {
  const { t } = useI18n()
  return (
    <>
      <PageMeta title={t.meta.terms.title} desc={t.meta.terms.desc} />
      <section className="site-container section mx-auto flex max-w-3xl flex-col gap-2">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance">
          {TERMS_TITLE}
        </h1>
        <p className="text-muted-foreground">{TERMS_DATE}</p>
        <div
          className="legal-prose mt-6"
          dangerouslySetInnerHTML={{ __html: TERMS_HTML }}
        />
      </section>
    </>
  )
}
