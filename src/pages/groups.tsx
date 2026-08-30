import { CheckIcon } from "lucide-react"
import { CtaLink } from "@/components/cta-link"
import { PageMeta } from "@/components/page-meta"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export default function GroupsPage() {
  const { t } = useI18n()
  const g = t.groups
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(g.mailSubject)}`
  return (
    <>
      <PageMeta title={t.meta.groups.title} desc={t.meta.groups.desc} />
      <section className="bg-ink text-ink-foreground">
        <div className="site-container flex max-w-4xl flex-col gap-6 py-14 sm:py-16 lg:py-20">
          <h1 className="font-heading text-4xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[54px]">
            {g.title}
          </h1>
          <p className="max-w-[34em] text-lg leading-relaxed sm:text-[21px]">
            {g.sub}
          </p>
          <div className="mt-1 flex flex-wrap gap-3.5">
            <CtaLink href={mailto} variant="inverted" size="lg">
              {g.cta}
            </CtaLink>
          </div>
        </div>
      </section>
      <section className="site-container section flex flex-col gap-10">
        <div className="grid gap-6 md:grid-cols-2">
          {g.pains.map((p) => (
            <div
              key={p.label}
              className="flex flex-col gap-3.5 rounded-2xl border bg-card p-7"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
                {p.label}
              </span>
              <p className="font-heading text-xl leading-snug font-semibold text-balance">
                {p.hook}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y bg-muted">
        <div className="site-container section flex max-w-3xl flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">
            {g.insightsTitle}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {g.insightsBody}
          </p>
        </div>
      </section>
      <section className="site-container section grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-[38px]">
            {g.proofTitle}
          </h2>
          <ul className="flex flex-col gap-3.5">
            {g.proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-[15px] leading-relaxed"
              >
                <CheckIcon className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">
            {g.proofStats}
          </p>
        </div>
        <div className="flex flex-col gap-5 rounded-2xl border bg-card p-7 sm:p-9">
          <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground">
            {g.partnerTag}
          </div>
          <h2 className="font-heading text-2xl font-semibold text-balance">
            {g.partnerTitle}
          </h2>
          <ol className="flex flex-col divide-y">
            {g.partnerPoints.map((p, i) => (
              <li key={p.title} className="flex items-baseline gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm tabular-nums text-primary"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">{p.title}</span>
                  <span className="text-[15px] leading-relaxed text-muted-foreground">
                    {p.body}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-t bg-muted">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            {g.ctaTitle}
          </h2>
          <p className="max-w-[36em] text-lg leading-relaxed text-muted-foreground">
            {g.ctaSub}
          </p>
          <CtaLink href={mailto} size="lg" className="mt-2">
            {g.cta}
          </CtaLink>
        </div>
      </section>
    </>
  )
}
