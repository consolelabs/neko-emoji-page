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
            },
            {
              href: TelegramInstallLink,
              text: 'Telegram',
            },
            {
              href: LINEInstallLink,
              text: 'LINE',
            },
            {
              href: WhatsappInstallLink,
              text: 'Whatsapp',
            },
          ],
        },
        {
          title: 'Products',
          links: [
            {
              href: NekoNFT,
              text: 'NFT',
            },
            {
              href: '#',
              text: 'Wallet',
            },
            {
              href: NekoShop,
              text: 'Shop',
            },
            {
              href: WagmiConics,
              text: 'Comic',
            },
          ],
        },
        {
          title: 'Resources',
          links: [
            {
              href: '#gallery',
              text: 'Gallery',
            },
            {
              href: '#about',
              text: 'About',
            },
            {
              href: ConsolelabsURL,
              text: 'Console Labs',
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
        },
        {
          Icon: () => <X />,
          href: 'https://twitter.com/console_labs',
          title: 'X',
        },
        {
          Icon: () => <Discord />,
          href: '#',
          title: 'Discord',
        },
        {
          Icon: () => <Telegram />,
          href: '#',
          title: 'Telegram',
        },
      ]}
    />
  )
}
