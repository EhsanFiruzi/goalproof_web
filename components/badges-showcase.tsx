import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";

const sizes = [84, 104, 124, 148];

export function BadgesShowcase({ d }: { d: Dictionary }) {
  const b = d.badges;
  return (
    <section id="badges" className="relative overflow-hidden border-y border-line bg-card/40 py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 start-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px] rtl:translate-x-1/2" />
        <div className="absolute bottom-0 end-0 size-[26rem] rounded-full bg-brand/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-gold">{b.eyebrow}</p>
          <h2 className="text-3xl font-bold md:text-5xl">{b.title}</h2>
          <p className="mt-5 leading-8 text-muted">{b.subtitle}</p>
        </div>

        {/* نردبان استریک */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold">{b.streakTitle}</h3>
          <p className="mt-1 text-sm text-muted">{b.streakSub}</p>

          <div className="relative mt-10">
            <div aria-hidden className="absolute inset-x-8 bottom-[3.4rem] hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />
            <ol className="relative grid grid-cols-2 items-end gap-x-4 gap-y-10 md:flex md:justify-center md:gap-14">
              {b.streak.map((s, i) => (
                <li key={s.id} className="flex flex-col items-center">
                  <Image
                    src={`/badges/streak/${s.file}.svg`}
                    alt={s.name}
                    width={sizes[i]}
                    height={sizes[i]}
                    unoptimized
                    style={{ animationDelay: `${i * 0.6}s` }}
                    className="animate-float drop-shadow-[0_10px_30px_rgba(255,217,0,0.3)] transition-transform duration-300 hover:scale-110"
                  />
                  <p className="mt-4 font-bold">{s.name}</p>
                  <p className="mt-1 text-sm text-muted">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* مدال‌های ویژه */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="text-xl font-bold">{b.specialTitle}</h3>
            <p className="mt-1 text-sm text-muted">{b.specialSub}</p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {b.special.map((s) => (
              <li
                key={s.id}
                className="group relative overflow-hidden rounded-3xl border border-line bg-bg/70 p-6 text-center transition duration-300 hover:-translate-y-1.5 hover:border-gold/60"
              >
                <div aria-hidden className="absolute inset-x-0 -top-10 mx-auto size-40 rounded-full bg-brand/0 blur-3xl transition duration-500 group-hover:bg-gold/25" />
                <Image
                  src={`/badges/special/${s.file}.svg`}
                  alt={s.name}
                  width={104}
                  height={104}
                  unoptimized
                  className="relative mx-auto h-24 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 md:h-28"
                />
                <p className="relative mt-4 font-bold">{s.name}</p>
                <p className="relative mt-1 text-sm leading-6 text-muted">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
