import Image from "next/image";
import { ArrowDown } from "lucide-react";
import type { BadgeItem, Dictionary } from "@/lib/i18n/types";
import { Eyebrow } from "./eyebrow";
import { HScroller } from "./h-scroller";

type Entry = BadgeItem & { folder: "step" | "streak" | "special" };

const bigCls = "w-28 sm:w-44 md:w-52";
const smallCls = "w-14 sm:w-24 md:w-28";

export function BadgesShowcase({ d }: { d: Dictionary }) {
  const b = d.badges;
  const all: Entry[] = [
    ...b.step.map((x) => ({ ...x, folder: "step" as const })),
    ...b.streak.map((x) => ({ ...x, folder: "streak" as const })),
    ...b.special.map((x) => ({ ...x, folder: "special" as const })),
  ];
  const featured = b.featured.map((id) => all.find((m) => m.id === id)).filter((m): m is Entry => Boolean(m));
  const src = (m: Entry) => `/badges/${m.folder}/${m.file}.svg`;

  return (
    <section id="badges" className="relative overflow-hidden py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-gold/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-2xl leading-[1.5] font-bold md:text-4xl">{b.title}</h2>
            <p className="mt-4 leading-8 text-muted">{b.subtitle}</p>
            <a
              href="#medal-collection"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card/60 px-5 text-sm font-medium transition hover:border-brand"
            >
              {b.exploreLabel}
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>

          <ul className="flex items-end justify-center gap-2 sm:gap-6">
            {featured.map((m, i) => (
              <li key={m.id} className="flex flex-col items-center text-center">
                <Image
                  src={src(m)}
                  alt={m.name}
                  width={208}
                  height={208}
                  unoptimized
                  className={`h-auto ${i === 1 ? bigCls : smallCls} ${i === 1 ? "drop-shadow-[0_8px_28px_rgba(255,217,0,0.3)]" : ""}`}
                />
                <p className={`mt-2 max-w-20 leading-4 font-bold sm:max-w-none ${i === 1 ? "text-sm sm:text-base" : "text-[11px] sm:text-sm"}`}>
                  {m.name}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div id="medal-collection" className="mt-14 rounded-2xl border border-line bg-card/60 p-3 md:p-4">
          <h3 className="sr-only">{b.collectionTitle}</h3>
          <HScroller
            label={b.collectionTitle}
            prevLabel={b.scrollPrev}
            nextLabel={b.scrollNext}
            listClassName="items-start gap-3 px-1 py-2 md:px-10"
          >
            {all.map((m) => (
              <li key={m.id} className="relative flex w-[84px] shrink-0 snap-start flex-col items-center text-center">
                <Image src={src(m)} alt="" aria-hidden width={64} height={64} unoptimized className="size-16" />
                <span className="mt-2 text-[11px] leading-4 text-muted">{m.name}</span>
                {m.gold && <span className="mt-1 text-[10px] font-medium text-gold">{b.goldLabel}</span>}
              </li>
            ))}
          </HScroller>
        </div>
      </div>
    </section>
  );
}
