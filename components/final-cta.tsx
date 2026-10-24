import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Eyebrow } from "./eyebrow";
import { Moon, Mountains, NightSky } from "./night-sky";
import { MyketButton } from "./myket-button";

export function FinalCta({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <section id="download" className="relative isolate overflow-hidden border-t border-line">
      <NightSky />
      <Mountains className="h-20 md:h-32" />
      <Moon className="absolute end-[8%] top-8 -z-10 size-20 drop-shadow-[0_0_30px_rgba(255,217,0,0.35)] md:size-28" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-20 pb-32 md:grid-cols-2 md:pb-40">
        <div>
          <Eyebrow>{d.cta.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-2xl leading-[1.5] font-bold md:text-4xl">{d.cta.title}</h2>
          <p className="mt-4 max-w-md leading-8 text-white/75">{d.cta.subtitle}</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="text-sm text-muted">{d.cta.availableOn}</p>
          <MyketButton locale={locale} placement="final" label={d.common.downloadLabel} alt={d.common.downloadAlt} />
        </div>
      </div>
    </section>
  );
}
