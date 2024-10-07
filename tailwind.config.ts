import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        branco: "var(--branco)",
        preto: "var(--preto)",
        amareloClaro: "var(--amareloClaro)",
        amareloMeio: "var(--amareloMeio)",
        amareloQueimado: "var(--amareloQueimado)",
        azul: "var(--azul)",
      },
    },
  },
  plugins: [],
};
export default config;
