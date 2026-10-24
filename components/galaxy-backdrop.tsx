"use client";

import { useEffect, useState } from "react";
import Galaxy from "./Galaxy";
import "./Galaxy.css";

type Quality = { layers: number; dpr: number; density: number; repulsion: boolean };

const DESKTOP: Quality = { layers: 4, dpr: 2, density: 1, repulsion: true };
// موبایل: لایه و رزولوشن کمتر، بدون دفع ستاره‌ها (شیدر سنگین‌تر با REPEL)
const MOBILE: Quality = { layers: 3, dpr: 1, density: 0.8, repulsion: false };

export function GalaxyBackdrop() {
  const [q, setQ] = useState<Quality | null>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    setQ(coarse || small ? MOBILE : DESKTOP);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_50%_120%,rgba(108,99,255,0.3),transparent_70%)]" />
      {q && (
        <Galaxy
          transparent
          starColors={["#ffffff", "#9b8cff", "#ffc46b", "#ff6b6b"]}
          density={q.density}
          glowIntensity={0.35}
          flareIntensity={1}
          twinkleIntensity={0.4}
          starSpeed={0.4}
          rotationSpeed={0.05}
          layers={q.layers}
          dpr={q.dpr}
          mouseRepulsion={q.repulsion}
          repulsionStrength={2}
          clickWarp={!q || q === DESKTOP}
          intro
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
    </div>
  );
}