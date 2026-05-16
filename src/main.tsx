import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element #root not found");
}

try {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
      <ErrorBoundary
        fallback={<main className="section"><h1 className="text-2xl font-semibold">Portfolio loading issue</h1><p className="muted mt-3">Something went wrong while loading this section.</p></main>}
      >
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch {
  rootElement.innerHTML = '<main style="padding:24px;font-family:system-ui"><h1 style="margin:0 0 8px">Portfolio loading issue</h1><p style="margin:0;color:#475569">The portfolio could not be loaded. Please try again later.</p></main>';
}
