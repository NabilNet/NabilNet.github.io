export const THEME_MODES = ["system", "light", "dark"] as const;
export type ThemeMode = (typeof THEME_MODES)[number];
export type ResolvedTheme = "light" | "dark";

export function isValidThemeMode(value: unknown): value is ThemeMode {
  return typeof value === "string" && THEME_MODES.includes(value as ThemeMode);
}

export function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";

  try {
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function getInitialThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "system";

  try {
    const savedTheme = window.localStorage.getItem("theme-mode");
    if (isValidThemeMode(savedTheme)) return savedTheme;
  } catch {
    // no-op
  }

  return "system";
}

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode === "system" ? getSystemTheme() : mode;
}
