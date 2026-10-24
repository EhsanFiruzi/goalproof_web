export interface BadgeItem { id: string; file: string; name: string; desc: string }

export interface Dictionary {
  meta: { title: string; description: string; keywords: string[]; ogAlt: string };
  nav: { features: string; badges: string; themes: string; screens: string; faq: string };
  common: { downloadLabel: string; downloadAlt: string; otherLangLabel: string; skip: string };
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; note: string };
  features: {
    title: string; subtitle: string;
    items: { icon: "target" | "flame" | "trophy" | "palette" | "layout" | "moon"; title: string; desc: string }[];
  };
  badges: {
    eyebrow: string; title: string; subtitle: string;
    streakTitle: string; streakSub: string; specialTitle: string; specialSub: string;
    streak: BadgeItem[]; special: BadgeItem[];
  };
  themes: { title: string; subtitle: string; names: Record<string, string> };
  screens: { title: string; subtitle: string; alt: string };
  faq: { title: string; subtitle: string; items: { q: string; a: string }[] };
  cta: { title: string; subtitle: string };
  footer: { tagline: string; moreApps: string; myket: string; bazaar: string; support: string; rights: string };
}
