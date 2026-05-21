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
import { getInitialThemeMode, isValidThemeMode, ThemeMode } from "./utils/theme";

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getInitialThemeMode());

  useEffect(() => {
    const safeThemeMode = isValidThemeMode(themeMode) ? themeMode : "light";
    document.documentElement.setAttribute("data-theme", safeThemeMode);
    try { window.localStorage.setItem("theme-mode", safeThemeMode); } catch {
      // no-op when storage is unavailable
    }
  }, [themeMode]);

  return <div className="app-shell min-h-screen bg-token-bg text-token-text transition-colors duration-500">
    <ErrorBoundary fallback={null}><NetworkBackground theme={themeMode} /></ErrorBoundary>
    <div className="app-content">
      <Navbar themeMode={themeMode} onSelect={setThemeMode} />
      <main><Hero /><About /><Expertise /><Projects /><ExperienceTimeline /><Training /><Contact /></main>
      <Footer />
    </div>
  </div>;
}

export default App;
