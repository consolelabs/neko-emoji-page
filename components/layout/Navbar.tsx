import InstallButton, { installContentMenus } from '@components/InstallButton'
import { NekoNFT, NekoShop } from '@configs/links'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  DesktopNav,
  MobileNav,
  TopBar,
  Typography,
} from '@mochi-ui/core'

const shareItems = [
  <Button
    variant="ghost"
    color="neutral"
    className="!flex !justify-start !font-medium !text-zinc-800"
    key="ntf-link-btn"
    as="a"
    href={NekoNFT}
  >
    NFT
  </Button>,
  <Button
    variant="ghost"
    color="neutral"
    className="!flex !justify-start !font-medium !text-zinc-800"
    key="wallet-link-btn"
    as="a"
    href="#"
  >
    Wallet
  </Button>,
  <Button
    variant="ghost"
    color="neutral"
    className="!flex !justify-start !font-medium !text-zinc-800"
    key="shop-link-btn"
    as="a"
    href={NekoShop}
  >
    Shop
  </Button>,
  <Button
    as="a"
    variant="ghost"
    color="neutral"
    className="!flex !justify-start !font-medium !text-zinc-800"
    key="gallery-link-btn"
    href="/#gallery"
  >
    Gallery
  </Button>,
  <Button
    as="a"
    href="/#about"
    variant="ghost"
    color="neutral"
    className="!flex !justify-start !font-medium !text-zinc-800"
    key="about-link-btn"
  >
    About
  </Button>,
]

const mobileNavItems = [
  ...shareItems,
  <Accordion
    type="multiple"
    className="!p-0 !text-neutral-900 rounded-none shadow-none"
    key="install-accordion"
  >
    <AccordionItem value="1">
      <AccordionTrigger
        wrapperClassName="!py-3 !px-4"
        className="text-base !text-neutral-900"
      >
        Install
      </AccordionTrigger>
      <AccordionContent className="mt-4 !px-1 !py-0 gap-1">
        {installContentMenus}
      </AccordionContent>
    </AccordionItem>
  </Accordion>,
]

const desktopNavItems = [
  ...shareItems,
  <InstallButton key="install-link-btn" title="Install" />,
]

export default function Navbar() {
  return (
    <div className="w-full fixed lg:sticky top-0 shadow bg-white z-40">
      <div className="max-w-7xl mx-auto">
        <TopBar
          className="border-none"
          leftSlot={
            <div className="h-10 justify-start items-center gap-3 inline-flex">
              <div className="w-10 h-10 justify-center items-center flex">
                <img className="w-10 h-10" src="images/logo.png" alt="" />
              </div>
              <Typography className="text-base font-black uppercase leading-normal">
                cyber neko
              </Typography>
            </div>
          }
          rightSlot={
            <>
              <MobileNav navItems={mobileNavItems} />
              <DesktopNav navItems={desktopNavItems} />
            </>
          }
        />
      </div>
    </div>
  )
}
