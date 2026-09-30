import { cn } from "@/lib/utils"

export type FigureName =
  | "ai"
  | "loyalty"
  | "counter"
  | "insights"
  | "kiosk"
  | "kds"
  | "tv"
  | "delivery"
  | "profiles"
  | "checkout"
  | "register"
  | "server"
  | "calendar"
  | "payroll"
  | "waitlist"
  | "nail"
  | "counter-scene"
  | "stores"
  | "tv-404"

export function IsoFigure({ name, className }: { name: FigureName; className?: string }) {
  return (
    <img
      src={`/iso/${name}.svg`}
      alt=""
      loading="lazy"
      decoding="async"
      className={cn("block h-full w-full object-contain", className)}
    />
  )
}
