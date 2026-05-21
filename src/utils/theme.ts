export const THEME_MODES = ["light", "dark", "rainbow", "universe"] as const;
export type ThemeMode = (typeof THEME_MODES)[number];

export function isValidThemeMode(value: unknown): value is ThemeMode {
  return typeof value === "string" && THEME_MODES.includes(value as ThemeMode);
}

export function getInitialThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  try {
    const savedTheme = window.localStorage.getItem("theme-mode");
    if (isValidThemeMode(savedTheme)) return savedTheme;
  } catch {
    // no-op
  }

  return "light";
}
