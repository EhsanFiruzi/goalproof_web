import Image from "next/image";
import { Flame, LayoutTemplate, Palette, RotateCcw, Target, Trophy } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { Eyebrow } from "./eyebrow";

type Icon = Dictionary["features"]["items"][number]["icon"];

const icons = { target: Target, flame: Flame, trophy: Trophy, rotate: RotateCcw, palette: Palette, layout: LayoutTemplate };
const tints: Record<Icon, string> = {
  target: "bg-gold/10 text-gold",
  flame: "bg-coral/10 text-coral",
  trophy: "bg-amber/10 text-amber",
  rotate: "bg-mint/10 text-mint",
  palette: "bg-brand/15 text-brand",
  layout: "bg-sky/10 text-sky",
};
// تصویرهای واقعی مدال‌های خود اپ
const medals: Partial<Record<Icon, string[]>> = {
  target: ["special/first_goal", "special/goal_done"],
  flame: ["streak/3_streak", "streak/7_streak", "streak/14_streak"],
  trophy: ["step/first_step", "step/10_step", "step/100_step"],
  rotate: ["special/comback"],
};
const swatches = [
  ["#6C63FF", "#FF6B6B"],
  ["#FF6B6B", "#FFA726"],
  ["#5B9DFF", "#6C63FF"],
  ["#6C63FF", "#4ADE80"],
];

export function Features({ d }: { d: Dictionary }) {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:gap-12">
        <div>
          <Eyebrow>{d.features.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-2xl leading-[1.5] font-bold md:text-4xl">{d.features.title}</h2>
          <p className="mt-4 leading-8 text-muted">{d.features.subtitle}</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {d.features.items.map((f) => {
            const Icon = icons[f.icon];
            const imgs = medals[f.icon];
            return (
              <li key={f.title} className="flex flex-col rounded-2xl border border-line bg-card p-5">
                <span className={`mb-4 grid size-11 place-items-center rounded-xl ${tints[f.icon]}`}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{f.desc}</p>
                {imgs && (
                  <div className="mt-auto flex items-center justify-center gap-3 pt-5">
                    {imgs.map((m) => (
                      <Image key={m} src={`/badges/${m}.svg`} alt="" aria-hidden width={56} height={56} unoptimized className="size-14" />
                    ))}
                  </div>
                )}
                {f.icon === "palette" && (
                  <div aria-hidden className="mt-auto flex gap-2 pt-5">
                    {swatches.map(([a, b]) => (
                      <span key={a + b} className="h-9 flex-1 rounded-lg" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} />
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
