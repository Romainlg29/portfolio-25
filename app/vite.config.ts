import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import ssl from "@vitejs/plugin-basic-ssl";
import { qrcode } from "vite-plugin-qrcode";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), ssl(), qrcode(), glsl()],
});
