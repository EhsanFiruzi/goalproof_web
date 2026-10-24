import { cn } from "@/lib/utils";

// ستاره‌ها با seed ثابت ساخته می‌شوند تا خروجی سرور و کلاینت یکی باشد.
const stars = (() => {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: 70 }, () => ({
    x: (rnd() * 100).toFixed(2),
    y: (rnd() * 100).toFixed(2),
    r: (rnd() * 1.1 + 0.4).toFixed(2),
    o: (rnd() * 0.55 + 0.25).toFixed(2),
  }));
})();

/** آسمان شبانه‌ی کاملاً پروسیجرال (بدون عکس پس‌زمینه) */
export function NightSky({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(108,99,255,0.35),transparent_55%),radial-gradient(ellipse_at_85%_65%,rgba(255,167,38,0.16),transparent_50%),linear-gradient(to_bottom,#0b0b1e,#05050a)]" />
      <svg className="absolute inset-0 size-full" preserveAspectRatio="none">
        {stars.map((s, i) => (
          <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.r} fill="#fff" opacity={s.o} />
        ))}
      </svg>
    </div>
  );
}

export function Mountains({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 w-full md:h-44", className)}
    >
      <path
        d="M0,220 L0,150 L160,90 L260,140 L420,60 L560,130 L700,80 L860,150 L1020,70 L1180,140 L1300,100 L1440,150 L1440,220 Z"
        fill="#101028"
      />
      <path
        d="M0,220 L0,175 L200,130 L340,170 L520,110 L700,175 L900,125 L1100,180 L1260,140 L1440,185 L1440,220 Z"
        fill="#05050a"
      />
    </svg>
  );
}

export function Moon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={cn("pointer-events-none", className)}>
      <defs>
        <mask id="moon-mask">
          <rect width="100" height="100" fill="#fff" />
          <circle cx="64" cy="40" r="34" fill="#000" />
        </mask>
      </defs>
      <circle cx="45" cy="52" r="38" fill="#FFD900" opacity="0.9" mask="url(#moon-mask)" />
    </svg>
  );
}
