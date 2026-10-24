export interface BadgeItem {
  id: string;
  file: string;
  name: string;
  desc?: string;
  /** مدالی که مخصوص Gold است */
  gold?: boolean;
}

export interface Dictionary {
  meta: { title: string; description: string; keywords: string[]; ogAlt: string };
  nav: { features: string; screens: string; badges: string; themes: string; faq: string; menuLabel: string };
  common: {
    downloadLabel: string;
    downloadAlt: string;
    headerCta: string;
    menu: string;
    otherLangLabel: string;
    skip: string;
  };
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; ctaLabel: string; secondary: string; note: string };
  trust: { label: string; items: { icon: "android" | "track" | "palette" | "gold"; text: string }[] };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: "target" | "flame" | "trophy" | "rotate" | "palette" | "layout"; title: string; desc: string }[];
  };
  screens: {
    title: string;
    subtitle: string;
    alt: string;
    prev: string;
    next: string;
    steps: { title: string; desc: string }[];
    /** کپشن هر اسکرین‌شات با کلید نام فایل (بدون پسوند). فقط وقتی محتوا تأیید شده پر شود. */
    captions: Record<string, string>;
  };
  badges: {
    eyebrow: string;
    title: string;
    subtitle: string;
    exploreLabel: string;
    collectionTitle: string;
    goldLabel: string;
    scrollPrev: string;
    scrollNext: string;
    featured: string[];
    step: BadgeItem[];
    streak: BadgeItem[];
    special: BadgeItem[];
  };
  themes: { title: string; subtitle: string; countNote: string; names: Record<string, string> };
  faq: { title: string; subtitle: string; items: { q: string; a: string }[] };
  cta: { eyebrow: string; title: string; subtitle: string; availableOn: string };
  footer: { tagline: string; moreApps: string; myket: string; bazaar: string; support: string; rights: string };
}
