import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return <footer className="border-t border-token py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center">
      <div>
        <p className="font-semibold">Nabil Nettour</p>
        <p className="text-sm muted">Network, Cloud & Automation Engineer</p>
      </div>
      <div className="flex items-center gap-2">
        <a href="https://github.com/NabilNet" aria-label="GitHub" target="_blank" rel="noreferrer" className="btn !p-2"><Github className="h-4 w-4" /></a>
        <a href="https://www.linkedin.com/in/nabil-n-25785216/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="btn !p-2"><Linkedin className="h-4 w-4" /></a>
        <a href="mailto:nabil.nettour@gmail.com" aria-label="Email" className="btn !p-2"><Mail className="h-4 w-4" /></a>
      </div>
      <p className="text-xs muted">© {new Date().getFullYear()} Built with React, TypeScript, and Vite.</p>
    </div>
  </footer>;
}
