import type { Config } from 'tailwindcss'
import { mochiui } from '@mochi-ui/theme'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@mochi-ui/theme/dist/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [mochiui()],
}
export default config
