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
      className="!items-start"
      copyrightText={`Copyright © ${new Date().getFullYear()} Console Labs, All rights reserved`}
      logo={<img className="w-14 h-14" alt="" src="images/logo-grid.png" />}
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
              text: 'WhatsApp',
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
                <div className="flex justify-start items-center">
                  NFT <ArrowLink className="w-4 h-4" />
                </div>
              ),
              newTab: true,
            },
            // {
            //   href: '#',
            //   // @ts-ignore
            //   text: (
            //     <div className="flex justify-start items-center">
            //       Wallet <ArrowLink className="w-4 h-4" />
            //     </div>
            //   ),
            //   newTab: true,
            // },
            // {
            //   href: NekoShop,
            //   newTab: true,
            //   // @ts-ignore
            //   text: (
            //     <div className="flex justify-start items-center">
            //       Shop <ArrowLink className="w-4 h-4" />
            //     </div>
            //   ),
            // },
            {
              href: WagmiConics,
              // @ts-ignore
              text: (
                <div className="flex justify-start items-center">
                  Comic <ArrowLink className="w-4 h-4" />
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
            return (
              <img
                alt=""
                src="images/consolelabs-logo.svg"
                className="w-5 h-5"
              />
            )
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
