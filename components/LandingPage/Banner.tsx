import InstallButton from '@components/InstallButton'
import { NekoShop } from '@configs/links'
import { Button, Typography } from '@mochi-ui/core'
import Link from 'next/link'

export default function Banner() {
  return (
    <div
      id="neko-emoji-banner"
      className="overflow-visible relative z-10 py-20 bg-stone-50"
    >
      <div className="flex flex-wrap justify-center items-center landing-container">
        <div className="order-2 space-y-4 w-full lg:order-1 lg:w-5/12">
          <Typography
            level="h1"
            className="text-zinc-900 !text-2xl lg:!text-7xl"
          >
            Neko Sticker
          </Typography>
          <Typography level="p4" className="text-zinc-800">
            Discover a treasure trove of adorable and amusing Neko cat stickers
            on{' '}
            <Link href="/" className="font-semibold">
              sticker.console.so
            </Link>
            . Find stickers for every mood and occasion, from funny 😹 to meme
            🥸 to newest 🚀 emojis.
            <br />
            <br />
            Install them on your devices and let Neko&apos;s playful personality
            add a touch of whimsy to your digital life.
          </Typography>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <InstallButton
                className="w-full lg:w-auto"
                align="start"
                size="lg"
                title={
                  <>
                    <img
                      className="mr-2 w-5 h-5"
                      alt=""
                      src="images/arrow-down-square.svg"
                    />
                    <span>Install</span>
                    <span className="hidden ml-1 lg:block">this pack</span>
                  </>
                }
              />
            </div>
            <Button
              as="a"
              className="block rounded-md lg:hidden"
              type="button"
              variant="outline"
              color="white"
              size="lg"
              href={NekoShop}
            >
              View Shop
            </Button>
          </div>
        </div>
        <div className="order-1 w-full lg:order-2 lg:w-7/12">
          <img
            src="images/neko-pack.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
