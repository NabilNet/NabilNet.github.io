import { FileText, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "https://www.linkedin.com/in/nabil-n-25785216/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/NabilNet", icon: Github, label: "GitHub" },
  { href: "mailto:nabil.nettour@gmail.com", icon: Mail, label: "Email" },
  { href: "#", icon: FileText, label: "Resume" }
];

export function Footer() {
  return <footer className="border-t border-token py-6">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
      <p className="text-xs muted">© {new Date().getFullYear()} NabilNet</p>
      <div className="flex items-center gap-2">{links.map((link) => <a key={link.label} href={link.href} aria-label={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="rounded-full border border-token p-2 muted transition hover:-translate-y-0.5 hover:text-token-accent"><link.icon className="h-4 w-4" /></a>)}</div>
    </div>
  </footer>;
}
