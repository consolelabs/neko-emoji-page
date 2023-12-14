import InstallButton from '@components/InstallButton'
import { NekoShop } from '@configs/links'
import { Button, Typography } from '@mochi-ui/core'

export default function Banner() {
  return (
    <div id="neko-emoji-banner" className="bg-stone-50 px-5 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-5/12 order-2 lg:order-1 space-y-4">
          <Typography
            level="h1"
            className="text-zinc-900 !text-2xl lg:!text-7xl"
          >
            Neko Sticker
          </Typography>
          <Typography level="p4" className="text-zinc-800">
            Discover a treasure trove of adorable and amusing Neko cat stickers
            on domain name. Find stickers for every mood and occasion, from
            funny 😹 to meme 🥸 to newest 🚀 emojis.
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
                      className="h-5 w-5 mr-2"
                      alt=""
                      src="images/arrow-down-square.svg"
                    />
                    <span>Install</span>
                    <span className="hidden lg:block ml-1">this pack</span>
                  </>
                }
              />
            </div>
            <Button
              as="a"
              className="block lg:hidden rounded-md"
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
        <div className="w-full lg:w-7/12 order-1 lg:order-2">
          <img
            src="images/neko-pack.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
