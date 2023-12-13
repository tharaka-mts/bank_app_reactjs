import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ** https://vitejs.dev/config/ **
export default defineConfig({
  base: "/bank_app_reactjs/",
  plugins: [react()],
  // Enable Hosting
  // server: {
  //   host: true
  // }
});
