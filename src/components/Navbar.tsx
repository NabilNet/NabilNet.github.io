import { ErrorBoundary } from "./ErrorBoundary";
import { motion } from "framer-motion";
import { ThemeName } from "../utils/theme";
import { ThemeToggle } from "./ThemeToggle";

const links = [{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Capabilities",href:"#capabilities"},{label:"Experience",href:"#experience"},{label:"Expertise",href:"#expertise"},{label:"Training",href:"#training"},{label:"Contact",href:"#contact"}];

export function Navbar({ theme, onSelect }: { theme: ThemeName; onSelect: (theme: ThemeName) => void }) {
  return <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-40 border-b border-token bg-token-surface/80 backdrop-blur-xl"><nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"><a href="#home" className="font-semibold">NabilNet</a><div className="hidden items-center gap-4 text-sm md:flex">{links.map((l)=><a key={l.label} href={l.href} className="muted rounded-md px-1 py-0.5 transition hover:text-token-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-accent">{l.label}</a>)}<ErrorBoundary fallback={null}><ThemeToggle theme={theme} onSelect={onSelect} /></ErrorBoundary></div><div className="md:hidden"><ErrorBoundary fallback={null}><ThemeToggle theme={theme} onSelect={onSelect} /></ErrorBoundary></div></nav></motion.header>;
}
