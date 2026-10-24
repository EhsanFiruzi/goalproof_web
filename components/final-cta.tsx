import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Eyebrow } from "./eyebrow";
import Galaxy from "./Galaxy";
import "./Galaxy.css";
import { MyketButton } from "./myket-button";

export function FinalCta({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <section id="download" className="relative isolate overflow-hidden border-t border-line bg-bg">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_50%_120%,rgba(108,99,255,0.3),transparent_70%)]" />
        <Galaxy
          transparent
          starColors={["#ffffff", "#9b8cff", "#ffc46b", "#ff6b6b"]}
          density={1}
          glowIntensity={0.35}
          flareIntensity={1}
          twinkleIntensity={0.4}
          starSpeed={0.4}
          rotationSpeed={0.05}
          layers={4}
          mouseRepulsion
          repulsionStrength={2}
          clickWarp
          intro
        />
        {/* محو شدن لبهٔ بالا با بخش قبلی */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
      </div>

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
