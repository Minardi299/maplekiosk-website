import { CallButton } from "@/components/call-button"
import type { PlanModule } from "@/components/iso/iso-plan"
import {
  Dashed,
  Done,
  Opt,
  Screen,
  ScreenButton,
  ScreenHead,
  ScreenRow,
  Src,
  Stamps,
  Transcript,
} from "@/components/plan-screens/screen-kit"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function useSalonModules(): PlanModule[] {
  const { t } = useI18n()
  const p = t.salons.plan
  const sc = p.screens

  const screens = [
    <div key="call" className="flex flex-col gap-2.5">
      <Screen>
        <ScreenHead left={`☎ ${sc.call.incoming}`} right={sc.call.time} />
        <Transcript lines={sc.call.lines} labels={{ caller: sc.call.caller, assistant: sc.call.assistant }} />
        <Done>{sc.call.done}</Done>
      </Screen>
      <CallButton />
    </div>,

    <Screen key="day">
      <ScreenHead left={sc.day.title} right={sc.day.tag} />
      <div className="grid grid-cols-3 gap-1.5">
        {sc.day.techs.map((tech, ti) => (
          <div key={tech} className="flex flex-col gap-1.5">
            <span className="border-b border-border pb-1 text-center font-mono text-[10.5px] tracking-[0.06em] uppercase">
              {tech}
            </span>
            {sc.day.slots
              .filter((sl) => sl.tech === ti)
              .map((sl) => (
                <div
                  key={sl.time + sl.what}
                  className={cn(
                    "rounded-[3px] px-1.5 py-1 text-[11px] leading-tight",
                    sl.phone ? "bg-primary text-white" : "border border-border bg-muted",
                  )}
                >
                  <span className="block font-mono text-[10px]">{sl.time}</span>
                  {sl.what}
                </div>
              ))}
          </div>
        ))}
      </div>
      <p className="text-[11.5px] text-muted-foreground">
        <span className="mr-1.5 inline-block size-2.5 translate-y-px rounded-[2px] bg-primary" />
        {sc.day.byPhone}
      </p>
    </Screen>,

    <Screen key="profile">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-foreground bg-muted font-heading text-lg font-bold">
          {sc.profile.name[0]}
        </span>
        <div className="flex flex-1 flex-col">
          <b className="font-heading text-lg leading-tight">{sc.profile.name}</b>
          <span className="text-xs text-muted-foreground">{sc.profile.visits}</span>
        </div>
        <span className="rounded-[3px] bg-primary px-1.5 py-px font-mono text-[10px] tracking-[0.06em] text-white uppercase">
          {sc.profile.tier}
        </span>
      </div>
      <Dashed />
      <span>{sc.profile.last}</span>
      <span className="text-muted-foreground">{sc.profile.next}</span>
    </Screen>,

    <Screen key="checkout">
      <ScreenHead left={sc.checkout.title} />
      {sc.checkout.lines.map((l) => (
        <ScreenRow key={l.item}>
          <span>{l.item}</span>
          <span className="font-mono">{l.price}</span>
        </ScreenRow>
      ))}
      <Dashed />
      <ScreenRow>
        <b>{sc.checkout.total}</b>
        <b className="font-mono">55.00</b>
      </ScreenRow>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="w-10 text-[11.5px] text-muted-foreground">{sc.checkout.tip}</span>
        <Opt>15%</Opt>
        <Opt on>18%</Opt>
        <Opt>20%</Opt>
        <Opt>{sc.checkout.custom}</Opt>
      </div>
      <ScreenButton ink>{sc.checkout.charge}</ScreenButton>
    </Screen>,

    <Screen key="loyalty" dark>
      <ScreenHead dark left={sc.loyalty.screen} right={sc.loyalty.tier} />
      <b className="font-heading text-xl tracking-[-0.01em]">{sc.loyalty.welcome}</b>
      <Stamps filled={8} dark />
      <ScreenRow>
        <span>{sc.loyalty.stamps}</span>
        <span>{sc.loyalty.tenth}</span>
      </ScreenRow>
    </Screen>,

    <Screen key="waitlist" dark>
      <ScreenHead dark left={sc.waitlist.title} right={sc.waitlist.tag} />
      {sc.waitlist.rows.map((r, i) => (
        <div key={r.who} className="grid grid-cols-[22px_1fr_auto] items-baseline gap-2">
          <span
            className={cn(
              "flex size-5 items-center justify-center rounded-[3px] font-mono text-[11px]",
              i === 0 ? "bg-primary text-white" : "bg-[#4a443e]",
            )}
          >
            {i + 1}
          </span>
          <span>
            {r.who} <span className="text-[#b8ada0]">· {r.what}</span>
            {i === 0 && <Src>{sc.waitlist.next}</Src>}
          </span>
          <span className="font-mono">{r.eta}</span>
        </div>
      ))}
    </Screen>,

    <Screen key="payroll">
      <ScreenHead left={sc.payroll.title} right={sc.payroll.period} />
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 gap-y-1.5">
        {sc.payroll.cols.map((c) => (
          <span key={c} className="font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase">
            {c}
          </span>
        ))}
        {sc.payroll.rows.map((r) => (
          <div key={r.tech} className="contents">
            <span>{r.tech}</span>
            <span className="font-mono">{r.hours}</span>
            <span className="text-right font-mono">{r.tips}</span>
          </div>
        ))}
      </div>
    </Screen>,

    <Screen key="stock">
      <ScreenHead left={sc.stock.title} right={sc.stock.onHand} />
      {sc.stock.rows.map((r) => (
        <ScreenRow key={r.item}>
          <span>{r.item}</span>
          <span className="font-mono">
            {r.low && (
              <span className="mr-1.5 font-mono text-[10px] tracking-[0.06em] text-primary uppercase">{sc.stock.low}</span>
            )}
            {r.qty}
          </span>
        </ScreenRow>
      ))}
    </Screen>,
  ]

  return p.modules.map((m, i) => ({ id: i + 1, ...m, screen: screens[i] }))
}
