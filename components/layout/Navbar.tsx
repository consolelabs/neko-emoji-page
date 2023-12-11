import InstallButton, { installContentMenus } from '@components/InstallButton'
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

const mobileNavItems = [
  <Button
    variant="link"
    className="!flex"
    onClick={() => alert('API')}
    key="ntf-link-btn"
  >
    <Typography level="p6" className="!text-sm font-medium">
      NFT
    </Typography>
  </Button>,
  <Button variant="link" className="!flex" key="wallet-link-btn">
    <Typography level="p6" className="!text-sm font-medium">
      Wallet
    </Typography>
  </Button>,
  <Button variant="link" className="!flex" key="shop-link-btn">
    <Typography level="p6" className="!text-sm font-medium">
      Shop
    </Typography>
  </Button>,
  <Button
    as="a"
    variant="link"
    className="!flex !justify-start"
    key="gallery-link-btn"
    href="/#gallery"
  >
    <Typography level="p6" className="!text-sm font-medium">
      Gallery
    </Typography>
  </Button>,
  <Button
    as="a"
    href="/#about"
    variant="link"
    className="!flex !justify-start"
    key="about-link-btn"
  >
    <Typography level="p6" className="!text-sm font-medium">
      About
    </Typography>
  </Button>,
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
  <Button
    variant="link"
    className="!flex"
    onClick={() => alert('API')}
    key="ntf-link-btn"
  >
    <Typography level="p6" className="!text-sm font-medium">
      NFT
    </Typography>
  </Button>,
  <Button variant="link" className="!flex" key="wallet-link-btn">
    <Typography level="p6" className="!text-sm font-medium">
      Wallet
    </Typography>
  </Button>,
  <Button variant="link" className="!flex" key="shop-link-btn">
    <Typography level="p6" className="!text-sm font-medium">
      Shop
    </Typography>
  </Button>,
  <Button
    as="a"
    variant="link"
    className="!flex"
    key="gallery-link-btn"
    href="/#gallery"
  >
    <Typography level="p6" className="!text-sm font-medium">
      Gallery
    </Typography>
  </Button>,
  <Button
    as="a"
    href="/#about"
    variant="link"
    className="!flex"
    key="about-link-btn"
  >
    <Typography level="p6" className="!text-sm font-medium">
      About
    </Typography>
  </Button>,
  <InstallButton key="install-link-btn" title="Install" />,
]

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 shadow">
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
