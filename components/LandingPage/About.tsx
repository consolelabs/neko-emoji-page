import { Typography } from '@mochi-ui/core'
import { InfoCircleOutlined } from '@mochi-ui/icons'
import { truncate } from '@utils/string'

const products = [
  {
    image: 'images/neko-nft.png',
    title: 'Neko NFT 🐱',
    description: '6,666 uniquely generated collection on the Fantom',
  },
  {
    image: 'images/neko-wallet.png',
    title: 'Wallet 👛',
    description:
      'Lorem ipsum dolor sit amet consectetur. Pulvinar dapibus eget fringilla facilisis. Ultrices ultricies urna a faucibus libero aliquam ultrices. Urna sit nunc amet eu dictum purus volutpat rutrum. A venenatis sit quis mauris risus dictum lobortis pulvinar. Consequat scelerisque sed eget viverra est faucibus. Vitae ac quis habitant cursus sed nec.',
  },
  {
    image: 'images/neko-shop.png',
    title: 'Shop 👕',
    description:
      'Lorem ipsum dolor sit amet consectetur. Pulvinar dapibus eget fringilla facilisis. Ultrices ultricies urna a faucibus libero aliquam ultrices. Urna sit nunc amet eu dictum purus volutpat rutrum. A venenatis sit quis mauris risus dictum lobortis pulvinar. Consequat scelerisque sed eget viverra est faucibus. Vitae ac quis habitant cursus sed nec.',
  },
  {
    image: 'images/neko-comic.png',
    title: 'Webcomics  🐈‍⬛',
    description:
      'Lorem ipsum dolor sit amet consectetur. Pulvinar dapibus eget fringilla facilisis. Ultrices ultricies urna a faucibus libero aliquam ultrices. Urna sit nunc amet eu dictum purus volutpat rutrum. A venenatis sit quis mauris risus dictum lobortis pulvinar. Consequat scelerisque sed eget viverra est faucibus. Vitae ac quis habitant cursus sed nec.',
  },
]

export default function About() {
  return (
    <div id="about" className="relative bg-white px-5 py-12">
      <div className="relative z-0 max-w-7xl mx-auto space-y-6">
        <div className="justify-between items-center gap-4 inline-flex w-full">
          <InfoCircleOutlined className="h-6 w-6" />
          <Typography level="h5" className="flex-1">
            More about Neko
          </Typography>
          <div className="rounded-lg justify-center items-center gap-2 flex">
            <Typography level="p4" className="hidden md:block">
              View all
            </Typography>
            <img
              className="w-5 h-5 relative"
              alt=""
              src="images/arrow-link.svg"
            />
          </div>
        </div>
        <Typography>
          <span className="font-bold">Cyber Neko </span>
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
            <div
              key={idx}
              className="p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex overflow-hidden"
            >
              <img
                className="w-20 h-20 object-cover"
                src={product.image}
                alt=""
              />
              <Typography level="h6">{product.title}</Typography>
              <Typography level="p4" className="text-zinc-900">
                {truncate(product.description, 50)}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
