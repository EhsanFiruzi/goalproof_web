import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import { SCREENSHOTS, SCREENSHOT_SIZE } from "@/lib/site";

export function Screenshots({ d }: { d: Dictionary }) {
  return (
    <section id="screens" className="overflow-hidden border-y border-line bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{d.screens.title}</h2>
        <p className="mt-4 text-muted">{d.screens.subtitle}</p>
      </div>
      <ul
        className="no-scrollbar mt-12 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-5 pb-4 md:px-[max(1.25rem,calc((100vw-72rem)/2))]"
        tabIndex={0}
        aria-label={d.screens.title}
      >
        {SCREENSHOTS.map((src, i) => (
          <li key={src} className="w-[200px] shrink-0 snap-center sm:w-[230px]">
            <div className="overflow-hidden rounded-3xl border-[5px] border-surface bg-card">
              <Image
                src={src}
                alt={`${d.screens.alt} ${i + 1}`}
                width={SCREENSHOT_SIZE.width}
                height={SCREENSHOT_SIZE.height}
                loading="lazy"
                sizes="230px"
                className="block h-auto w-full"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
