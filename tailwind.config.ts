import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '200px': '200px',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#5D4043',
        bg1: '#F7F3F0',
        bg2: '#FAF6F3',
        bg3: '#EBE0D8',
        bg4: '#EFF2FD',
        fg1: '#30171B',
        fg2: '#5D4043',
        fg3: '#816A6C',
        bgblue: '#EFF1FD',
        bgred: '#FDEFF1'
      }
    },
  },
  plugins: [],
};
export default config;
