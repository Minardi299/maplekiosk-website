import { CtaLink } from "@/components/cta-link"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function FinalCta({
  title,
  sub,
  notes,
}: {
  title?: string
  sub?: string
  notes?: readonly string[]
}) {
  const { t } = useI18n()
  const heading = title ?? t.finalCta.title
  // a caller that supplies its own heading owns the subheading too
  const body = sub ?? (title ? undefined : t.finalCta.sub)
  return (
    <section className="border-t bg-muted">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
          {heading}
        </h2>
        {body && (
          <p className="max-w-[36em] text-lg leading-relaxed text-muted-foreground">
            {body}
          </p>
        )}
        {notes && notes.length > 0 && (
          <ul className="flex flex-col items-center gap-2 text-[15px] text-muted-foreground">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        )}
        <CtaLink to={SITE.demoUrl} reloadDocument size="lg" className="mt-2">
          {t.nav.cta}
        </CtaLink>
      </div>
    </section>
  )
}
