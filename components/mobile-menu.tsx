"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface Props {
  label: string;
  navLabel: string;
  links: readonly (readonly [string, string])[];
  children: React.ReactNode;
}

export function MobileMenu({ label, navLabel, links, children }: Props) {
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
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-bg/95 px-4 py-3 backdrop-blur-xl">
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
          <div className="mt-2 border-t border-line pt-3">{children}</div>
        </div>
      )}
    </div>
  );
}
