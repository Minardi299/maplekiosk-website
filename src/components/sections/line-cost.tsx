import { useState } from "react"
import { CtaLink } from "@/components/cta-link"
import { Slider } from "@/components/sections/calculator"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

export function LineCost() {
  const { t, money } = useI18n()
  const c = t.lineCost
  const [walkouts, setWalkouts] = useState(5)
  const [ticket, setTicket] = useState(8)
  const [days, setDays] = useState(26)
  const lost = walkouts * ticket * days
  return (
    <section className="site-container section flex flex-col gap-10">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">
          {c.title}
        </h2>
        <p className="text-lg text-muted-foreground sm:text-[19px]">{c.sub}</p>
      </div>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-9">
          <Slider
            id="line-walkouts"
            label={c.walkouts}
            value={walkouts}
            display={String(walkouts)}
            min={0}
            max={30}
            step={1}
            onChange={setWalkouts}
          />
          <Slider
            id="line-ticket"
            label={t.calc.ticket}
            value={ticket}
            display={money(ticket)}
            min={4}
            max={40}
            step={1}
            onChange={setTicket}
          />
          <Slider
            id="line-days"
            label={c.days}
            value={days}
            display={String(days)}
            min={20}
            max={31}
            step={1}
            onChange={setDays}
          />
        </div>
        <div className="flex flex-col gap-5 rounded-2xl border bg-card p-7 sm:p-9">
          <div className="font-mono text-xs tracking-[0.1em] text-muted-foreground">
            {c.resultTag}
          </div>
          <div className="font-mono text-4xl">{money(lost)}</div>
          <p className="text-[15px] leading-relaxed">{c.payoff}</p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {c.honest}
          </p>
          <CtaLink to={SITE.demoUrl} reloadDocument>{c.cta}</CtaLink>
        </div>
      </div>
    </section>
  )
}
