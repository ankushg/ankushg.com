import type { ImageRef } from '@/mytypes'

export interface SocialLinkContent {
  href: string
  text: string
  iconName: ImageRef
}

export const LinkedInSocialLink = {
  href: 'https://linkedin.com/in/ankushmg',
  text: 'Connect on LinkedIn',
  iconName: 'cib:linkedin',
}

export const RssSocialLink = {
  href: 'https://ankushg.com/feed',
  text: 'Subscribe via RSS',
  iconName: 'cib:rss',
}

export const socialLinkItems: SocialLinkContent[] = [
  {
    href: 'https://twitter.com/ankushg',
    text: 'Follow on Twitter',
    iconName: 'cib:twitter',
  },
  {
    href: 'https://github.com/ankushg',
    text: 'See my code on Github',
    iconName: 'cib:github',
  },
  LinkedInSocialLink,
  RssSocialLink,
]
