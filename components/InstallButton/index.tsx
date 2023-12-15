import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  List,
  MobileNavItem,
  Typography,
} from '@mochi-ui/core'
import { DiscordColored, TelegramColored } from '@mochi-ui/icons'

import {
  DiscordInstallLink,
  TelegramInstallLink,
  LINEInstallLink,
  WhatsappInstallLink,
} from '@configs/links'
import clsx from 'clsx'

export const installContentMenus = (
  <List
    data={[
      {
        label: 'Discord',
        iconLeft: <DiscordColored className="h-5 w-5 lg:h-6 lg:w-6" />,
        href: DiscordInstallLink,
      },
      {
        label: 'Telegram',
        iconLeft: <TelegramColored className="h-5 w-5 lg:h-6 lg:w-6" />,
        href: TelegramInstallLink,
      },
      {
        label: 'Line',
        iconLeft: (
          <img className="h-5 w-5 lg:h-6 lg:w-6" alt="" src="images/line.svg" />
        ),
        href: LINEInstallLink,
      },
      {
        label: 'Whatsapp',
        iconLeft: (
          <img
            className="h-5 w-5 lg:h-6 lg:w-6"
            alt=""
            src="images/whatsapp.svg"
          />
        ),
        href: WhatsappInstallLink,
      },
    ]}
    renderItem={(item: MobileNavItem, index) => {
      if (item?.component) return item?.component

      return (
        <Button
          variant="ghost"
          color="neutral"
          className="flex w-full !justify-start !text-base px-2 py-2.5"
          onClick={item?.onClick}
          key={index}
          as="a"
          href={item?.href}
          target="_blank"
        >
          {item?.iconLeft && <span className="text-xl">{item?.iconLeft}</span>}
          <Typography level="p6" className="!text-sm font-medium">
            {item?.label}
          </Typography>
        </Button>
      )
    }}
  />
)

export default function InstallButton({
  title = 'Install',
  align = 'end',
  size = 'md',
  className,
}: {
  children?: React.ReactNode
  className?: string
  title?: React.ReactNode
  align?: 'start' | 'center' | 'end'
  size?: 'sm' | 'md' | 'lg'
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={clsx(
            'flex items-center !bg-[#25D366] hover:!bg-[#25D366] hover:bg-opacity-70 rounded-md',
            className,
          )}
          color="neutral"
          type="button"
          size={size}
        >
          <div className="!text-sm font-medium text-white flex items-center justify-center">
            {title || 'Install'}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="max-w-[256px]">
        {installContentMenus}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
