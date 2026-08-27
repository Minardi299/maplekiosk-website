import type { ComponentProps } from "react"
import { Link } from "react-router"
import { cn } from "@/lib/utils"

const styles = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover",
  outline:
    "border border-border bg-background text-foreground hover:bg-muted hover:text-foreground",
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
  const cls = cn(
    "inline-flex items-center justify-center rounded-lg text-center font-semibold transition-[color,background-color,translate] duration-150 ease-out active:translate-y-px",
    size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-[15px]",
    styles[variant],
    className,
  )
  // href is for protocol links (mailto:, tel:) the router cannot resolve
  if (href) return <a href={href} className={cls} {...props} />
  return <Link to={to ?? ""} {...props} className={cls} />
}
