import { defineConfig } from "vite";
// SWC significa Speedily Web Compiler, es un compilador de JavaScript y TypeScript
// Se utiliza para compilar el código JavaScript y TypeScript a código que el navegador pueda entender
// Remplaza Babel por es un compilador más rápido que Babel

import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()]
});
