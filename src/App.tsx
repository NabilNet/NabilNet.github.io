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
import { getInitialThemeMode, getSystemTheme, isValidThemeMode, resolveTheme, ThemeMode } from "./utils/theme";

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getInitialThemeMode());
  const [systemTheme, setSystemTheme] = useState(getSystemTheme());
  const resolvedTheme = resolveTheme(themeMode);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const listener = () => setSystemTheme(getSystemTheme());
    media?.addEventListener?.("change", listener);
    return () => media?.removeEventListener?.("change", listener);
  }, []);

  useEffect(() => {
    const safeThemeMode = isValidThemeMode(themeMode) ? themeMode : "system";
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    try { window.localStorage.setItem("theme-mode", safeThemeMode); } catch {
      // no-op when storage is unavailable
    }
  }, [themeMode, resolvedTheme]);

  return <div className="app-shell min-h-screen bg-token-bg text-token-text transition-colors duration-500">
    <ErrorBoundary fallback={null}><NetworkBackground active={resolvedTheme === "dark" && systemTheme === "dark"} /></ErrorBoundary>
    <div className="app-content">
      <Navbar themeMode={themeMode} onSelect={setThemeMode} />
      <main><Hero /><About /><Expertise /><Projects /><ExperienceTimeline /><Training /><Contact /></main>
      <Footer />
    </div>
  </div>;
}

export default App;
