import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Screen({ children, dark, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={cn("rounded-lg bg-ink p-[7px]", className)}>
      <div
        className={cn(
          "flex flex-col gap-2 rounded-[3px] p-3 text-[13px] leading-snug",
          dark ? "bg-[#262220] text-[#f5f1e8]" : "bg-card text-foreground",
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function ScreenHead({ left, right, dark }: { left: ReactNode; right?: ReactNode; dark?: boolean }) {
  return (
    <div
      className={cn(
        "flex justify-between gap-3 font-mono text-[10.5px] tracking-[0.08em] uppercase",
        dark ? "text-[#b8ada0]" : "text-muted-foreground",
      )}
    >
      <span>{left}</span>
      {right && <span>{right}</span>}
    </div>
  )
}

export function ScreenRow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("flex items-baseline justify-between gap-3", className)}>{children}</div>
}

export function Opt({ children, on }: { children: ReactNode; on?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-[4px] border px-2 py-0.5 text-xs",
        on ? "border-foreground bg-foreground text-background" : "border-border",
      )}
    >
      {children}
    </span>
  )
}

export function Src({ children, strong }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={cn(
        "mr-1.5 rounded-[3px] border px-1.5 py-px font-mono text-[9.5px] tracking-[0.05em] uppercase",
        strong ? "border-foreground bg-foreground text-background" : "border-border",
      )}
    >
      {children}
    </span>
  )
}

export function Dashed() {
  return <div className="border-t border-dashed border-border" />
}

export function ScreenButton({ children, ink }: { children: ReactNode; ink?: boolean }) {
  return (
    <div className={cn("rounded-[5px] px-2 py-2 text-center text-[13px] font-semibold text-white", ink ? "bg-ink" : "bg-primary")}>
      {children}
    </div>
  )
}

export function Stamps({ filled, total = 10, dark }: { filled: number; total?: number; dark?: boolean }) {
  return (
    <div className="grid grid-cols-10 gap-1">
      {Array.from({ length: total }, (_, i) => (
        <i
          key={i}
          className={cn(
            "aspect-square rounded-[3px] border-[1.5px]",
            i < filled ? "border-primary bg-primary" : dark ? "border-[#6b645c]" : "border-border",
          )}
        />
      ))}
    </div>
  )
}

export function Transcript({
  lines,
  labels,
}: {
  lines: readonly { readonly who: string; readonly text: string }[]
  labels: Readonly<Record<string, string>>
}) {
  return (
    <div className="flex flex-col gap-2">
      {lines.map((l, i) => (
        <div key={i} className="grid grid-cols-[72px_1fr] gap-2 text-[12.5px] leading-snug">
          <span
            className={cn(
              "pt-0.5 font-mono text-[10px] tracking-[0.06em] uppercase",
              l.who === "assistant" ? "text-primary" : "text-muted-foreground",
            )}
          >
            {labels[l.who]}
          </span>
          <span>{l.text}</span>
        </div>
      ))}
    </div>
  )
}

export function Done({ children }: { children: ReactNode }) {
  return (
    <div className="border-[1.5px] border-primary px-2.5 py-1.5 font-mono text-[11px] tracking-[0.04em] text-primary uppercase">
      ✓ {children}
    </div>
  )
}
