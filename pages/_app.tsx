import '@styles/globals.css'
// import 'nprogress/nprogress.css'
// import '@styles/nprogress.css'

import type { AppProps } from 'next/app'

import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative pt-14 lg:pt-0">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
