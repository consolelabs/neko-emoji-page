import { ConsolelabsURL, NekoNFT, NekoShop, WagmiConics } from '@configs/links'
import { Typography } from '@mochi-ui/core'
import { InfoCircleOutlined } from '@mochi-ui/icons'

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
    <div id="about" className="relative bg-white px-5 lg:px-20 py-12">
      <div className="relative z-0 max-w-7xl mx-auto space-y-5">
        <div className="justify-between items-center gap-3 inline-flex w-full">
          <img
            alt="icon info"
            src="images/info.svg"
            className="h-6 w-6 lg:h-8 lg:w-8"
          />
          <Typography
            level="h4"
            className="flex-1 !text-zinc-900 !font-medium !text-2xl lg:text-4xl"
          >
            More about Neko
          </Typography>
          <a
            className="rounded-lg justify-center items-center gap-2 flex"
            href={ConsolelabsURL}
          >
            <Typography level="p4" className="!font-medium hidden md:block">
              View all
            </Typography>
            <img
              className="w-5 h-5 relative"
              alt=""
              src="images/arrow-link.svg"
            />
          </a>
        </div>
        <Typography
          level="p5"
          className="!font-normal !text-base !text-zinc-800"
        >
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <a
              key={idx}
              className="p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex overflow-hidden"
              href={product.href}
            >
              <img
                className="w-20 h-20 object-cover"
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
    </div>
  )
}
