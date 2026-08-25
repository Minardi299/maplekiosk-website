import { PageMeta } from "@/components/page-meta"
import { useI18n } from "@/lib/i18n"

export default function PrivacyPage() {
  const { t } = useI18n()
  const p = t.privacy
  return (
    <>
      <PageMeta title={t.meta.privacy.title} desc={t.meta.privacy.desc} />
      <section className="site-container section mx-auto flex max-w-2xl flex-col gap-8">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          {p.title}
        </h1>
        <p className="leading-relaxed text-muted-foreground">{p.intro}</p>
        {p.sections.map((s) => (
          <div key={s.title} className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              {s.title}
            </h2>
            <p className="rounded-lg bg-muted px-4 py-3 font-mono text-sm leading-relaxed text-muted-foreground">
              {s.body}
            </p>
          </div>
        ))}
        <p className="rounded-lg border-[1.5px] border-dashed border-primary px-4 py-3 font-mono text-sm text-primary">
          {p.review}
        </p>
      </section>
    </>
  )
}
