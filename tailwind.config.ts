import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      width: {
        '200px': '200px',
      },
      left: {
        '7px': '7px',
        '90px': '90px',
        '25px': '25px',
        '-60px': '-60px',
        '-175px': '-175px',
        '-180px': '-180px',
        '-235px': '-235px',
        '240px': '240px',
        '185px': '185px',
        '-full': '-100%',
        '-100%': '-100%',
      },
      right: {
        '30px': '30px',
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
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
