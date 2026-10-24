import Image from "next/image";
import { SITE } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

interface Props {
  locale: Locale;
  label: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

/** تنها دکمه‌ی دانلود در کل سایت: آیکن رسمی مایکت */
export function MyketButton({ locale, label, alt, className, imgClassName }: Props) {
  return (
    <a
      href={SITE.myket}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-block rounded-xl transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
        className,
      )}
    >
      <Image
        src={`/svg_icons/get_from_myket-${locale}.svg`}
        alt={alt}
        width={200}
        height={60}
        unoptimized
        className={cn("h-14 w-auto", imgClassName)}
      />
    </a>
  );
}
