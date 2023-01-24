import { SITE_URL } from '@/consts'
import type { ContentItem } from '@content/config'
import type { SocialLinkContent } from '@data/SocialLinks'

export interface HrefContainer {
  href: string
}

export type NavItem = {
  name: string
  href: string
}

export const AboutNavItem: NavItem = { name: 'About', href: '/about' }
export const ArticlesNavItem: NavItem = { name: 'Writing', href: '/posts' }
export const ProjectsNavItem: NavItem = { name: 'Building', href: '/projects' }
export const SpeakingNavItem: NavItem = { name: 'Speaking', href: '/speaking' }
export const UsesNavItem: NavItem = { name: 'Uses', href: '/uses' }
export const ThankYouNavItem: NavItem = {
  name: 'Thank You',
  href: '/thank-you',
}

export const navItems: NavItem[] = [
  AboutNavItem,
  ArticlesNavItem,
  ProjectsNavItem,
  SpeakingNavItem,
  UsesNavItem,
]

export type NavigationTarget = ContentItem | HrefContainer
export function hrefTo(target: NavigationTarget, absolute = false): string {
  let href
  if ('href' in target) {
    href = target.href
  } else {
    href = target.data.link ?? `/${target.collection}/${target.slug}`
  }

  if (!absolute) {
    return href
  }

  if (href.startsWith('http')) {
    return href
  } else {
    return `${SITE_URL}${href}`
  }
}
