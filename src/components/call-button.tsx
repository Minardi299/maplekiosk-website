import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

// a bracketed placeholder is not dialable: render it as text until the real number exists
export function telHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "")
  return digits.replace("+", "").length >= 7 ? `tel:${digits}` : undefined
}

export function CallButton({ size = "md", className }: { size?: "md" | "lg"; className?: string }) {
  const { t } = useI18n()
  const href = telHref(SITE.assistantPhone)
  const cls = cn(
    "flex flex-col gap-0.5 rounded-lg bg-primary text-primary-foreground",
    size === "lg" ? "px-6 py-4" : "px-4 py-3",
    href && "transition-colors duration-150 ease-out hover:bg-primary-hover",
    className,
  )
  const body = (
    <>
      <span className="font-mono text-[11px] tracking-[0.08em] uppercase opacity-90">{t.call.label}</span>
      <span
        className={cn(
          "font-heading leading-tight font-[650] tracking-[-0.01em]",
          size === "lg" ? "text-[30px] sm:text-[36px]" : "text-2xl",
        )}
      >
        {SITE.assistantPhone}
      </span>
    </>
  )
  return href ? (
    <a href={href} className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  )
}
