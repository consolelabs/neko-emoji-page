import '@styles/globals.css'
import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import type { AppProps } from 'next/app'

import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(inter.className, 'relative pt-14 lg:pt-0')}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
