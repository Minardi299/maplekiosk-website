import { useCallback, useRef, useState, type ReactNode } from "react"
import { LOCALES, useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ""))
}

export function usePrice() {
  const { lang } = useI18n()
  const f = new Intl.NumberFormat(LOCALES[lang], {
    style: "currency",
    currency: "CAD",
    currencyDisplay: "narrowSymbol",
  })
  return (n: number) => f.format(n)
}

export type LogEntry = { id: number; time: string; text: string }

export function useLog() {
  const [entries, setEntries] = useState<LogEntry[]>([])
  const id = useRef(0)
  const push = useCallback((text: string) => {
    const time = new Date().toLocaleTimeString("en-GB", { hour12: false })
    id.current += 1
    const entry = { id: id.current, time, text }
    setEntries((prev) => [entry, ...prev].slice(0, 8))
  }, [])
  const clear = useCallback(() => setEntries([]), [])
  return { entries, push, clear }
}

export function Panel({
  tag,
  right,
  children,
  className,
  dark,
}: {
  tag: ReactNode
  right?: ReactNode
  children: ReactNode
  className?: string
  dark?: boolean
}) {
  return (
    <section
      className={cn(
        "flex flex-col border-[1.5px] border-foreground",
        dark ? "bg-ink text-ink-foreground" : "bg-card",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b px-4 py-2.5 font-mono text-[11.5px] tracking-[0.08em] uppercase",
          dark ? "border-white/20 text-ink-faint" : "border-foreground text-muted-foreground",
        )}
      >
        <h2 className={cn("font-medium", dark ? "text-ink-foreground" : "text-foreground")}>{tag}</h2>
        {right}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">{children}</div>
    </section>
  )
}

export function LogPanel({ entries }: { entries: LogEntry[] }) {
  const { t } = useI18n()
  return (
    <Panel tag={t.demo.log}>
      <ol aria-live="polite" className="flex min-h-24 flex-col gap-1.5 font-mono text-[12.5px]">
        {entries.length === 0 && <li className="text-muted-foreground">{t.demo.logEmpty}</li>}
        {entries.map((e, i) => (
          <li
            key={e.id}
            className={cn("grid grid-cols-[72px_1fr] gap-3", i === 0 ? "text-foreground" : "text-muted-foreground")}
          >
            <span className="text-primary">{e.time}</span>
            <span className="font-sans text-[14px]">{e.text}</span>
          </li>
        ))}
      </ol>
    </Panel>
  )
}

export function Seg<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T
  options: readonly { value: T; label: string }[]
  onChange: (v: T) => void
  label: string
}) {
  return (
    <div role="group" aria-label={label} className="inline-flex border-[1.5px] border-foreground bg-card">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            "min-h-10 px-4 font-sans text-sm font-semibold tracking-normal normal-case transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ring",
            value === o.value ? "bg-foreground text-background" : "hover:bg-muted",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
