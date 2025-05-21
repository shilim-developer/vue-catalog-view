import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.mjs";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ["src/tests/*.spec.*"],
      browser: {
        provider: "playwright",
        enabled: true,
        // headless: true,
        instances: [{ browser: "chromium" }],
        viewport: {
          width: 1080,
          height: 780,
        },
      },
    },
  })
);
