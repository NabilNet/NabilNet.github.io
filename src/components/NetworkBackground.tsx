import { useEffect, useRef } from "react";

export function NetworkBackground({ active }: { active: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0012,
      vy: (Math.random() - 0.5) * 0.0012
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      try {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > 1) n.vx *= -1;
          if (n.y < 0 || n.y > 1) n.vy *= -1;
        }

        for (let i = 0; i < nodes.length; i += 1) {
          for (let j = i + 1; j < nodes.length; j += 1) {
            const a = nodes[i];
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.hypot(dx, dy);
            if (d < 0.2) {
              ctx.strokeStyle = `rgba(56,189,248,${Math.max(0, 0.24 - d)})`;
              ctx.beginPath();
              ctx.moveTo(a.x * window.innerWidth, a.y * window.innerHeight);
              ctx.lineTo(b.x * window.innerWidth, b.y * window.innerHeight);
              ctx.stroke();
            }
          }
        }

        for (const n of nodes) {
          ctx.fillStyle = "rgba(125,211,252,0.65)";
          ctx.beginPath();
          ctx.arc(n.x * window.innerWidth, n.y * window.innerHeight, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }

        rafId = window.requestAnimationFrame(draw);
      } catch {
        // Silent fail-safe to preserve rendering stability in edge environments.
      }
    };

    resize();
    window.addEventListener("resize", resize);
    rafId = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  return <canvas ref={ref} className={`network-background transition-opacity duration-500 ${active ? "opacity-70" : "opacity-0"}`} aria-hidden="true" />;
}
