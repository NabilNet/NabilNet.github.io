import { ThemeName } from "../utils/theme";

const themes: { key: ThemeName; label: string; color: string }[] = [
  { key: "light", label: "Light", color: "#f1f5f9" },
  { key: "dark", label: "Dark", color: "#1e293b" },
  { key: "network", label: "Network", color: "#24c3e8" },
  { key: "black", label: "Black", color: "#070707" }
];

export function ThemeToggle({ theme, onSelect }: { theme: ThemeName; onSelect: (theme: ThemeName) => void }) {
  return <div className="group relative h-11 w-11 overflow-hidden rounded-full border border-token bg-token-surface shadow-token transition-transform duration-300 hover:scale-[1.03] motion-reduce:transform-none sm:h-12 sm:w-12">
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 transition-transform duration-500 ease-out group-hover:rotate-3 motion-reduce:transform-none">
      {themes.map((item) => <button key={item.key} aria-label={`Switch to ${item.label} mode`} title={item.label} onClick={() => onSelect(item.key)} className={`relative transition-all duration-300 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-accent ${theme === item.key ? "z-[1] brightness-110" : "hover:brightness-105"}`} style={{ background: item.color }}>
        <span className={`pointer-events-none absolute inset-0 transition ${theme === item.key ? "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]" : ""}`} />
      </button>)}
    </div>
    <span className={`pointer-events-none absolute inset-0 m-auto flex h-5 w-5 items-center justify-center rounded-full border border-token bg-token-surface-elevated text-[6.5px] font-semibold leading-none tracking-tight transition-all duration-300 sm:h-6 sm:w-6 sm:text-[7px] ${themes.some((t) => t.key === theme) ? "shadow-[0_0_12px_-6px_var(--color-accent)]" : ""}`}>
      Nabil
    </span>
  </div>;
}
