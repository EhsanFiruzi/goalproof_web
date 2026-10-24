"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// ستاره‌ها با seed ثابت (خروجی سرور و کلاینت یکی می‌ماند)
const stars = (() => {
  let seed = 11;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: 90 }, (_, i) => ({
    x: (rnd() * 100).toFixed(2),
    y: (rnd() * 100).toFixed(2),
    r: (rnd() * 0.9 + 0.3).toFixed(2),
    o: (rnd() * 0.5 + 0.2).toFixed(2),
    tw: i % 4 === 0,
    delay: (rnd() * 4).toFixed(2),
  }));
})();

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

interface Props {
  className?: string;
  /** ارتفاع گنبد سیاره (کلاس Tailwind)؛ باید با padding پایین بخش هماهنگ باشد */
  domeClassName?: string;
}

/**
 * افق سیاره با نور بلوم. فقط CSS است (بدون WebGL).
 * نور روی لبه‌ی منحنی با ماوس حرکت می‌کند، بدون ماوس آرام می‌چرخد،
 * با اسکرول محو می‌شود و ستاره‌ها پارالکس دارند.
 */
export function HorizonBloom({ className, domeClassName = "h-32 md:h-56" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const domeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const wrap = wrapRef.current;
    const dome = domeRef.current;
    if (!root || !wrap || !dome) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const geo = { w: 1, h: 1, dl: 0, dt: 0, dw: 1, dh: 1 };
    const st = { x: 0, i: 0.85, px: 0, py: 0 };
    const ptr = { cx: 0, cy: 0, nx: 0, ny: 0, inside: false, at: -1e9 };
    let raf = 0;
    let last = 0;
    let visible = true;

    // اندازه‌ها از layout خوانده می‌شوند (offset*) تا از transform اثر نگیرند
    const measure = () => {
      geo.w = wrap.offsetWidth;
      geo.h = wrap.offsetHeight;
      geo.dl = dome.offsetLeft;
      geo.dt = dome.offsetTop;
      geo.dw = dome.offsetWidth;
      geo.dh = dome.offsetHeight;
    };

    // ارتفاع لبه‌ی منحنی گنبد در موقعیت x
    const arcY = (x: number) => {
      const n = clamp((x - (geo.dl + geo.dw / 2)) / (geo.dw / 2), -1, 1);
      return geo.dt + geo.dh * (1 - Math.sqrt(1 - n * n));
    };

    const apply = (p: number) => {
      const s = root.style;
      s.setProperty("--bx", `${st.x.toFixed(1)}px`);
      s.setProperty("--by", `${(arcY(st.x) + 1).toFixed(1)}px`);
      s.setProperty("--bi", st.i.toFixed(3));
      s.setProperty("--sy", p.toFixed(3));
      s.setProperty("--px", st.px.toFixed(3));
      s.setProperty("--py", st.py.toFixed(3));
    };

    const frame = (now: number) => {
      raf = 0;
      const dt = clamp((now - last) / 1000 || 0, 0, 0.05);
      last = now;

      const r = root.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height), 0, 1);
      const live = ptr.inside && now - ptr.at < 2500;

      let tx: number;
      let ti: number;
      if (live) {
        tx = clamp(ptr.cx - r.left, geo.w * 0.1, geo.w * 0.9);
        const dy = ptr.cy - r.top - arcY(tx);
        ti = 0.78 + 0.22 * Math.exp(-(dy * dy) / (2 * Math.pow(geo.h * 0.35, 2)));
      } else {
        tx = geo.w / 2 + Math.sin((now / 1000) * 0.35) * geo.w * 0.14;
        ti = 0.8 + 0.06 * Math.sin((now / 1000) * 0.9);
      }
      ti *= 1 - 0.75 * p;

      const k = 1 - Math.exp(-dt * 4);
      st.x += (tx - st.x) * k;
      st.i += (ti - st.i) * k;
      st.px += ((live ? ptr.nx : 0) - st.px) * k * 0.6;
      st.py += ((live ? ptr.ny : 0) - st.py) * k * 0.6;
      apply(p);

      if (visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (reduced || raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    measure();
    st.x = geo.w / 2;
    apply(0);
    wake();

    const onMove = (e: PointerEvent) => {
      ptr.cx = e.clientX;
      ptr.cy = e.clientY;
      ptr.nx = (e.clientX / window.innerWidth) * 2 - 1;
      ptr.ny = (e.clientY / window.innerHeight) * 2 - 1;
      ptr.inside = true;
      ptr.at = performance.now();
      wake();
    };
    const onLeave = () => { ptr.inside = false; };
    const onUp = (e: PointerEvent) => { if (e.pointerType !== "mouse") onLeave(); };
    const onVisibility = () => wake();

    if (!reduced) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerup", onUp, { passive: true });
      window.addEventListener("pointercancel", onUp, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(() => {
      measure();
      if (reduced) {
        st.x = geo.w / 2;
        apply(0);
      }
      wake();
    });
    ro.observe(root);

    const io = new IntersectionObserver((entries) => {
      visible = entries.some((e) => e.isIntersecting);
      wake();
    });
    io.observe(root);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden className={cn("hb pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <svg className="hb-stars" preserveAspectRatio="none">
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            fill="#fff"
            opacity={s.o}
            className={s.tw ? "hb-twinkle" : undefined}
            style={s.tw ? ({ "--o": s.o, animationDelay: `-${s.delay}s` } as React.CSSProperties) : undefined}
          />
        ))}
      </svg>

      <div ref={wrapRef} className="hb-parallax">
        <div className="hb-intro">
          <div className="hb-atmo" />
          <div ref={domeRef} className={cn("hb-dome hb-body", domeClassName)} />
          <div className={cn("hb-dome hb-rim-base", domeClassName)} />
          <div className="hb-rimmask">
            <div className={cn("hb-dome hb-rim-soft", domeClassName)} />
            <div className={cn("hb-dome hb-rim-sharp", domeClassName)} />
          </div>
        </div>
        <div className="hb-bloom" />
      </div>
    </div>
  );
}