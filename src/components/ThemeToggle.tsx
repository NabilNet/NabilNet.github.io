import { Moon, Sun } from "lucide-react";

interface Props { theme: "dark" | "light"; onToggle: () => void }

export function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button aria-label="Toggle theme" onClick={onToggle} className="rounded-xl border border-slate-500/30 p-2 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400">
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
