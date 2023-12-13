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
        <meta
          property="og:url"
          content="https://consolelabs.github.io/neko-emoji-page/"
        />
        <meta property="og:title" content="Neko Emoji & Sticker" />
        <meta
          property="og:description"
          content="Explore adorable Neko Emoji & Sticker on various platform."
        />
        <meta
          property="og:image"
          content="https://consolelabs.github.io/neko-emoji-page/images/neko-pack.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://consolelabs.github.io/neko-emoji-page/"
        />
        <meta property="twitter:title" content="Neko Emoji & Sticker" />
        <meta
          property="twitter:description"
          content="Explore adorable Neko Emoji & Sticker on various platform."
        />
        <meta
          property="twitter:image"
          content="https://consolelabs.github.io/neko-emoji-page/images/neko-pack.png"
        />
      </Head>
      <Banner />
      <Gallery />
      <About />
      <CTA />
    </>
  )
}
