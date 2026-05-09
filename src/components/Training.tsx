import { GraduationCap, ShieldCheck } from "lucide-react";
import { education, training } from "../data/portfolio";

export function Training() {
  return <section id="training" className="section">
    <h2>Certifications, Training & Education</h2>
    <div className="mt-8 grid gap-4 lg:grid-cols-2">
      <article className="card">
        <h3 className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sky-500" />Certifications & Training</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">{training.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="card">
        <h3 className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-sky-500" />Education</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">{education.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
    </div>
  </section>;
}
