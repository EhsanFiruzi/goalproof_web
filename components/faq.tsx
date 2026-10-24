import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

export function Faq({ d }: { d: Dictionary }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-2xl font-bold md:text-4xl">{d.faq.title}</h2>
        <p className="mt-4 text-muted">{d.faq.subtitle}</p>
      </div>
      <div className="mt-10 space-y-3">
        {d.faq.items.map((item) => (
          <details key={item.q} className="group rounded-2xl border border-line bg-card px-5 open:border-brand/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium [&::-webkit-details-marker]:hidden">
              <h3 className="text-base">{item.q}</h3>
              <ChevronDown className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <p className="pb-5 text-sm leading-8 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
