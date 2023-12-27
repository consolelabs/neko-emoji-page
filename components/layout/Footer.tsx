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
import ArrowLink from '@components/icons/ArrowLink'

export default function Footer() {
  return (
    <MochiFooter
      className="!items-start lg:!px-20"
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
              // @ts-ignore
              text: (
                <div className="flex items-center justify-start">
                  NFT <ArrowLink className="h-4 w-4" />
                </div>
              ),
              newTab: true,
            },
            {
              href: '#',
              // @ts-ignore
              text: (
                <div className="flex items-center justify-start">
                  Wallet <ArrowLink className="h-4 w-4" />
                </div>
              ),
              newTab: true,
            },
            {
              href: NekoShop,
              newTab: true,
              // @ts-ignore
              text: (
                <div className="flex items-center justify-start">
                  Shop <ArrowLink className="h-4 w-4" />
                </div>
              ),
            },
            {
              href: WagmiConics,
              // @ts-ignore
              text: (
                <div className="flex items-center justify-start">
                  Comic <ArrowLink className="h-4 w-4" />
                </div>
              ),
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
