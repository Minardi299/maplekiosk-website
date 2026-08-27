import { useRef, useState, type PointerEvent } from "react"
import { Popover } from "@base-ui/react/popover"

// Base UI's Popover opens on click only, so hover is wired by hand: pointer
// devices get hover, touch devices get the tap. Escape and outside clicks are
// handled by the Popover itself.
export function FeatureTip({
  label,
  detail,
}: {
  label: string
  detail: string
}) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const show = () => {
    clearTimeout(timer.current)
    setOpen(true)
  }
  // a short grace period so the pointer can travel from chip to popup
  const hide = () => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setOpen(false), 120)
  }
  // touch has no hover: let the tap fall through to the Popover's own toggle,
  // otherwise the synthesized enter would open and the tap would close again
  const onEnter = (e: PointerEvent) => e.pointerType === "mouse" && show()
  const onLeave = (e: PointerEvent) => e.pointerType === "mouse" && hide()

  return (
    // modal={false}: a backdrop would swallow the pointer and break hover-out
    <Popover.Root open={open} onOpenChange={setOpen} modal={false}>
      <Popover.Trigger
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        className="cursor-pointer rounded-md border-[1.5px] border-secondary px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] uppercase transition-colors hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none data-[popup-open]:border-primary data-[popup-open]:text-primary"
      >
        {label}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side="top" sideOffset={8} className="z-50">
          <Popover.Popup
            onPointerEnter={onEnter}
            onPointerLeave={onLeave}
            className="max-w-[19rem] origin-(--transform-origin) rounded-xl border bg-popover p-4 text-[14px] leading-relaxed text-popover-foreground shadow-lg transition-[scale,opacity] duration-150 ease-out data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 motion-reduce:data-[starting-style]:scale-100 motion-reduce:data-[ending-style]:scale-100"
          >
            {detail}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}
