import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Training } from "./components/Training";
import { Contact } from "./components/Contact";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { NetworkBackground } from "./components/NetworkBackground";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { getInitialTheme, isValidTheme, ThemeName } from "./utils/theme";

function App() {
  const [theme, setTheme] = useState<ThemeName>(() => getInitialTheme());

  useEffect(() => {
    const safeTheme = isValidTheme(theme) ? theme : "light";
    document.documentElement.setAttribute("data-theme", safeTheme);
    try {
      window.localStorage.setItem("theme", safeTheme);
    } catch {
      // no-op: storage may be unavailable in private mode / blocked contexts
    }
  }, [theme]);

  return <div className="app-shell min-h-screen bg-token-bg text-token-text transition-colors duration-500">
    <ErrorBoundary fallback={null}><NetworkBackground active={theme === "network"} /></ErrorBoundary>
    <div className="app-content">
      <Navbar theme={theme} onSelect={setTheme} />
      <main>
        <Hero /><About /><Expertise /><ErrorBoundary fallback={<section id="projects" className="section"><h2>Project Highlights</h2><p className="muted mt-4">Something went wrong while loading this section.</p></section>}><Projects /></ErrorBoundary>
        <ErrorBoundary fallback={<section id="experience" className="section"><h2>Professional Journey</h2><p className="muted mt-4">Experience content is temporarily unavailable.</p></section>}><ExperienceTimeline /></ErrorBoundary>
        <ErrorBoundary fallback={<section id="certifications" className="section"><h2>Certifications & Learning</h2><p className="muted mt-4">Something went wrong while loading this section.</p></section>}><Training /></ErrorBoundary><Contact />
      </main>
      <Footer />
    </div>
  </div>;
}

export default App;
