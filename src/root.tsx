import type { ReactNode } from "react"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router"
import "./index.css"

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const lang =
    ["fr", "vi", "ru"].find(
      (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
    ) ?? "en"
  return (
    <html lang={lang === "fr" ? "fr-CA" : lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}
