/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'grey-400': '#b7b7b7',
        'hyundai-blue': '#002c5f',
        'active-red': '#e63312',
        'grey-700': '#666',
        'grey-200': '#efefef',
        'grey-1000': '#1c1b1b',
      },
      spacing: {},
      fontFamily: {
        hyundaitext: 'HyundaiText',
        hyundaihead: 'HyundaiHead',
      },
    },
    fontSize: {
      base: '16px',
      '5xl': '24px',
      xs: '12px',
      '13xl': '32px',
      inherit: 'inherit',
    },
  },
  corePlugins: {
    preflight: false,
  },
};
