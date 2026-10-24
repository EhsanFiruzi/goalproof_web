"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  prevLabel: string;
  nextLabel: string;
  className?: string;
  listClassName?: string;
  children: React.ReactNode;
}

/** اسکرول افقی با دکمه‌های قبلی/بعدی روی دسکتاپ و snap لمسی روی موبایل؛ سازگار با RTL */
export function HScroller({ label, prevLabel, nextLabel, className, listClassName, children }: Props) {
  const ref = useRef<HTMLUListElement>(null);

  function go(direction: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    el.scrollBy({ left: (rtl ? -1 : 1) * direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  const btn =
    "absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-card/90 text-white backdrop-blur transition hover:border-brand md:grid";

  return (
    <div className={cn("relative", className)}>
      <button type="button" onClick={() => go(-1)} aria-label={prevLabel} className={cn(btn, "start-2")}>
        <ChevronLeft className="size-5 rtl:rotate-180" aria-hidden />
      </button>
      <button type="button" onClick={() => go(1)} aria-label={nextLabel} className={cn(btn, "end-2")}>
        <ChevronRight className="size-5 rtl:rotate-180" aria-hidden />
      </button>
      <ul
        ref={ref}
        tabIndex={0}
        aria-label={label}
        className={cn("no-scrollbar flex snap-x snap-mandatory overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-[-2px]", listClassName)}
      >
        {children}
      </ul>
    </div>
  );
}
