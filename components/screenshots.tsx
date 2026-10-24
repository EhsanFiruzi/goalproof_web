import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import { SCREENSHOTS, SCREENSHOT_SIZE } from "@/lib/site";
import { HScroller } from "./h-scroller";

export function Screenshots({ d }: { d: Dictionary }) {
  return (
    <section id="screens" className="overflow-hidden border-y border-line bg-card/40 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-2xl font-bold md:text-4xl">{d.screens.title}</h2>
        <p className="mt-4 text-muted">{d.screens.subtitle}</p>
        <ol className="mt-8 grid gap-3 text-start sm:grid-cols-3">
          {d.screens.steps.map((s, i) => (
            <li key={s.title} className="flex gap-3 rounded-2xl border border-line bg-card p-4">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand/20 text-sm font-bold text-brand" aria-hidden>
                {new Intl.NumberFormat(d.nav.features === "ویژگی‌ها" ? "fa" : "en").format(i + 1)}
              </span>
              <div>
                <h3 className="text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-xs leading-6 text-muted">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <HScroller
        className="mx-auto mt-10 max-w-6xl"
        label={d.screens.title}
        prevLabel={d.screens.prev}
        nextLabel={d.screens.next}
        listClassName="items-start gap-5 px-5 pb-4"
      >
        {SCREENSHOTS.map((shot, i) => {
          const caption = d.screens.captions[shot.id];
          return (
            <li key={shot.id} className="w-[200px] shrink-0 snap-center sm:w-[230px]">
              <figure>
                <div className="overflow-hidden rounded-3xl border-[5px] border-surface bg-card">
                  <Image
                    src={shot.src}
                    alt={caption ?? `${d.screens.alt} (${i + 1}/${SCREENSHOTS.length})`}
                    width={SCREENSHOT_SIZE.width}
                    height={SCREENSHOT_SIZE.height}
                    loading="lazy"
                    sizes="230px"
                    className="block h-auto w-full"
                  />
                </div>
                {caption && <figcaption className="mt-3 text-center text-sm text-muted">{caption}</figcaption>}
              </figure>
            </li>
          );
        })}
      </HScroller>
    </section>
  );
}
