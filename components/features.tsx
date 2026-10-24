import { Flame, LayoutTemplate, Moon, Palette, Target, Trophy } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

const icons = { target: Target, flame: Flame, trophy: Trophy, palette: Palette, layout: LayoutTemplate, moon: Moon };
const tints = ["text-brand", "text-coral", "text-gold", "text-sky", "text-mint", "text-amber"];

export function Features({ d }: { d: Dictionary }) {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{d.features.title}</h2>
        <p className="mt-4 leading-8 text-muted">{d.features.subtitle}</p>
      </div>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {d.features.items.map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <li
              key={f.title}
              className="group rounded-2xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/60"
            >
              <span className={`mb-5 grid size-12 place-items-center rounded-xl bg-surface ${tints[i % tints.length]}`}>
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{f.desc}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
