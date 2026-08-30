import { memo, useEffect, useMemo, useRef, useState } from "react"
import { Area, ComposedChart, Line, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { fees } from "@/lib/fees"
import { useI18n, type Strings } from "@/lib/i18n"

const SAMPLES = 26
const Y_AXIS_WIDTH = 42

const SERIES_COLOR: Record<string, string> = {
  square: "var(--chart-5)",
  clover: "var(--chart-2)",
  band: "var(--chart-1)",
}

type Point = { v: number; square: number; clover: number; band: [number, number] }

function niceMax(v: number) {
  const step = 10 ** Math.floor(Math.log10(v)) / 2
  return Math.ceil(v / step) * step
}

// retargeting tween: a new target redirects from the current value mid-flight
function useTweenedNumber(target: number, skip: boolean) {
  const [value, setValue] = useState(target)
  const state = useRef({ value: target, raf: 0 })
  useEffect(() => {
    if (skip || state.current.value === target) {
      cancelAnimationFrame(state.current.raf)
      state.current.value = target
      setValue(target)
      return
    }
    const from = state.current.value
    const start = performance.now()
    const duration = 550
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      state.current.value = from + (target - from) * eased
      setValue(state.current.value)
      if (t < 1) state.current.raf = requestAnimationFrame(tick)
    }
    state.current.raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(state.current.raf)
  }, [target, skip])
  return value
}

const Plot = memo(function Plot({
  data,
  xMax,
  yMax,
  c,
  lang,
  reduced,
  money,
}: {
  data: Point[]
  xMax: number
  yMax: number
  c: Strings["calc"]
  lang: string
  reduced: boolean
  money: (n: number) => string
}) {
  const config = {
    square: { label: c.square, color: "var(--chart-5)" },
    clover: { label: c.clover, color: "var(--chart-2)" },
    band: { label: c.acq, color: "var(--chart-1)" },
  } satisfies ChartConfig
  const kc = (v: number) => {
    const s = v >= 1000 ? `${+(v / 1000).toFixed(1)}k` : `${Math.round(v)}`
    return lang === "en" || lang === "vi" ? `$${s}` : `${s} $`
  }
  const fmt = (value: unknown) =>
    Array.isArray(value)
      ? `${money(value[0])} – ${money(value[1])}`
      : money(Number(value))
  return (
    <ChartContainer config={config} className="aspect-auto h-52 w-full sm:h-64">
      <ComposedChart
        data={data}
        margin={{ top: 8, right: 0, bottom: 0, left: 0 }}
      >
        <XAxis
          dataKey="v"
          type="number"
          domain={[0, xMax]}
          allowDataOverflow
          tickFormatter={kc}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11 }}
        />
        <YAxis
          width={Y_AXIS_WIDTH}
          domain={[0, yMax]}
          allowDataOverflow
          tickFormatter={kc}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 11 }}
        />
        <ChartTooltip
          cursor={{ stroke: "var(--border)", strokeDasharray: "3 3" }}
          content={
            <ChartTooltipContent
              labelFormatter={(_, payload) =>
                money(Number(payload?.[0]?.payload?.v ?? 0))
              }
              formatter={(value, name) => (
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="size-2 shrink-0 rounded-[2px]"
                      style={{ background: SERIES_COLOR[String(name)] }}
                    />
                    {config[name as keyof typeof config]?.label ?? name}
                  </span>
                  <span className="font-mono font-medium tabular-nums text-foreground">
                    {fmt(value)}
                  </span>
                </div>
              )}
            />
          }
        />
        <Area
          dataKey="band"
          fill="var(--color-band)"
          fillOpacity={0.3}
          stroke="none"
          isAnimationActive={!reduced}
          animationDuration={300}
        />
        <Line
          dataKey="square"
          stroke="var(--color-square)"
          strokeWidth={2}
          dot={false}
          isAnimationActive={!reduced}
          animationDuration={300}
        />
        <Line
          dataKey="clover"
          stroke="var(--color-clover)"
          strokeWidth={2}
          strokeDasharray="4 3"
          dot={false}
          isAnimationActive={!reduced}
          animationDuration={300}
        />
      </ComposedChart>
    </ChartContainer>
  )
})

export function FeeChart({
  volume,
  debit,
  ticket,
  locations = 1,
}: {
  volume: number
  debit: number
  ticket: number
  locations?: number
}) {
  const { t, lang, money } = useI18n()
  const c = t.calc
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // the chart windows to the merchant's volume: x runs 0 → ~1.25× volume
  const xTarget = niceMax(volume * 1.25)
  const data = useMemo<Point[]>(
    () =>
      Array.from({ length: SAMPLES }, (_, i) => {
        const v = (i / (SAMPLES - 1)) * xTarget
        const f = fees(v, debit, ticket)
        return {
          v,
          square: f.square * locations,
          clover: f.clover * locations,
          band: [f.acqLow * locations, f.acqHigh * locations],
        }
      }),
    [xTarget, debit, ticket, locations],
  )
  const last = data[data.length - 1]
  const yTarget = niceMax(Math.max(last.square, last.clover, last.band[1]))
  // both axes glide; the data morphs stepwise as the nice-rounded targets move
  const xMax = useTweenedNumber(xTarget, reduced)
  const yMax = useTweenedNumber(yTarget, reduced)

  const markerPct = Math.min(1, volume / xMax)
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap justify-end gap-x-5 gap-y-1.5 text-[13px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-3 w-4 rounded-xs bg-chart-1/40" />
          {c.acq}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-4 rounded-full bg-chart-5" />
          {c.square}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 border-t-2 border-dashed border-chart-2" />
          {c.clover}
        </span>
      </div>
      <div className="relative" aria-label={c.chartAlt}>
        <Plot
          data={data}
          xMax={xMax}
          yMax={yMax}
          c={c}
          lang={lang}
          reduced={reduced}
          money={money}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 border-l border-dashed border-foreground/50"
          style={{
            left: `calc(${Y_AXIS_WIDTH}px + ${markerPct} * (100% - ${Y_AXIS_WIDTH}px))`,
          }}
        />
      </div>
    </div>
  )
}
