import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  return <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 dark:bg-slate-950/70 border-b border-slate-500/20">
    <nav className="mx-auto flex max-w-6xl items-center justify-between p-4 text-slate-100">
      <a href="#home" className="font-semibold">NabilNet</a>
      <div className="flex items-center gap-3"><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a><ThemeToggle theme={theme} onToggle={onToggle} /></div>
    </nav>
  </motion.header>;
}
