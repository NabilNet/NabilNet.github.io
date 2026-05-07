import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  return <button onClick={onToggle} className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 hover:border-sky-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" aria-label="Toggle theme">{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button>;
}
