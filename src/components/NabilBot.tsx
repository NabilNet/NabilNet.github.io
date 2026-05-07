import { AnimatePresence, motion } from "framer-motion";
import { Bot, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { fallbackResponse, qa, welcomeMessage } from "../data/nabilBot";

type Msg = { from: "bot" | "user"; text: string };

export function NabilBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([{ from: "bot", text: welcomeMessage }]);

  const answer = (q: string) => Object.keys(qa).find((k) => q.toLowerCase().includes(k)) ? qa[Object.keys(qa).find((k) => q.toLowerCase().includes(k)) as string] : fallbackResponse;
  const send = (q = input) => { if (!q.trim()) return; setMessages((m) => [...m, { from: "user", text: q }, { from: "bot", text: answer(q) }]); setInput(""); };
  const typing = useMemo(() => { const last = messages.length > 0 ? messages[messages.length - 1] : undefined; return last?.from === "user"; }, [messages]);

  return <>
    <motion.button animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }} onClick={() => setOpen((v) => !v)} className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-[0_0_28px_rgba(56,189,248,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400" aria-label="Ask NabilBot"><Sparkles className="mx-auto" /></motion.button>
    <div className="fixed bottom-6 right-24 z-50 hidden rounded-full border border-slate-300/40 bg-white/90 px-3 py-1 text-xs text-slate-700 shadow md:block dark:border-slate-600 dark:bg-slate-900/90 dark:text-slate-200">Ask NabilBot</div>
    <AnimatePresence>{open && <motion.aside initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} className="fixed bottom-24 right-4 z-50 w-[94vw] max-w-md rounded-3xl border border-slate-300/30 bg-white/85 p-4 shadow-2xl backdrop-blur dark:border-slate-600/40 dark:bg-[#0B1020]/90">
      <div className="mb-3 flex items-center justify-between"><h3 className="flex items-center gap-2"><Bot size={18}/>NabilBot</h3><button onClick={() => setOpen(false)} aria-label="Close"><X size={18}/></button></div>
      <div className="h-64 space-y-2 overflow-y-auto">{messages.map((m, i) => <div key={`${m.from}-${i}`} className={`rounded-2xl px-3 py-2 text-sm ${m.from === "bot" ? "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100" : "ml-8 bg-sky-500/15 text-slate-900 dark:bg-sky-500/20 dark:text-slate-100"}`}>{m.text}</div>)}{typing && <p className="text-xs text-slate-500">Typing...</p>}</div>
      <div className="mt-3 flex gap-2"><input className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900" value={input} onChange={(e) => setInput(e.target.value)} /><button className="btn" onClick={() => send()}>Send</button></div>
    </motion.aside>}</AnimatePresence>
  </>;
}
