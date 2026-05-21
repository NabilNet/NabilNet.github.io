import { Moon, Palette, Sparkles, Sun } from "lucide-react";
import { THEME_MODES, ThemeMode } from "../utils/theme";

const modeMeta: Record<ThemeMode, { label: string; icon: typeof Sun }> = {
  light: { label: "Light", icon: Sun },
  dark: { label: "Dark", icon: Moon },
  rainbow: { label: "Rainbow", icon: Palette },
  universe: { label: "Universe", icon: Sparkles }
};

export function ThemeToggle({ themeMode, onSelect }: { themeMode: ThemeMode; onSelect: (theme: ThemeMode) => void }) {
  return <div className="inline-flex items-center rounded-xl border border-token bg-token-surface-elevated/90 p-1 backdrop-blur" role="group" aria-label="Theme switcher">
    {THEME_MODES.map((key) => {
      const { label, icon: Icon } = modeMeta[key];
      return <button key={key} type="button" aria-label={`Set ${label.toLowerCase()} theme`} title={label} onClick={() => onSelect(key)} className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-accent ${themeMode === key ? "bg-token-accent text-white" : "muted hover:text-token-accent"}`}>
      <Icon className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">{label}</span>
    </button>;
    })}
  </div>;
}
