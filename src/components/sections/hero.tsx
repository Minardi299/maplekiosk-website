import { CtaLink } from "@/components/cta-link"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t, path } = useI18n()
  const ticket = t.hero.ticket
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="site-container grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-20">
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[54px]">
            {t.hero.title}
          </h1>
          <p className="max-w-[34em] text-lg leading-relaxed sm:text-[21px]">
            <strong>{t.hero.wedgeStrong}</strong>
            {t.hero.wedgeRest}
          </p>
          <div className="mt-1 flex flex-wrap gap-3.5">
            <CtaLink to={path("/demo")} size="lg">
              {t.nav.cta}
            </CtaLink>
          </div>
        </div>
        <div className="flex w-full max-w-[380px] flex-col gap-3.5 justify-self-center lg:justify-self-end">
          <div className="rotate-[1.2deg] drop-shadow-[0_16px_20px_rgba(0,0,0,0.35)]">
            <div className="receipt-tear bg-card p-7 pb-10 text-card-foreground">
            <div className="mb-3.5 flex items-baseline justify-between border-b-[1.5px] border-dashed border-foreground/20 pb-3.5">
              <span className="font-heading text-xl font-semibold">
                {ticket.name}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {ticket.num}
              </span>
            </div>
            <div className="flex flex-col gap-2.5 text-[15px]">
              {ticket.rows.map((r) => (
                <div key={r.label} className="flex justify-between gap-3">
                  <span>{r.label}</span>
                  <span
                    className={
                      r.price.startsWith("+")
                        ? "font-mono"
                        : "font-mono text-muted-foreground"
                    }
                  >
                    {r.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between border-t-[1.5px] border-dashed border-foreground/20 pt-3.5 text-lg font-bold">
              <span>{ticket.totalLabel}</span>
              <span className="font-mono">{ticket.total}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
