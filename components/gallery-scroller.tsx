"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  label: string;
  prevLabel: string;
  nextLabel: string;
  children: React.ReactNode;
}

export function GalleryScroller({ label, prevLabel, nextLabel, children }: Props) {
  const ref = useRef<HTMLUListElement>(null);

  function scrollByPage(direction: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    // در RTL مقدار scrollLeft منفی است؛ «بعدی» یعنی در جهت خواندن.
    const rtl = getComputedStyle(el).direction === "rtl";
    const sign = (rtl ? -1 : 1) * direction;
    el.scrollBy({ left: sign * el.clientWidth * 0.8, behavior: "smooth" });
  }

  const btn =
    "grid size-11 place-items-center rounded-full border border-line bg-card text-white transition hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  return (
    <div>
      <div className="mx-auto hidden max-w-6xl justify-end gap-2 px-5 md:flex">
        <button type="button" onClick={() => scrollByPage(-1)} aria-label={prevLabel} className={btn}>
          <ChevronLeft className="size-5 rtl:rotate-180" aria-hidden />
        </button>
        <button type="button" onClick={() => scrollByPage(1)} aria-label={nextLabel} className={btn}>
          <ChevronRight className="size-5 rtl:rotate-180" aria-hidden />
        </button>
      </div>
      <ul
        ref={ref}
        tabIndex={0}
        aria-label={label}
        className="no-scrollbar mt-5 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-5 pb-4 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand md:px-[max(1.25rem,calc((100vw-72rem)/2))]"
      >
        {children}
      </ul>
    </div>
  );
}
