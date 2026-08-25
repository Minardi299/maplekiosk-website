import type { FormEvent } from "react"
import { PageMeta } from "@/components/page-meta"
import { Placeholder } from "@/components/placeholder"
import { useI18n } from "@/lib/i18n"
import { SITE } from "@/lib/site"

function Field({
  id,
  label,
}: {
  id: string
  label: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        className="h-11 rounded-lg border bg-card px-3.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
      />
    </div>
  )
}

export default function DemoPage() {
  const { t } = useI18n()
  const d = t.demo
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = ["name", "business", "area", "phone", "slot"]
      .map((k) => `${k}: ${String(data.get(k) ?? "")}`)
      .join("\n")
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(d.title)}&body=${encodeURIComponent(body)}`
  }
  return (
    <>
      <PageMeta title={t.meta.demo.title} desc={t.meta.demo.desc} />
      <section className="site-container section grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {d.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {d.sub}
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-2 flex max-w-lg flex-col gap-4"
          >
            <Field id="name" label={d.form.name} />
            <Field id="business" label={d.form.business} />
            <Field id="area" label={d.form.area} />
            <Field id="phone" label={d.form.phone} />
            <Field id="slot" label={d.form.slot} />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              {d.form.submit}
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex aspect-[4/5] max-w-sm items-center justify-center rounded-2xl border bg-muted p-6 text-center">
            <Placeholder>{d.photo}</Placeholder>
          </div>
          <p className="text-[15px] text-muted-foreground">
            {d.orText}
            <Placeholder>{SITE.phone}</Placeholder>
          </p>
          <p className="text-[15px] text-muted-foreground">
            {d.orEmail}
            <Placeholder>{SITE.email}</Placeholder>
          </p>
        </div>
      </section>
    </>
  )
}
