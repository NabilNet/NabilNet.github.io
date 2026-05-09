import { useEffect, useRef } from "react";

export function NetworkBackground({ active }: { active: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const nodes = Array.from({ length: 28 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0012, vy: (Math.random() - 0.5) * 0.0012 }));
    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    resize(); addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const n of nodes) { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > 1) n.vx *= -1; if (n.y < 0 || n.y > 1) n.vy *= -1; }
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < 0.2) {
          ctx.strokeStyle = `rgba(56,189,248,${0.24 - d})`;
          ctx.beginPath(); ctx.moveTo(a.x * canvas.width, a.y * canvas.height); ctx.lineTo(b.x * canvas.width, b.y * canvas.height); ctx.stroke();
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(125,211,252,0.65)";
        ctx.beginPath(); ctx.arc(n.x * canvas.width, n.y * canvas.height, 1.8, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, [active]);

  return <canvas ref={ref} className={`pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500 ${active ? "opacity-70" : "opacity-0"}`} aria-hidden="true" />;
}
