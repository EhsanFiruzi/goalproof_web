import type { Dictionary } from "@/lib/i18n/types";

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

export function ThemesShowcase({ d }: { d: Dictionary }) {
  return (
    <section id="themes" className="mx-auto max-w-6xl px-5 py-16 md:py-24 border-t border-line">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold md:text-4xl">{d.themes.title}</h2>
        <p className="mt-4 leading-8 text-muted">{d.themes.subtitle}</p>
        <p className="mt-4 inline-block rounded-full border border-line bg-card px-4 py-1.5 text-sm text-muted">
          {d.themes.countNote}
        </p>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {palettes.map((p) => (
          <li key={p.id} className="rounded-2xl border border-line bg-card p-4">
            <div
              aria-hidden
              className="h-16 rounded-xl"
              style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` }}
            />
            <p className="mt-3 text-center text-sm font-medium">{d.themes.names[p.id]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
