"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

// رنگ‌ها مستقیم از custom_color_schemes.dart
const palettes: { id: string; colors: [string, string] }[] = [
  { id: "goalproof", colors: ["#6C63FF", "#FF6B6B"] },
  { id: "sunset", colors: ["#FF6B6B", "#FFA726"] },
  { id: "ocean", colors: ["#5B9DFF", "#6C63FF"] },
  { id: "aurora", colors: ["#6C63FF", "#4ADE80"] },
  { id: "midnight", colors: ["#FFD900", "#6C63FF"] },
  { id: "cherry", colors: ["#FF6B6B", "#FFD900"] },
  { id: "forest", colors: ["#4ADE80", "#FFA726"] },
  { id: "violet", colors: ["#8B5CF6", "#A78BFA"] },
];

export function ThemesShowcase({ themes }: { themes: Dictionary["themes"] }) {
  const [active, setActive] = useState("goalproof");

  // رنگ نور افق هیرو با پالت انتخاب‌شده عوض می‌شود
  function pick(p: (typeof palettes)[number]) {
    setActive(p.id);
    const root = document.documentElement.style;
    root.setProperty("--bloom-a", p.colors[0]);
    root.setProperty("--bloom-b", p.colors[1]);
  }

  return (
    <section id="themes" className="mx-auto max-w-6xl border-t border-line px-5 py-16 md:py-24">
      <div data-reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold md:text-4xl">{themes.title}</h2>
        <p className="mt-4 leading-8 text-muted">{themes.subtitle}</p>
        <p className="mt-4 inline-block rounded-full border border-line bg-card px-4 py-1.5 text-sm text-muted">
          {themes.countNote}
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {palettes.map((p, i) => {
          const on = active === p.id;
          return (
            <li key={p.id} data-reveal style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => pick(p)}
                data-spotlight
                className={cn(
                  "w-full rounded-2xl border bg-card p-4 text-center transition hover:-translate-y-0.5",
                  on ? "border-brand ring-1 ring-brand/60" : "border-line hover:border-white/30",
                )}
              >
                <div
                  aria-hidden
                  className="grid h-16 place-items-center rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` }}
                >
                  {on && <Check className="size-6 text-white drop-shadow" />}
                </div>
                <span className="mt-3 block text-sm font-medium">{themes.names[p.id]}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
