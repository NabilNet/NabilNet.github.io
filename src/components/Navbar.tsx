import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const links = ["Home", "About", "Expertise", "Experience", "Projects", "Skills", "Training", "Contact"];

export function Navbar({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  return <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-40 border-b border-slate-300/30 bg-white/70 backdrop-blur-xl dark:border-slate-700/40 dark:bg-[#050816]/70"><nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"><a href="#home" className="font-semibold">NabilNet</a><div className="hidden items-center gap-4 text-sm md:flex">{links.map((l)=><a key={l} href={`#${l.toLowerCase()}`} className="muted hover:text-sky-500">{l}</a>)}<ThemeToggle theme={theme} onToggle={onToggle} /></div><div className="md:hidden"><ThemeToggle theme={theme} onToggle={onToggle} /></div></nav></motion.header>;
}
