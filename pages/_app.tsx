import '@styles/globals.css'
// import 'nprogress/nprogress.css'
// import '@styles/nprogress.css'

import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
import clsx from 'clsx'

import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(inter.className, 'relative')}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
