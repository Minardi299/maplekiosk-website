import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { Placeholder } from "@/components/placeholder"
import { useI18n } from "@/lib/i18n"

export default function AboutPage() {
  const { t, path } = useI18n()
  const a = t.about
  return (
    <>
      <PageMeta title={t.meta.about.title} desc={t.meta.about.desc} />
      <section className="site-container section grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {a.title}
          </h1>
          {a.paras.map((p) => (
            <p key={p} className="max-w-xl text-lg leading-relaxed">
              {p}
            </p>
          ))}
          <CtaLink to={path("/demo")} size="lg" className="mt-2 self-start">
            {t.nav.cta}
          </CtaLink>
        </div>
        <div className="flex aspect-[4/5] max-w-sm items-center justify-center rounded-2xl border bg-muted p-6">
          <Placeholder>{a.photo}</Placeholder>
        </div>
      </section>
    </>
  )
}
