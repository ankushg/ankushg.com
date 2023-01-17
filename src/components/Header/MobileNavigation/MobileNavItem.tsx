import { Popover } from '@headlessui/react'
import type { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

export default function MobileNavItem({ href, children }: Props) {
  return (
    <li>
      <Popover.Button as="a" href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}
