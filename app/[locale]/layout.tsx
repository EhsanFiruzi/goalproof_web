import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { dirOf, isLocale, locales } from "@/lib/i18n/config";
import { SITE } from "@/lib/site";
import "../globals.css";

// فایل‌های Vazir را در app/fonts قرار دهید (راهنما در README)
const vazir = localFont({
  src: [
    { path: "../fonts/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-vazir",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = { metadataBase: new URL(SITE.url) };
export const viewport: Viewport = { themeColor: "#05050A", colorScheme: "dark" };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} dir={dirOf(locale)} className={`${vazir.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
