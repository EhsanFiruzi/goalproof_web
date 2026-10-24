export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card/80 px-4 py-1.5 text-sm text-muted backdrop-blur">
      {children}
    </p>
  );
}
