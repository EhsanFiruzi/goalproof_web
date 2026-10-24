import Image from "next/image";
import icon from "@/app/icon.png";
import { SITE } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";

/** لوگوی خود اپ (app/icon.png) */
export function BrandLogo({ locale, size = 36 }: { locale: Locale; size?: number }) {
  return (
    <span className="flex items-center gap-2.5 font-bold">
      <Image src={icon} alt="" width={size} height={size} className="rounded-xl" priority />
      <span className="text-lg">{locale === "fa" ? SITE.nameFa : SITE.name}</span>
    </span>
  );
}
