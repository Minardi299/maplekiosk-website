import { Link } from "react-router"
import { useI18n } from "@/lib/i18n"

export function RouterBand() {
  const { t, path } = useI18n()
  return (
    <section className="border-y bg-muted">
      <div className="site-container section flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">
            {t.router.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.router.sub}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.router.doors.map((door) => (
            <div
              key={door.label}
              className="flex flex-col gap-3.5 rounded-2xl border bg-card p-7"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
                {door.label}
              </span>
              <p className="font-heading text-xl leading-snug font-semibold text-balance">
                {door.hook}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {door.body}
              </p>
              <Link
                to={path("/restaurants")}
                className="mt-auto pt-1 text-[15px] font-semibold text-primary hover:text-primary-hover"
              >
                {t.footer.restaurants} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
