import { Link } from "react-router"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function Footer() {
  const { t, path } = useI18n()
  const product = [
    { to: "/apps", label: t.nav.features },
    { to: "/tarifs", label: t.nav.pricing },
    { to: "/a-propos", label: t.nav.about },
    { to: "/salons", label: t.footer.nails },
    { to: "/restaurants", label: t.footer.restaurants },
  ]
  const linkClass = "text-muted-foreground hover:text-primary"
  return (
    <footer className="border-t bg-muted">
      <div className="site-container flex flex-col gap-10 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.8fr]">
          <div className="flex max-w-xs flex-col gap-4">
            <img
              src="/MapleKiosk_rectangle.png"
              alt={SITE.name}
              className="h-10 w-auto self-start"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <h5 className="mb-1 font-semibold">{t.footer.product}</h5>
            {product.map((l) => (
              <Link key={l.to} to={path(l.to)} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <h5 className="mb-1 font-semibold">{t.footer.legal}</h5>
            <Link to={path("/confidentialite")} className={linkClass}>
              {t.footer.privacy}
            </Link>
            <Link to={path("/conditions")} className={linkClass}>
              {t.footer.terms}
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2.5 border-t pt-6 text-[13.5px] text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {SITE.legalName} {t.footer.rights}
          </span>
          <span>{t.footer.madeIn}</span>
          <span className="rounded-md bg-background px-2 py-0.5 font-mono text-xs">
            {SITE.phone}
          </span>
          <span className="rounded-md bg-background px-2 py-0.5 font-mono text-xs">
            {SITE.email}
          </span>
        </div>
      </div>
    </footer>
  )
}
