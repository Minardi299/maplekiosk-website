import type { Config } from "@react-router/dev/config"

const pages = [
  "",
  "/apps",
  "/tarifs",
  "/a-propos",
  "/salons",
  "/restaurants",
  "/groupes",
  "/confidentialite",
  "/conditions",
]
const langs = ["", "/fr", "/vi", "/ru"]

export default {
  appDirectory: "src",
  ssr: false,
  prerender: langs.flatMap((l) => pages.map((p) => l + p || "/")),
} satisfies Config
