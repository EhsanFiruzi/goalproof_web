"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface Props {
  label: string;
  navLabel: string;
  links: readonly (readonly [string, string])[];
  cta: { href: string; label: string };
  children: React.ReactNode;
}

export function MobileMenu({ label, navLabel, links, cta, children }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-xl border border-line text-white"
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-bg/95 px-4 py-3 backdrop-blur-xl"
        >
          <nav aria-label={navLabel}>
            <ul>
              {links.map(([href, text]) => (
                <li key={href}>
                  <a href={href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 text-base text-white hover:bg-surface">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center justify-center rounded-xl bg-brand px-4 text-sm font-bold text-white transition hover:brightness-110"
            >
              {cta.label}
            </a>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
