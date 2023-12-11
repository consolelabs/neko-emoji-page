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
} from '@configs/install-links'

export const installContentMenus = (
  <List
    data={[
      {
        label: 'Discord',
        iconLeft: <DiscordColored />,
        href: DiscordInstallLink,
      },
      {
        label: 'Telegram',
        iconLeft: <TelegramColored />,
        href: TelegramInstallLink,
      },
      {
        label: 'Line',
        iconLeft: <img className="h-6 w-6" alt="" src="images/line.svg" />,
        href: LINEInstallLink,
      },
      {
        label: 'Whatsapp',
        iconLeft: <img className="h-6 w-6" alt="" src="images/whatsapp.svg" />,
        href: WhatsappInstallLink,
      },
    ]}
    renderItem={(item: MobileNavItem, index) => {
      if (item?.component) return item?.component

      return (
        <Button
          variant="link"
          color="neutral"
          className="flex w-full !justify-start !text-base px-2 py-3 bg-background-surface !text-neutral-800 !font-normal hover:!text-black !h-max"
          onClick={item?.onClick}
          key={index}
        >
          {item?.href ? (
            <a
              className="flex focus:outline-none items-center flex-1 gap-3.5"
              href={item?.href}
            >
              {item?.iconLeft && (
                <span className="text-xl">{item?.iconLeft}</span>
              )}
              <Typography level="p6" className="!text-sm font-medium">
                {item?.label}
              </Typography>
            </a>
          ) : (
            <div className="flex focus:outline-none items-center flex-1 gap-3.5">
              {item?.iconLeft && (
                <span className="text-xl">{item?.iconLeft}</span>
              )}
              <Typography level="p6" className="!text-sm font-medium">
                {item?.label}
              </Typography>
            </div>
          )}
        </Button>
      )
    }}
  />
)

export default function InstallButton({
  title = 'Install',
  align = 'end',
  size = 'md',
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
          className="flex items-center bg-[#25D366] hover:bg-[#25D366] hover:bg-opacity-70"
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
