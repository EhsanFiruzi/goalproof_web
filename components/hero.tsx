import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { SCREENSHOTS, SCREENSHOT_SIZE } from "@/lib/site";
import { Eyebrow } from "./eyebrow";
import { Mountains, NightSky } from "./night-sky";
import { MyketButton } from "./myket-button";

export function Hero({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 md:pt-36 md:pb-36">
      <NightSky />
      <Mountains />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-start">
          <Eyebrow>
            <span className="size-2 rounded-full bg-gold" aria-hidden />
            {d.hero.eyebrow}
          </Eyebrow>
          <h1 className="mt-6 text-3xl leading-[1.5] font-bold sm:text-5xl sm:leading-[1.4] lg:text-6xl lg:leading-[1.35]">
            {d.hero.title}{" "}
            <span className="bg-gradient-to-r from-brand via-[#9b8cff] to-coral bg-clip-text text-transparent">
              {d.hero.highlight}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg lg:mx-0">{d.hero.subtitle}</p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <p className="text-sm font-bold text-white/90">{d.hero.ctaLabel}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <MyketButton locale={locale} placement="hero" label={d.common.downloadLabel} alt={d.common.downloadAlt} />
              <a
                href="#features"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-card/60 px-6 text-sm font-medium transition hover:border-brand"
              >
                {d.hero.secondary}
                <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
              </a>
            </div>
            <p className="text-sm text-muted">{d.hero.note}</p>
          </div>
        </div>

        <div className="relative mx-auto w-[240px] sm:w-[290px]">
          <div aria-hidden className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.4rem] border-[7px] border-surface bg-card shadow-2xl shadow-brand/25">
            <Image
              src={SCREENSHOTS[0].src}
              alt={d.screens.alt}
              width={SCREENSHOT_SIZE.width}
              height={SCREENSHOT_SIZE.height}
              priority
              sizes="(max-width: 640px) 240px, 290px"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
