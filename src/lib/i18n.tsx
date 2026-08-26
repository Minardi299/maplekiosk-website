import { createContext, useContext, type ReactNode } from "react"
import { en } from "./strings/en"
import { fr } from "./strings/fr"
import { ru } from "./strings/ru"
import { vi } from "./strings/vi"

export type Lang = "en" | "fr" | "vi" | "ru"
export type Strings = typeof en

export const LANGS: Lang[] = ["en", "fr", "vi", "ru"]
export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  fr: "FR",
  vi: "VI",
  ru: "RU",
}
export const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  fr: "Français",
  vi: "Tiếng Việt",
  ru: "Русский",
}
export const STRINGS: Record<Lang, Strings> = { en, fr, vi, ru }
export const LOCALES: Record<Lang, string> = {
  en: "en-CA",
  fr: "fr-CA",
  vi: "vi-VN",
  ru: "ru-RU",
}

const LangContext = createContext<Lang>("en")

export function LangProvider({
  lang,
  children,
}: {
  lang: Lang
  children: ReactNode
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useI18n() {
  const lang = useContext(LangContext)
  const t: Strings = STRINGS[lang]
  function path(p: string) {
    if (lang === "en") return p
    if (p === "/") return `/${lang}`
    if (p.startsWith("/#")) return `/${lang}` + p.slice(1)
    return `/${lang}` + p
  }
  function money(n: number) {
    const v = Math.round(n).toLocaleString(LOCALES[lang])
    return lang === "en" || lang === "vi" ? `$${v}` : `${v} $`
  }
  return { lang, t, path, money }
}
