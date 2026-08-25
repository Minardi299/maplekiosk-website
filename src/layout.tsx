import { Outlet, useParams } from "react-router"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { LangProvider, type Lang } from "@/lib/i18n"
import NotFoundPage from "@/pages/not-found"

const EXTRA_LANGS = ["fr", "vi", "ru"]

export default function SiteLayout() {
  const { lang } = useParams()
  const known = lang === undefined || EXTRA_LANGS.includes(lang)
  const active: Lang = lang && EXTRA_LANGS.includes(lang) ? (lang as Lang) : "en"
  return (
    <LangProvider lang={active}>
      <div className="flex min-h-svh flex-col">
        <Navbar />
        <main className="flex-1">{known ? <Outlet /> : <NotFoundPage />}</main>
        <Footer />
      </div>
    </LangProvider>
  )
}
