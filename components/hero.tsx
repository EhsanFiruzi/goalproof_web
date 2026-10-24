import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { SCREENSHOTS, SCREENSHOT_SIZE } from "@/lib/site";
import { MyketButton } from "./myket-button";

const floating = [
  { file: "streak/30_streak", cls: "-start-6 top-10 sm:-start-16", size: 92, delay: "0s", tilt: "-8deg" },
  { file: "special/first_goal", cls: "-end-4 top-1/3 sm:-end-14", size: 84, delay: "1.2s", tilt: "8deg" },
  { file: "streak/7_streak", cls: "-start-2 bottom-16 sm:-start-12", size: 76, delay: "2.1s", tilt: "-4deg" },
];

export function Hero({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 start-1/4 size-[28rem] rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute top-1/3 end-0 size-[24rem] rounded-full bg-coral/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="text-center lg:text-start">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-muted lg:mx-0">
            <span className="size-2 rounded-full bg-gold" aria-hidden />
            {d.hero.eyebrow}
          </p>
          <h1 className="text-4xl leading-[1.35] font-bold sm:text-5xl lg:text-6xl">
            {d.hero.title}{" "}
            <span className="bg-gradient-to-r from-brand via-coral to-gold bg-clip-text text-transparent">
              {d.hero.highlight}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg lg:mx-0">
            {d.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
            <MyketButton locale={locale} label={d.common.downloadLabel} alt={d.common.downloadAlt} />
            <p className="text-sm text-muted">{d.hero.note}</p>
          </div>

          <ul className="mt-10 flex items-center justify-center gap-3 lg:justify-start" aria-hidden>
            {d.badges.streak.map((b) => (
              <li key={b.id}>
                <Image src={`/badges/streak/${b.file}.svg`} alt="" width={44} height={44} unoptimized />
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-[240px] sm:w-[290px]">
          <div aria-hidden className="absolute inset-0 -z-10 scale-110 animate-pulse-glow rounded-full bg-brand/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.4rem] border-[7px] border-surface bg-card shadow-2xl shadow-brand/20">
            <Image
              src={SCREENSHOTS[0]}
              alt={`${d.screens.alt} 1`}
              width={SCREENSHOT_SIZE.width}
              height={SCREENSHOT_SIZE.height}
              priority
              sizes="(max-width: 640px) 240px, 290px"
              className="block h-auto w-full"
            />
          </div>
          {floating.map((f) => (
            <Image
              key={f.file}
              src={`/badges/${f.file}.svg`}
              alt=""
              aria-hidden
              width={f.size}
              height={f.size}
              unoptimized
              style={{ animationDelay: f.delay, ["--tilt" as string]: f.tilt }}
              className={`absolute ${f.cls} animate-float drop-shadow-[0_8px_24px_rgba(255,217,0,0.35)]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
