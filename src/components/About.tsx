import { aboutIntro } from "../data/portfolio";

export function About() {
  return <section id="about" className="section">
    <h2>About Me</h2>
    <div className="mt-6 space-y-4 card">
      {aboutIntro.map((paragraph) => <p key={paragraph} className="muted leading-relaxed">{paragraph}</p>)}
    </div>
  </section>;
}
