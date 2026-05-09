export const THEMES = ["light", "dark", "network", "black"] as const;
export type ThemeName = (typeof THEMES)[number];

export function isValidTheme(value: unknown): value is ThemeName {
  return typeof value === "string" && THEMES.includes(value as ThemeName);
}

export function getInitialTheme(): ThemeName {
  if (typeof window === "undefined") return "light";

  try {
    const savedTheme = window.localStorage.getItem("theme");
    if (isValidTheme(savedTheme)) return savedTheme;

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return prefersDark ? "dark" : "light";
  } catch {
    return "light";
  }
}
