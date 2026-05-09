import { ErrorBoundary } from "./ErrorBoundary";
import { motion } from "framer-motion";
import { ThemeName } from "../utils/theme";
import { ThemeToggle } from "./ThemeToggle";

const links = ["Home", "About", "Experience", "Training", "Contact"];

export function Navbar({ theme, onSelect }: { theme: ThemeName; onSelect: (theme: ThemeName) => void }) {
  return <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-40 border-b border-token bg-token-surface/80 backdrop-blur-xl"><nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"><a href="#home" className="font-semibold">NabilNet</a><div className="hidden items-center gap-4 text-sm md:flex">{links.map((l)=><a key={l} href={`#${l.toLowerCase()}`} className="muted hover:text-token-accent">{l}</a>)}<ErrorBoundary fallback={null}><ThemeToggle theme={theme} onSelect={onSelect} /></ErrorBoundary></div><div className="md:hidden"><ErrorBoundary fallback={null}><ThemeToggle theme={theme} onSelect={onSelect} /></ErrorBoundary></div></nav></motion.header>;
}
