import type { ComponentProps } from "react"
import { Link } from "react-router"
import { cn } from "@/lib/utils"

const styles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  ink: "bg-ink text-ink-foreground hover:bg-ink/85",
  line: "border border-foreground bg-transparent text-foreground hover:bg-card",
  // for dark (bg-ink) bands, where the ink variant would disappear
  inverted: "bg-ink-foreground text-ink hover:bg-ink-foreground/90",
}

export function ctaClass(variant: keyof typeof styles = "primary", size: "md" | "lg" = "md") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg text-center font-semibold transition-[color,background-color,translate] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-y-px",
    size === "lg" ? "min-h-12 px-6 text-base" : "min-h-11 px-5 text-[15px]",
    styles[variant],
  )
}

export function CtaLink({
  variant = "primary",
  size = "md",
  className,
  href,
  to,
  ...props
}: Omit<ComponentProps<typeof Link>, "to"> & {
  to?: ComponentProps<typeof Link>["to"]
  variant?: keyof typeof styles
  size?: "md" | "lg"
  href?: string
}) {
  const cls = cn(ctaClass(variant, size), className)
  // href is for protocol links (mailto:, tel:) the router cannot resolve
  if (href) return <a href={href} className={cls} {...props} />
  return <Link to={to ?? ""} {...props} className={cls} />
}
