/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
    coverage: {
      enabled: true,
      include: [
        'app/**/*.js',
        'app/**/*.jsx'
      ],
      all: true,
      lines: 100,
      functions: 100,
      statements: 100,
      branches: 100
      
      ,
      clean: true,
    },
  },
});
