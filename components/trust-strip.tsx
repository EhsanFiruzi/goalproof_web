import { Crown, Palette, Smartphone, Target } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

const icons = { android: Smartphone, track: Target, palette: Palette, gold: Crown };

/** فقط واقعیت‌های قابل تأیید؛ بدون آمار، امتیاز یا نظر کاربران */
export function TrustStrip({ d }: { d: Dictionary }) {
  return (
    <section aria-label={d.trust.label} className="border-y border-line bg-card/40">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-3 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {d.trust.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.text} className="flex items-center gap-3 text-sm text-muted">
              <Icon className="size-4 shrink-0 text-brand" aria-hidden />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
