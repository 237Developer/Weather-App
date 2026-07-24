import config from "eslint-config-xo";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...config({ browser: true, prettier: "compat" }),
  {
    files: ["**/*.test.js"],
    rules: {
      "no-undef": "off",
    },
  },
  {
    ignores: ["**/*.html"],
  },
]);
