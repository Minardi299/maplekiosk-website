import { PageMeta } from "@/components/page-meta"
import { Placeholder } from "@/components/placeholder"
import { FinalCta } from "@/components/sections/final-cta"
import { useI18n } from "@/lib/i18n"

export default function FeaturesPage() {
  const { t } = useI18n()
  const f = t.features
  return (
    <>
      <PageMeta title={t.meta.features.title} desc={t.meta.features.desc} />
      <section className="site-container section flex flex-col gap-12">
        <div className="flex max-w-2xl flex-col gap-3">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {f.title}
          </h1>
          <p className="text-lg text-muted-foreground">{f.sub}</p>
        </div>
        <div className="flex flex-col gap-14 lg:gap-20">
          {f.blocks.map((b, i) => (
            <div
              key={b.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={
                  i % 2 === 1
                    ? "flex aspect-[16/9] items-center justify-center rounded-2xl border bg-card lg:order-2"
                    : "flex aspect-[16/9] items-center justify-center rounded-2xl border bg-card"
                }
              >
                <Placeholder>{f.screenshot}</Placeholder>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-heading text-2xl font-semibold">
                  {b.title}
                </h2>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  )
}
