import { ThemeName } from "../data/portfolio";

const themes: { key: ThemeName; label: string; color: string }[] = [
  { key: "light", label: "Light", color: "#e5e7eb" },
  { key: "dark", label: "Dark", color: "#1e293b" },
  { key: "network", label: "Network", color: "#0ea5e9" },
  { key: "black", label: "Black", color: "#020617" }
];

export function ThemeToggle({ theme, onSelect }: { theme: ThemeName; onSelect: (theme: ThemeName) => void }) {
  return <div className="relative h-16 w-16 rounded-full border border-token bg-token-surface shadow-token">
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 overflow-hidden rounded-full">
      {themes.map((item) => <button key={item.key} aria-label={`Switch to ${item.label} mode`} title={item.label} onClick={() => onSelect(item.key)} className={`relative transition hover:brightness-110 focus-visible:z-10 ${theme === item.key ? "ring-2 ring-token-accent" : ""}`} style={{ background: item.color }} />)}
    </div>
    <span className="pointer-events-none absolute inset-0 m-auto flex h-8 w-8 items-center justify-center rounded-full border border-token bg-token-surface text-[9px] font-semibold">NabilNet</span>
  </div>;
}
