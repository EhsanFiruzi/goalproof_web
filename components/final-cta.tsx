import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Eyebrow } from "./eyebrow";
import { GalaxyBackdrop } from "./galaxy-backdrop";
import { MyketButton } from "./myket-button";

export function FinalCta({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <section id="download" className="relative isolate overflow-hidden border-t border-line bg-bg">
      <GalaxyBackdrop />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-24 md:grid-cols-2 md:py-32">
        <div data-reveal>
          <Eyebrow>{d.cta.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-2xl leading-[1.5] font-bold md:text-4xl">{d.cta.title}</h2>
          <p className="mt-4 max-w-md leading-8 text-white/75">{d.cta.subtitle}</p>
        </div>
        <div
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="flex flex-col items-start gap-3 md:items-end"
        >
          <p className="text-sm text-muted">{d.cta.availableOn}</p>
          <MyketButton locale={locale} placement="final" label={d.common.downloadLabel} alt={d.common.downloadAlt} />
        </div>
      </div>
    </section>
  );
}
