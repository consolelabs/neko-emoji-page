import { Footer as MochiFooter } from '@mochi-ui/core'
import { Discord, Telegram, X } from '@mochi-ui/icons'
import {
  DiscordInstallLink,
  TelegramInstallLink,
  LINEInstallLink,
  WhatsappInstallLink,
} from '@configs/install-links'

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
              href: '/',
              text: 'NFT',
            },
            {
              href: '/',
              text: 'Wallet',
            },
            {
              href: '/',
              text: 'Shop',
            },
            {
              href: '/',
              text: 'Comic',
            },
          ],
        },
        {
          title: 'Resources',
          links: [
            {
              href: '/#gallery',
              text: 'Gallery',
            },
            {
              href: '/#about',
              text: 'About',
            },
            {
              href: 'https://console.so',
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
          href: 'https://console.so',
          title: 'Console Labs',
        },
        {
          Icon: () => <X />,
          href: 'https://twitter.com/console_labs',
          title: 'X',
        },
        {
          Icon: () => <Discord />,
          href: '/',
          title: 'Discord',
        },
        {
          Icon: () => <Telegram />,
          href: '/',
          title: 'Telegram',
        },
      ]}
    />
  )
}
