import { Footer as MochiFooter } from '@mochi-ui/core'
import { Discord, Telegram, X } from '@mochi-ui/icons'
import {
  DiscordInstallLink,
  TelegramInstallLink,
  LINEInstallLink,
  WhatsappInstallLink,
  ConsolelabsURL,
  NekoNFT,
  NekoShop,
  WagmiConics,
} from '@configs/links'

export default function Footer() {
  return (
    <MochiFooter
      copyrightText="Copyright © 2023 Console Labs, All rights reserved"
      logo={<img className="h-14 w-14" alt="" src="images/logo-grid.png" />}
      nav={[
        {
          title: 'Install',
          links: [
            {
              href: DiscordInstallLink,
              text: 'Discord',
              newTab: true,
            },
            {
              href: TelegramInstallLink,
              text: 'Telegram',
              newTab: true,
            },
            {
              href: LINEInstallLink,
              text: 'LINE',
              newTab: true,
            },
            {
              href: WhatsappInstallLink,
              text: 'Whatsapp',
              newTab: true,
            },
          ],
        },
        {
          title: 'Products',
          links: [
            {
              href: NekoNFT,
              text: 'NFT',
              newTab: true,
            },
            {
              href: '#',
              text: 'Wallet',
              newTab: true,
            },
            {
              href: NekoShop,
              text: 'Shop',
              newTab: true,
            },
            {
              href: WagmiConics,
              text: 'Comic',
              newTab: true,
            },
          ],
        },
        {
          title: 'Resources',
          links: [
            {
              href: '#gallery',
              text: 'Gallery',
              newTab: true,
            },
            {
              href: '#about',
              text: 'About',
              newTab: true,
            },
            {
              href: ConsolelabsURL,
              text: 'Console Labs',
              newTab: true,
            },
          ],
        },
      ]}
      social={[
        {
          Icon: function noRefCheck() {
            return <img alt="" src="images/consolelabs-logo.svg" />
          },
          href: ConsolelabsURL,
          title: 'Console Labs',
          // @ts-ignore
          newTab: true,
        },
        {
          Icon: () => <X />,
          href: 'https://twitter.com/console_labs',
          title: 'X',
          // @ts-ignore
          newTab: true,
        },
        {
          Icon: () => <Discord />,
          href: '#',
          title: 'Discord',
          // @ts-ignore
          newTab: true,
        },
        {
          Icon: () => <Telegram />,
          href: '#',
          title: 'Telegram',
          // @ts-ignore
          newTab: true,
        },
      ]}
    />
  )
}
