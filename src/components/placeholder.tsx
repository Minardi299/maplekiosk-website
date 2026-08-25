import { cn } from "@/lib/utils"

export function Placeholder({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-md bg-muted px-2 py-0.5 font-mono text-[13px] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  )
}
