import About from '@components/LandingPage/About'
import Banner from '@components/LandingPage/Banner'
import CTA from '@components/LandingPage/CTA'
import Gallery from '@components/LandingPage/Gallery'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Neko Emoji & Sticker</title>
        <meta name="title" content="Neko Emoji & Sticker" />
        <meta
          name="description"
          content="Explore adorable Neko Emoji & Sticker on various platform."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sticker.console.so" />
        <meta property="og:title" content="Neko Emoji & Sticker" />
        <meta
          property="og:description"
          content="Explore adorable Neko Emoji & Sticker on various platform."
        />
        <meta
          property="og:image"
          content="https://sticker.console.so/thumbnail.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sticker.console.so" />
        <meta property="twitter:title" content="Neko Emoji & Sticker" />
        <meta
          property="twitter:description"
          content="Explore adorable Neko Emoji & Sticker on various platform."
        />
        <meta
          property="twitter:image"
          content="https://sticker.console.so/thumbnail.png"
        />
        {/* cache 1 month */}
        <meta http-equiv="Cache-Control" content="max-age=2629746, public" />
      </Head>
      <Banner />
      <Gallery />
      <About />
      <CTA />
    </>
  )
}
