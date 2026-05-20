import { motion } from "framer-motion";
import { heroPillars } from "../data/portfolio";

export function Hero() {
  return <section id="home" className="section pt-24">
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="card relative overflow-hidden">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-accent hero-accent-red" aria-hidden="true" />
      <div className="hero-accent hero-accent-purple" aria-hidden="true" />
      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-token-accent">Network, Cloud & Automation Engineer</p>
      <h1 className="relative mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">Engineering secure, automated and resilient networks for modern enterprises.</h1>
      <p className="relative muted mt-4 max-w-3xl text-base">I help organizations design, modernize and operate reliable network, cloud and security foundations — combining architecture, automation and operational excellence to support business continuity, scalability and digital transformation.</p>
      <div className="relative mt-7 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
      <div className="relative mt-6 flex flex-wrap gap-2">
        {heroPillars.map((pillar, idx) => <motion.span key={pillar} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + idx * 0.05 }} className="rounded-full border border-token px-3 py-1 text-xs font-medium tag-token">{pillar}</motion.span>)}
      </div>
    </motion.div>
  </section>;
}
