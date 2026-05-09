import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";

const links = [
  { href: "https://www.linkedin.com/in/nabil-n-25785216/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/NabilNet", icon: Github, label: "GitHub" },
  { href: "mailto:nabil.nettour@gmail.com", icon: Mail, label: "Email" },
  { href: "https://maps.google.com/?q=Paris,France", icon: MapPin, label: "Location" },
  { href: "#", icon: FileText, label: "Resume" }
];

export function Footer() {
  return <footer className="border-t border-slate-200/70 py-8 dark:border-slate-800">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
      <p className="text-xs text-slate-500">© {new Date().getFullYear()} NabilNet</p>
      <div className="flex items-center gap-3">{links.map((link) => <a key={link.label} href={link.href} aria-label={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="rounded-full border border-slate-300 p-2 text-slate-500 transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300"><link.icon className="h-4 w-4" /></a>)}</div>
    </div>
  </footer>;
}
