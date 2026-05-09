import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Training } from "./components/Training";
import { Contact } from "./components/Contact";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Expertise } from "./components/Expertise";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NabilBot } from "./components/NabilBot";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { StrategicCapabilities } from "./components/StrategicCapabilities";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-slate-50 transition-colors duration-500">
    <Navbar theme={theme} onToggle={toggleTheme} />
    <main>
      <Hero /><About /><StrategicCapabilities /><ExperienceTimeline /><Projects /><Expertise /><Training /><Contact />
    </main>
    <Footer />
    <NabilBot />
  </div>;
}

export default App;
