import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./room/**/*.{js,ts,jsx,tsx,mdx}",
    "./table/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    // "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // add daisyUI plugin
  plugins: [daisyui],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: "dark", // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

export default config;
