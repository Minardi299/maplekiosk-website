import { useLocation } from "react-router"
import { LANGS, type Lang } from "@/lib/i18n"
import { SITE } from "@/lib/site"

const HREFLANG: Record<Lang, string> = {
  en: "en-CA",
  fr: "fr-CA",
  vi: "vi",
  ru: "ru",
}

export function PageMeta({ title, desc }: { title: string; desc: string }) {
  const { pathname } = useLocation()
  const prefix = LANGS.find(
    (l) => l !== "en" && (pathname === `/${l}` || pathname.startsWith(`/${l}/`)),
  )
  const base = prefix ? pathname.slice(prefix.length + 1) || "/" : pathname
  const href = (l: Lang) =>
    SITE.url +
    (l === "en" ? (base === "/" ? "" : base) : base === "/" ? `/${l}` : `/${l}${base}`)
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={HREFLANG[l]} href={href(l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={href("en")} />
    </>
  )
}
