export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fa";

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

export const dirOf = (l: Locale) => (l === "fa" ? "rtl" : "ltr");
export const otherLocale = (l: Locale): Locale => (l === "fa" ? "en" : "fa");
export const ogLocale = (l: Locale) => (l === "fa" ? "fa_IR" : "en_US");
