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

export function useRestaurantModules(): PlanModule[] {
  const { t } = useI18n()
  const p = t.restaurants.plan
  const sc = p.screens
  const kds = t.restaurants.kds

  const screens = [
    <Screen key="kiosk">
      <div className="-mx-3 -mt-3 mb-1 bg-primary px-3 py-1.5 font-mono text-[10.5px] tracking-[0.08em] text-white uppercase">
        {sc.kiosk.header}
      </div>
      <ScreenRow>
        <b>{sc.kiosk.item}</b>
        <span className="font-mono">13.95</span>
      </ScreenRow>
      {sc.kiosk.rows.map((r) => (
        <div key={r.label} className="flex flex-wrap items-center gap-1.5">
          <span className="w-16 text-[11.5px] text-muted-foreground">{r.label}</span>
          <Opt on>{r.on}</Opt>
          <Opt>{r.off}</Opt>
        </div>
      ))}
      <ScreenButton>{sc.kiosk.cta}</ScreenButton>
    </Screen>,

    <Screen key="counter">
      <ScreenHead left={sc.counter.order} right={sc.counter.where} />
      {sc.counter.lines.map((l, i) => (
        <ScreenRow key={l}>
          <span>{l}</span>
          <span className="font-mono">{i === 0 ? "11.50" : "13.95"}</span>
        </ScreenRow>
      ))}
      <Dashed />
      <ScreenRow>
        <b>{sc.counter.total}</b>
        <b className="font-mono">25.45</b>
      </ScreenRow>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="w-10 text-[11.5px] text-muted-foreground">{sc.counter.tip}</span>
        <Opt>15%</Opt>
        <Opt on>18%</Opt>
        <Opt>20%</Opt>
        <Opt>{sc.counter.custom}</Opt>
      </div>
      <ScreenButton ink>{sc.counter.charge}</ScreenButton>
    </Screen>,

    <div key="kds" className="rounded-lg bg-ink p-[7px]">
      <div className="grid grid-cols-3 gap-1.5">
        {kds.tickets.map((tk, i) => (
          <div key={tk.no} className="overflow-hidden rounded-[3px] bg-card text-[11.5px]">
            <div
              className={cn(
                "flex justify-between gap-1 px-1.5 py-1 font-mono text-[9.5px] uppercase",
                i === 2 ? "bg-ink text-white" : "bg-muted",
              )}
            >
              <span className="truncate">
                #{tk.no} {tk.src}
              </span>
            </div>
            <div className="flex min-h-[74px] flex-col gap-1 p-1.5">
              <b className="leading-tight">{tk.l1}</b>
              {i === 0 && <span className="text-muted-foreground">{tk.l2}</span>}
              <span
                className={cn(
                  "mt-auto font-mono text-[9.5px] tracking-[0.06em] uppercase",
                  i === 0 ? "text-primary" : "text-muted-foreground",
                )}
              >
                {tk.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>,

    <div key="tv" className="flex flex-col gap-2">
      <Screen dark>
        <ScreenHead dark left={sc.tv.title} right={sc.tv.screen} />
        {sc.tv.items.map((item, i) => (
          <div key={item} className={cn("flex items-baseline gap-2", i === 2 && "text-[#8a7f73] line-through")}>
            <span>{item}</span>
            <span className="flex-1 translate-y-[-3px] border-b-[1.5px] border-dotted border-[#6b645c]" />
            {i === 2 ? (
              <span className="rounded-[3px] bg-primary px-1.5 py-px font-mono text-[9.5px] tracking-[0.07em] text-white uppercase no-underline">
                {kds.soldBadge}
              </span>
            ) : (
              <span className="font-mono">{["11.50", "13.95", "", "15.25"][i]}</span>
            )}
          </div>
        ))}
      </Screen>
      <p className="text-xs leading-relaxed text-muted-foreground">{sc.tv.note}</p>
    </div>,

    <Screen key="delivery">
      <ScreenHead left={sc.delivery.title} right={sc.delivery.order} />
      {sc.delivery.rows.map((r, i) => (
        <ScreenRow key={r.item}>
          <span>
            <Src strong={i % 2 === 0}>{r.src}</Src>
            {r.item}
          </span>
          <span className="shrink-0 font-mono">{r.time || sc.delivery.now}</span>
        </ScreenRow>
      ))}
    </Screen>,

    <div key="call" className="flex flex-col gap-2.5">
      <Screen>
        <ScreenHead left={`☎ ${sc.call.incoming}`} right={sc.call.time} />
        <Transcript lines={sc.call.lines} labels={{ caller: sc.call.caller, assistant: sc.call.assistant }} />
        <Done>{sc.call.done}</Done>
      </Screen>
      <CallButton />
    </div>,

    <Screen key="book">
      <ScreenHead left={sc.book.title} right={sc.book.tag} />
      {sc.book.rows.map((r) => (
        <div key={r.time} className="grid grid-cols-[40px_1fr_auto] items-baseline gap-2">
          <span className="font-mono">{r.time}</span>
          <span>
            {r.who} {r.phone && <Src>{sc.book.byPhone}</Src>}
          </span>
          <span className="text-muted-foreground">{r.where}</span>
        </div>
      ))}
      <Dashed />
      <ScreenHead left={sc.book.waitlist} right={sc.book.waiting} />
      {sc.book.wait.map((w) => (
        <ScreenRow key={w.who}>
          <span>{w.who}</span>
          <span className="font-mono">{w.eta}</span>
        </ScreenRow>
      ))}
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
