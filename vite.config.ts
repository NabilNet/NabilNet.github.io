import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/NabilNet.github.io/",
  build: {
    outDir: "dist"
  }
});
