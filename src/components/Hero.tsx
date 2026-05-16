import { motion } from "framer-motion";
import { heroPillars } from "../data/portfolio";

export function Hero() {
  return <section id="home" className="section pt-24">
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="card relative overflow-hidden">
      <div className="hero-mesh" aria-hidden="true" />
      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-token-accent">Network, Cloud & Automation Engineer</p>
      <h1 className="relative mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">Engineering reliable infrastructure for modern cloud-connected enterprises.</h1>
      <p className="relative muted mt-4 max-w-2xl text-base">I help organizations build secure, scalable network and cloud foundations with automation-led operations and measurable reliability improvements.</p>
      <div className="relative mt-7 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
      <div className="relative mt-6 flex flex-wrap gap-2">{heroPillars.map((pillar) => <span key={pillar} className="rounded-full border border-token px-3 py-1 text-xs font-medium">{pillar}</span>)}</div>
    </motion.div>
  </section>;
}
