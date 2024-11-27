import { defineConfig } from "unocss";
import baseConfig from "@slidev/client/uno.config.ts";

export default defineConfig({
  shortcuts: {
    ...baseConfig.shortcuts, // エディター補完のため

    "text-accent": "color-$slidev-theme-accent",
    "bg-accent": "bg-$slidev-theme-accent",
    "border-accent": "border-$slidev-theme-accent",
  },
});
