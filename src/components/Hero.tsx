import { motion } from "framer-motion";
import { identityPillars, professionalSummary } from "../data/portfolio";

export function Hero() {
  return <section id="home" className="section pt-20">
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="card relative overflow-hidden">
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-500/20 blur-3xl" />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Senior Network, Security, Cloud & Automation Engineer</p>
      <h1 className="mt-3 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">Designing resilient and secure enterprise platforms for global infrastructure modernization.</h1>
      <p className="muted mt-5 max-w-4xl">{professionalSummary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{identityPillars.map((pillar) => <span key={pillar} className="rounded-full border border-slate-300/70 px-3 py-1 text-xs font-medium dark:border-slate-600">{pillar}</span>)}</div>
      <div className="mt-7 flex flex-wrap gap-3"><a href="#capabilities" className="btn">Strategic Capabilities</a><a href="#projects" className="btn">Featured Projects</a><a href="#contact" className="btn">Contact</a></div>
    </motion.div>
  </section>;
}
