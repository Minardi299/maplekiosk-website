import type { CSSProperties } from "react"
import { FeatureTip } from "@/components/feature-tip"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"
import { useI18n } from "@/lib/i18n"
import { useVisibleOnce } from "@/lib/use-visible-once"

export function DayTimeline() {
  const { t } = useI18n()
  const d = t.day
  const { ref: railRef, visible } = useVisibleOnce()
  return (
    <section className="border-y bg-card">
      <div className="site-container section flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-[38px]">
            {d.title}
          </h2>
          <p className="text-lg text-muted-foreground">{d.sub}</p>
        </div>
        {/* every step renders complete, so the rail reads as a finished day */}
        <div
          ref={railRef}
          data-visible={visible || undefined}
          className="day-rail max-w-2xl"
        >
          <Timeline defaultValue={d.beats.length}>
            {d.beats.map((beat, i) => (
              <TimelineItem
                key={beat.time}
                step={i + 1}
                className="not-last:pb-9"
                style={{ "--beat": i } as CSSProperties}
              >
                <TimelineHeader>
                  <TimelineSeparator />
                  <TimelineDate className="font-mono text-base font-medium text-primary">
                    {beat.time}
                  </TimelineDate>
                  <TimelineTitle className="font-heading text-xl font-semibold text-foreground">
                    {beat.name}
                  </TimelineTitle>
                  <TimelineIndicator className="border-[3px] bg-background" />
                </TimelineHeader>
                <TimelineContent className="mt-2 flex flex-col gap-3.5 text-foreground">
                  <p className="text-lg leading-relaxed">{beat.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {beat.tags.map((tag) => (
                      <FeatureTip
                        key={tag.label}
                        label={tag.label}
                        detail={tag.detail}
                      />
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}
