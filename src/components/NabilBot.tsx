import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useMemo, useState } from "react";
import { fallbackResponse, qa, welcomeMessage } from "../data/nabilBot";

type Msg = { from: "bot" | "user"; text: string };

export function NabilBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([{ from: "bot", text: welcomeMessage }]);
  const prompts = ["Who is Nabil?", "What are his main skills?", "What projects has he worked on?"];
  const answer = (q: string) => {
    const key = Object.keys(qa).find((k) => q.toLowerCase().includes(k));
    return key ? qa[key] : fallbackResponse;
  };
  const send = (q = input) => {
    if (!q.trim()) return;
    const bot = answer(q);
    setMessages((m) => [...m, { from: "user", text: q }, { from: "bot", text: bot }]);
    setInput("");
  };
  const typing = useMemo(() => messages.at(-1)?.from === "user", [messages]);

  return <>
    <button onClick={() => setOpen((v) => !v)} className="fixed bottom-5 right-5 z-50 rounded-full bg-sky-500 px-4 py-3 text-white shadow-lg" aria-label="Ask NabilBot">Ask NabilBot</button>
    <AnimatePresence>{open && <motion.aside initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-sm rounded-2xl border border-slate-500/30 bg-slate-900/90 backdrop-blur p-4">
      <div className="mb-3 flex justify-between"><h3 className="font-semibold flex items-center gap-2"><MessageCircle size={18}/>NabilBot</h3><button onClick={()=>setOpen(false)} aria-label="Close"><X size={18}/></button></div>
      <div className="h-64 overflow-y-auto space-y-2">{messages.map((m,i)=><div key={i} className={`rounded-xl p-2 text-sm ${m.from==='bot'?'bg-slate-800':'bg-sky-700/30 ml-6'}`}>{m.text}</div>)}{typing && <div className="text-xs text-slate-400">Typing...</div>}</div>
      <div className="mt-2 flex flex-wrap gap-2">{prompts.map((p)=><button key={p} onClick={()=>send(p)} className="badge">{p}</button>)}</div>
      <div className="mt-2 flex gap-2"><input aria-label="Ask NabilBot" className="flex-1 rounded-lg bg-slate-800 p-2 text-sm" value={input} onChange={(e)=>setInput(e.target.value)} /><button onClick={()=>send()} className="badge">Send</button></div>
    </motion.aside>}</AnimatePresence>
  </>;
}
