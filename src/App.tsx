import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Training } from "./components/Training";
import { Contact } from "./components/Contact";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { NetworkBackground } from "./components/NetworkBackground";
import { ThemeName } from "./data/portfolio";

function App() {
  const [theme, setTheme] = useState<ThemeName>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeName | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const setThemeMode = (next: ThemeName) => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return <div className="min-h-screen bg-token-bg text-token-text transition-colors duration-500">
    <NetworkBackground active={theme === "network"} />
    <Navbar theme={theme} onSelect={setThemeMode} />
    <main>
      <Hero /><About /><ExperienceTimeline /><Training /><Contact />
    </main>
    <Footer />
  </div>;
}

export default App;
