import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: { provider: "v8" },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
