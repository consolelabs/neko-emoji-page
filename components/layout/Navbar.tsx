import InstallButton, { installContentMenus } from '@components/InstallButton'
import ArrowLink from '@components/icons/ArrowLink'
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
import Link from 'next/link'

const shareItems = [
  <Button
    variant="ghost"
    color="neutral"
    className="!flex !justify-start !font-medium !text-zinc-800"
    key="ntf-link-btn"
    as="a"
    href={NekoNFT}
    target="_blank"
  >
    NFT <ArrowLink className="w-4 h-4" />
  </Button>,
  // <Button
  //   variant="ghost"
  //   color="neutral"
  //   className="!flex !justify-start !font-medium !text-zinc-800"
  //   key="wallet-link-btn"
  //   as="a"
  //   href="#"
  //   target="_blank"
  // >
  //   Wallet <ArrowLink className="w-4 h-4" />
  // </Button>,
  // <Button
  //   variant="ghost"
  //   color="neutral"
  //   className="!flex !justify-start !font-medium !text-zinc-800"
  //   key="shop-link-btn"
  //   as="a"
  //   href={NekoShop}
  //   target="_blank"
  // >
  //   Shop <ArrowLink className="w-4 h-4" />
  // </Button>,
  <Button
    as="a"
    variant="ghost"
    color="neutral"
    className="!flex !justify-start !font-medium !text-zinc-800"
    key="gallery-link-btn"
    href="#gallery"
  >
    Gallery
  </Button>,
  <Button
    as="a"
    href="#about"
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
    className="!p-0 !text-zinc-800 rounded-none shadow-none"
    key="install-accordion"
    defaultValue={['1']}
  >
    <AccordionItem value="1">
      <AccordionTrigger
        // asChild
        wrapperClassName="!py-3 !px-4"
        className="text-sm !font-medium !text-zinc-800"
      >
        Install
      </AccordionTrigger>
      <AccordionContent className="gap-1">
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
    <div
      id="navbar"
      className="fixed top-0 z-40 w-full bg-white shadow lg:sticky"
    >
      <TopBar
        className="border-none"
        leftSlot={
          <Link
            href=""
            className="inline-flex gap-3 justify-start items-center h-10"
          >
            <div className="flex justify-center items-center w-10 h-10">
              <img className="w-10 h-10" src="images/logo.png" alt="" />
            </div>
            <Typography className="text-base font-black leading-normal uppercase">
              cyber neko
            </Typography>
          </Link>
        }
        rightSlot={
          <>
            <MobileNav navItems={mobileNavItems} />
            <DesktopNav navItems={desktopNavItems} />
          </>
        }
      />
    </div>
  )
}
