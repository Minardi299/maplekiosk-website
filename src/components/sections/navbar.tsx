import { useEffect, useRef, useState, type RefObject } from "react"
import { Link, useLocation } from "react-router"
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react"
import { CtaLink } from "@/components/cta-link"
import { Button } from "@/components/ui/button"
import { LANGS, LANG_LABELS, LANG_NAMES, useI18n, type Lang } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

function useDismiss(
  ref: RefObject<HTMLElement | null>,
  open: boolean,
  close: () => void,
) {
  const { pathname } = useLocation()
  useEffect(close, [pathname])
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) close()
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])
}

function Chevron({ open }: { open: boolean }) {
  return (
    <ChevronDownIcon
      aria-hidden
      className={cn(
        "size-3.5 transition-transform duration-200 ease-out",
        open && "rotate-180",
      )}
    />
  )
}

function LangSwitch() {
  const { lang } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useDismiss(ref, open, () => setOpen(false))
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
        className="flex min-h-9 items-center gap-1 rounded-md border border-border bg-card px-2.5 font-mono text-xs font-medium hover:border-foreground"
      >
        {LANG_LABELS[lang]}
        <Chevron open={open} />
      </button>
      {open && (
        <div className="absolute left-0 z-50 mt-1.5 flex min-w-36 origin-top-left flex-col border-[1.5px] border-foreground bg-card py-1 transition-[scale,opacity] duration-150 ease-out starting:scale-95 starting:opacity-0 motion-reduce:starting:scale-100 xl:right-0 xl:left-auto xl:origin-top-right">
          {LANGS.map((l) => (
            <Link
              key={l}
              to={target(l)}
              preventScrollReset
              aria-current={lang === l ? "true" : undefined}
              className={
                lang === l
                  ? "px-3 py-2 text-[14px] font-semibold text-primary"
                  : "px-3 py-2 text-[14px] text-muted-foreground hover:bg-muted hover:text-foreground"
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

function AppsMenu() {
  const { t, path } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useDismiss(ref, open, () => setOpen(false))
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="apps-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-[15px] font-medium whitespace-nowrap hover:text-primary"
      >
        {t.nav.features}
        <Chevron open={open} />
      </button>
      {open && (
        <div
          id="apps-menu"
          className="absolute top-full -left-4 z-50 mt-4 flex w-64 origin-top-left flex-col border-[1.5px] border-foreground bg-card transition-[scale,opacity] duration-150 ease-out starting:scale-95 starting:opacity-0 motion-reduce:starting:scale-100"
        >
          {t.nav.menu.map((item) => (
            <Link
              key={item.to}
              to={path(item.to)}
              onClick={() => setOpen(false)}
              className="border-b border-border px-4 py-3 text-[15px] font-semibold last:border-b-0 hover:bg-background hover:text-primary"
            >
              {item.label}
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
    { to: "/tarifs", label: t.nav.pricing },
    { to: "/a-propos", label: t.nav.about },
  ]
  return (
    <header className="sticky top-0 z-40 border-b border-foreground bg-background">
      <div className="site-container flex h-(--header-height) items-center justify-between gap-4">
        <Link to={path("/")} className="flex items-center gap-2.5">
          <img
            src="/MapleKiosk_rectangle.png"
            alt={SITE.name}
            className="h-11 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          <AppsMenu />
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
          <CtaLink to={path("/#services")} variant="ink" className="min-h-10 px-4 text-sm whitespace-nowrap">
            {t.nav.services}
          </CtaLink>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
          aria-expanded={open}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-foreground bg-background transition-opacity duration-200 ease-out starting:opacity-0 xl:hidden">
          <nav className="site-container flex flex-col gap-1 py-4">
            {t.nav.menu.map((item) => (
              <Link
                key={item.to}
                to={path(item.to)}
                className="border-b border-border px-1 py-2.5 text-base font-medium hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            {links.map((l) => (
              <Link
                key={l.to}
                to={path(l.to)}
                className="border-b border-border px-1 py-2.5 text-base font-medium hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col items-start gap-4">
              <LangSwitch />
              <CtaLink to={path("/#services")} variant="ink" className="w-full">
                {t.nav.services}
              </CtaLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
