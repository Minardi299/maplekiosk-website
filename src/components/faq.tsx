import { pad2 } from "@/components/ui-kit"

export function Faq({ items }: { items: readonly { readonly q: string; readonly a: string }[] }) {
  return (
    <div className="border-t-2 border-foreground">
      {items.map((item, i) => (
        <details key={item.q} className="faq-item group border-b border-border">
          <summary className="flex cursor-pointer list-none items-baseline gap-4 py-5 text-[17px] font-semibold select-none hover:text-primary sm:gap-6 [&::-webkit-details-marker]:hidden">
            <span aria-hidden className="font-mono text-[13px] font-normal text-primary">
              {pad2(i + 1)}
            </span>
            <span className="flex-1">{item.q}</span>
            <span
              aria-hidden
              className="font-mono text-lg leading-none font-normal text-muted-foreground transition-transform duration-200 ease-out group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-[46em] pb-6 pl-9 text-base leading-relaxed text-muted-foreground sm:pl-11">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
