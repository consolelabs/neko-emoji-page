import { ConsolelabsURL, NekoNFT, NekoShop, WagmiConics } from '@configs/links'
import { Typography } from '@mochi-ui/core'

const products = [
  {
    image: 'images/neko-nft.png',
    title: 'Neko NFT 🐱',
    description: '6,666 uniquely generated collection on the Fantom',
    href: NekoNFT,
  },
  {
    image: 'images/neko-wallet.png',
    title: 'Wallet 👛',
    description:
      'The headless wallet manages the social accounts and crypto wallet.',
    href: '#',
  },
  {
    image: 'images/neko-shop.png',
    title: 'Shop 👕',
    description: 'Neko exclusive merch for the only-fan.',
    href: NekoShop,
  },
  {
    image: 'images/neko-comic.png',
    title: 'Webcomics  🐈‍⬛',
    description: "Financial stories and lesson around Neko's life.",
    href: WagmiConics,
  },
]

export default function About() {
  return (
    <div
      id="about"
      className="relative z-0 py-12 space-y-5 bg-white landing-block"
    >
      <div className="inline-flex gap-3 justify-between items-center w-full">
        <img
          alt="icon info"
          src="images/info.svg"
          className="w-6 h-6 lg:w-8 lg:h-8"
        />
        <Typography
          level="p"
          className="flex-1 !text-zinc-900 !font-medium !text-2xl lg:text-4xl"
        >
          More about Neko
        </Typography>
        <a
          className="flex gap-2 justify-center items-center rounded-lg"
          href={ConsolelabsURL}
          rel="noreferrer"
          target="_blank"
        >
          <Typography level="p4" className="!font-medium hidden md:block">
            View all
          </Typography>
          <img
            className="relative w-5 h-5"
            alt="view all"
            src="images/arrow-link.svg"
          />
        </a>
      </div>
      <Typography level="p5" className="!font-normal !text-base !text-zinc-800">
        <span className="font-bold">Cyber Neko</span>
        <span>, also known as </span>
        <span className="font-bold">Neko</span>
        <span>
          , is a yellow cat with big round eyes, a fluffy tail, and a small,
          slender body. It moves in a gentle and graceful way, as if it is
          gliding on water. Neko is a very cute cat, with adorable and
          mischievous expressions.
        </span>
      </Typography>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {products.map((product, idx) => (
          <a
            key={idx}
            className="inline-flex overflow-hidden flex-col gap-4 justify-start items-start p-6 rounded-xl border border-gray-200"
            href={product.href}
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="object-cover w-20 h-20"
              src={product.image}
              alt=""
            />
            <Typography level="p3" className="font-bold">
              {product.title}
            </Typography>
            <Typography level="p5" className="two-line-ellipsis">
              {product.description}
            </Typography>
          </a>
        ))}
      </div>
    </div>
  )
}
