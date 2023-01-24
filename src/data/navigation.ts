import { SITE_URL } from '@/consts'
import type { ContentItem } from '@content/config'
import type { SocialLinkContent } from '@data/SocialLinks'

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

export type NavigationTarget = NavItem | ContentItem
export function hrefTo(target: NavigationTarget): string {
  if ('href' in target) {
    return target.href
  }

  return target.data.link ?? `/${target.collection}/${target.slug}`
}
