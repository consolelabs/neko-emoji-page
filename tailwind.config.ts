import { mochiui } from '@mochi-ui/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@mochi-ui/theme/dist/components/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [mochiui()],
}
export default config
