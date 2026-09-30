import { useState } from "react"
import { CafeDemo } from "@/components/demo/cafe"
import { LogPanel, Seg, useLog } from "@/components/demo/kit"
import { SalonDemo } from "@/components/demo/salon"
import { PageMeta } from "@/components/page-meta"
import { headingClass } from "@/components/ui-kit"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

type Mode = "cafe" | "salon"

export default function DemoPage() {
  const { t } = useI18n()
  const d = t.demo
  const [mode, setMode] = useState<Mode>("cafe")
  const [run, setRun] = useState(0)
  const { entries, push, clear } = useLog()

  function switchMode(m: Mode) {
    setMode(m)
    clear()
  }
  function reset() {
    setRun((r) => r + 1)
    clear()
  }

  return (
    <>
      <PageMeta title={t.meta.demo.title} desc={t.meta.demo.desc} />
      <section className="site-container flex flex-col gap-8 pt-10 pb-16 sm:pt-14 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
          <div className="flex flex-col gap-5">
            <h1 className={cn(headingClass, "sm:text-5xl lg:text-[56px]")}>{d.title}</h1>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">{d.sub}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-foreground py-3">
          <Seg
            label={d.modeLabel}
            value={mode}
            onChange={switchMode}
            options={[
              { value: "cafe", label: d.modes.cafe },
              { value: "salon", label: d.modes.salon },
            ]}
          />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button
              type="button"
              onClick={reset}
              className="font-semibold underline decoration-[1.5px] underline-offset-[5px] hover:text-primary"
            >
              {d.reset}
            </button>
            {mode === "cafe" && (
              <a
                href={SITE.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-[1.5px] underline-offset-[5px] hover:text-primary"
              >
                {d.portal} ↗
              </a>
            )}
          </div>
        </div>
        {mode === "cafe" ? <CafeDemo key={`cafe-${run}`} push={push} /> : <SalonDemo key={`salon-${run}`} push={push} />}
        <LogPanel entries={entries} />
      </section>
    </>
  )
}
