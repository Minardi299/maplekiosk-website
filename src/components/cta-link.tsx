import type { ComponentProps } from "react"
import { Link } from "react-router"
import { cn } from "@/lib/utils"

const styles = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover",
  outline:
    "border-[1.5px] border-secondary text-foreground hover:bg-secondary hover:text-secondary-foreground",
}

export function CtaLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: keyof typeof styles
  size?: "md" | "lg"
}) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-center font-semibold transition-colors",
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-[15px]",
        styles[variant],
        className,
      )}
    />
  )
}
