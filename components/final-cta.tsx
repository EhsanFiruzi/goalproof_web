import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { MyketButton } from "./myket-button";

export function FinalCta({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <section className="px-5 pb-20 md:pb-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-brand/30 via-card to-coral/20 px-6 py-16 text-center md:py-20">
        <Image
          src="/badges/special/first_goal.svg"
          alt=""
          aria-hidden
          width={96}
          height={96}
          unoptimized
          className="mx-auto mb-6 animate-float drop-shadow-[0_10px_30px_rgba(255,217,0,0.4)]"
        />
        <h2 className="text-3xl font-bold md:text-5xl">{d.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-lg leading-8 text-muted">{d.cta.subtitle}</p>
        <MyketButton locale={locale} label={d.common.downloadLabel} alt={d.common.downloadAlt} className="mt-8" />
      </div>
    </section>
  );
}
