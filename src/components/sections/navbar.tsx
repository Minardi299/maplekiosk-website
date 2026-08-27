import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router"
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react"
import { CtaLink } from "@/components/cta-link"
import { Button } from "@/components/ui/button"
import { LANGS, LANG_LABELS, LANG_NAMES, useI18n, type Lang } from "@/lib/i18n"
import { SITE } from "@/lib/site"

function LangSwitch() {
  const { lang } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])
  const prefix = LANGS.find(
    (l) => l !== "en" && (pathname === `/${l}` || pathname.startsWith(`/${l}/`)),
  )
  const base = prefix
    ? pathname.slice(prefix.length + 1) || "/"
    : pathname
  const target = (l: Lang) =>
    l === "en" ? base : base === "/" ? `/${l}` : `/${l}${base}`
  return (
    <div ref={ref} className="relative shrink-0 text-[13px]">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 rounded-lg border px-2.5 py-1.5 font-semibold hover:bg-muted"
      >
        {LANG_LABELS[lang]}
        <ChevronDownIcon
          className={open ? "size-3.5 rotate-180" : "size-3.5"}
        />
      </button>
      {open && (
        <div className="absolute left-0 z-50 mt-1.5 flex min-w-32 flex-col overflow-hidden rounded-lg border bg-popover py-1 shadow-lg xl:right-0 xl:left-auto">
          {LANGS.map((l) => (
            <Link
              key={l}
              to={target(l)}
              aria-current={lang === l ? "true" : undefined}
              className={
                lang === l
                  ? "px-3 py-2 font-semibold"
                  : "px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              }
            >
              {LANG_NAMES[l]}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const { t, path } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])
  const links = [
    { to: "/apps", label: t.nav.features },
    { to: "/tarifs", label: t.nav.pricing },
    { to: "/a-propos", label: t.nav.about },
  ]
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="site-container flex h-(--header-height) items-center justify-between gap-4">
        <Link to={path("/")} className="flex items-center gap-2.5">
          <img
            src="/MapleKiosk_rectangle.png"
            alt={SITE.name}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={path(l.to)}
              className="text-[15px] font-medium whitespace-nowrap hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <LangSwitch />
          <CtaLink
            to={SITE.demoUrl} reloadDocument
            className="px-4 py-2.5 text-sm whitespace-nowrap"
          >
            {t.nav.cta}
          </CtaLink>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </Button>
      </div>
      {open && (
        <div className="border-t bg-background xl:hidden">
          <nav className="site-container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={path(l.to)}
                className="rounded-md px-2 py-2 text-base font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col items-start gap-4 border-t pt-4">
              <LangSwitch />
              <CtaLink
                to={SITE.demoUrl} reloadDocument
                className="w-full px-4 py-2.5 text-sm"
              >
                {t.nav.cta}
              </CtaLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
