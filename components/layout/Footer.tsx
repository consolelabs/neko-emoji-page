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
      className="!items-start"
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
            },
            {
              href: '#about',
              text: 'About',
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
        },
        {
          Icon: () => <X />,
          href: 'https://twitter.com/console_labs',
          title: 'X',
        },
        {
          Icon: () => <Discord />,
          href: 'https://discord.gg/JdYaxBmr5k',
          title: 'Discord',
        },
        {
          Icon: () => <Telegram />,
          href: TelegramInstallLink,
          title: 'Telegram',
        },
      ]}
    />
  )
}
