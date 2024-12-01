import "./index.css";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Analytics from "./components/Analytics";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import SettingsProvider from "./contexts/SettingsContext";
import { ThemeProvider } from "./components/theme-provider";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingsProvider>
      <Analytics />
      <ThemeProvider defaultTheme="system" storageKey="app-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </SettingsProvider>
  </StrictMode>
);
