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
        <title>Neko Sticker • Consolelabs</title>
        <meta name="title" content="Neko Sticker • Consolelabs" />
        <meta
          name="description"
          content="Discover a treasure trove of adorable and amusing Neko cat stickers on domain name. Find stickers for every mood and occasion, from funny 😹 to meme 🥸 to newest 🚀 emojis."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://consolelabs.github.io/neko-emoji-page/"
        />
        <meta property="og:title" content="Neko Sticker • Consolelabs" />
        <meta
          property="og:description"
          content="Discover a treasure trove of adorable and amusing Neko cat stickers on domain name. Find stickers for every mood and occasion, from funny 😹 to meme 🥸 to newest 🚀 emojis."
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
        <meta property="twitter:title" content="Neko Sticker • Consolelabs" />
        <meta
          property="twitter:description"
          content="Discover a treasure trove of adorable and amusing Neko cat stickers on domain name. Find stickers for every mood and occasion, from funny 😹 to meme 🥸 to newest 🚀 emojis."
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
