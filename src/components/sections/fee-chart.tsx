import { useMemo } from "react"
import { Area, ComposedChart, Line, XAxis } from "recharts"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { fees, VOLUME_MAX, VOLUME_MIN } from "@/lib/fees"
import { useI18n } from "@/lib/i18n"

const POINTS = Array.from({ length: 26 }, (_, i) => VOLUME_MIN + i * 3000)

export function FeeChart({
  volume,
  debit,
  ticket,
}: {
  volume: number
  debit: number
  ticket: number
}) {
  const { t, lang } = useI18n()
  const c = t.calc
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // the volume slider only moves the marker; the curves re-render on debit/ticket
  const chart = useMemo(() => {
    const data = POINTS.map((v) => {
      const f = fees(v, debit, ticket)
      return { v, square: f.square, clover: f.clover, band: [f.acqLow, f.acqHigh] }
    })
    const config = {
      square: { label: c.square, color: "var(--chart-5)" },
      clover: { label: c.clover, color: "var(--chart-2)" },
      band: { label: c.acq, color: "var(--chart-1)" },
    } satisfies ChartConfig
    const k = (v: number) =>
      lang === "en" || lang === "vi" ? `$${v / 1000}k` : `${v / 1000} k$`
    return (
      <ChartContainer config={config} className="aspect-auto h-52 w-full sm:h-64">
        <ComposedChart
          data={data}
          margin={{ top: 8, right: 0, bottom: 0, left: 0 }}
        >
          <XAxis
            dataKey="v"
            type="number"
            domain={[VOLUME_MIN, VOLUME_MAX]}
            ticks={[20000, 40000, 60000, 80000]}
            tickFormatter={k}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 11 }}
          />
          <Area
            dataKey="band"
            fill="var(--color-band)"
            fillOpacity={0.45}
            stroke="none"
            isAnimationActive={!reduced}
            animationDuration={300}
          />
          <Line
            dataKey="square"
            stroke="var(--color-square)"
            strokeWidth={1.5}
            dot={false}
            isAnimationActive={!reduced}
            animationDuration={300}
          />
          <Line
            dataKey="clover"
            stroke="var(--color-clover)"
            strokeWidth={1.5}
            strokeDasharray="4 3"
            dot={false}
            isAnimationActive={!reduced}
            animationDuration={300}
          />
        </ComposedChart>
      </ChartContainer>
    )
  }, [debit, ticket, c, lang, reduced])

  return (
    <div className="flex flex-col gap-3">
      <div className="relative" role="img" aria-label={c.chartAlt}>
        {chart}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 border-l border-dashed border-foreground/50"
          style={{
            left: `${((volume - VOLUME_MIN) / (VOLUME_MAX - VOLUME_MIN)) * 100}%`,
          }}
        />
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-3 w-4 rounded-xs bg-chart-1/60" />
          {c.acq}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-px w-4 bg-chart-5" />
          {c.square}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 border-t border-dashed border-chart-2" />
          {c.clover}
        </span>
      </div>
    </div>
  )
}
