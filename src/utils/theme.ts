export const THEME_MODES = ["light", "dark", "rainbow", "universe"] as const;
export type ThemeMode = (typeof THEME_MODES)[number];
export const DEFAULT_THEME: ThemeMode = "light";

export function isValidThemeMode(value: unknown): value is ThemeMode {
  return typeof value === "string" && THEME_MODES.includes(value as ThemeMode);
}

export function getInitialThemeMode(): ThemeMode {
  if (typeof window === "undefined") return DEFAULT_THEME;

  try {
    const savedTheme = window.localStorage.getItem("theme-mode");
    if (isValidThemeMode(savedTheme)) return savedTheme;
  } catch {
    // no-op
  }

  return DEFAULT_THEME;
}

export function normalizeThemeMode(value: unknown): ThemeMode {
  return isValidThemeMode(value) ? value : DEFAULT_THEME;
}
