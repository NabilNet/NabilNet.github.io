import * as icons from "lucide-react";
import { expertise } from "../data/portfolio";
export function Expertise(){return <section className="section"><h2>Expertise</h2><div className="grid md:grid-cols-3 gap-4">{expertise.map((e)=>{const Icon=(icons as Record<string, any>)[e.icon] ?? icons.Server; return <article key={e.title} className="card hover:-translate-y-1 hover:shadow-sky-500/20 transition"><Icon className="mb-2 text-sky-400"/><h3>{e.title}</h3><p className="muted">{e.description}</p></article>;})}</div></section>;}
