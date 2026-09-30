import type { ReactNode } from "react"
import { Link } from "react-router"
import { cn } from "@/lib/utils"

export const pad2 = (n: number) => String(n).padStart(2, "0")

export const headingClass =
  "font-heading text-[34px] leading-[1.05] font-[650] tracking-[-0.02em] text-balance sm:text-[42px] lg:text-[46px]"

export function SectionHead({
  title,
  sub,
  className,
  titleClassName,
}: {
  title: ReactNode
  sub?: ReactNode
  className?: string
  titleClassName?: string
}) {
  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", className)}>
      <h2 className={cn(headingClass, titleClassName)}>{title}</h2>
      {sub && (
        <p className="max-w-[34em] text-lg leading-relaxed text-muted-foreground sm:text-[18.5px]">
          {sub}
        </p>
      )}
    </div>
  )
}

export function ArrowLink({
  to,
  children,
  className,
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 font-semibold underline decoration-[1.5px] underline-offset-[5px] hover:text-primary",
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1">
        →
      </span>
    </Link>
  )
}
