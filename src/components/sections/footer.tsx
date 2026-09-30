import { Link } from "react-router"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function Footer() {
  const { t, path } = useI18n()
  const columns = [
    {
      title: t.footer.product,
      links: [
        { to: "/apps", label: t.nav.features },
        { to: "/tarifs", label: t.nav.pricing },
        { to: SITE.demoUrl, label: t.footer.demo },
        { to: "/a-propos", label: t.nav.about },
      ],
    },
    {
      title: t.footer.industries,
      links: [...t.nav.menu, { to: "/groupes", label: t.footer.groups }],
    },
    {
      title: t.footer.legal,
      links: [
        { to: "/confidentialite", label: t.footer.privacy },
        { to: "/conditions", label: t.footer.terms },
      ],
    },
  ]
  return (
    <footer className="bg-background">
      <div className="site-container flex flex-col gap-10 pt-14 pb-7">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex max-w-xs flex-col gap-3.5">
            <img src="/MapleKiosk_rectangle.png" alt={SITE.name} className="h-12 w-auto self-start" />
            <p className="text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5 text-[14.5px]">
              <h2 className="mb-1 font-mono text-[11.5px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                {col.title}
              </h2>
              {col.links.map((l) => (
                <Link key={l.to} to={path(l.to)} className="w-fit hover:text-primary">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-foreground pt-3.5 font-mono text-[11.5px] tracking-[0.07em] text-muted-foreground uppercase">
          <span>
            © {new Date().getFullYear()} {SITE.legalName} · {t.footer.madeIn}
          </span>
          <span>
            <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
