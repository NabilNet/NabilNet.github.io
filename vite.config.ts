import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function resolveBasePath() {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  const repo = env?.GITHUB_REPOSITORY?.split("/")[1] ?? "";

  if (!repo || repo.toLowerCase() === "nabilnet.github.io") {
    return "/";
  }

  return `/${repo}/`;
}

export default defineConfig({
  plugins: [react()],
  base: resolveBasePath()
});
