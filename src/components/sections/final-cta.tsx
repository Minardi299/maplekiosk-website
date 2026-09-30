import type { ReactNode } from "react"
import { CtaLink } from "@/components/cta-link"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function FinalCta({
  title,
  sub,
  notes,
  action,
}: {
  title?: string
  sub?: string
  notes?: readonly string[]
  action?: ReactNode
}) {
  const { t, path } = useI18n()
  const heading = title ?? t.finalCta.title
  // a caller that supplies its own heading owns the subheading too
  const body = sub ?? (title ? undefined : t.finalCta.sub)
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="site-container section grid items-end gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <h2 className="font-heading text-[36px] leading-[1.03] font-[650] tracking-[-0.022em] text-balance sm:text-5xl lg:text-[52px]">
          {heading}
        </h2>
        <div className="flex flex-col items-start gap-6">
          {body && <p className="text-lg leading-relaxed text-ink-muted">{body}</p>}
          {notes && notes.length > 0 && (
            <ul className="flex flex-col gap-2 text-[15px] text-ink-muted">
              {notes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span aria-hidden className="text-primary">
                    —
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          )}
          {action ?? (
            <CtaLink to={path(SITE.demoUrl)} size="lg">
              {t.nav.cta} <span aria-hidden>→</span>
            </CtaLink>
          )}
        </div>
      </div>
    </section>
  )
}
