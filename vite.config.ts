import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin(), tsconfigPaths()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
