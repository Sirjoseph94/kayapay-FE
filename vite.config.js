/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: [
  //     {
  //       find: "src",
  //       replacement: resolve(__dirname, "src/"),
  //     },
  //   ],
  // },
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.js"],
  },
});
