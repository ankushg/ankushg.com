import type { ImageRef } from '../mytypes'

export interface SocialLinkContent {
  href: string
  text: string
  iconName: ImageRef
}

export const TwitterSocialLink: SocialLinkContent = {
  href: '#',
  text: 'Follow on Twitter',
  iconName: 'fe:twitter',
}
export const socialLinkItems: SocialLinkContent[] = [
  TwitterSocialLink,
  TwitterSocialLink,
  TwitterSocialLink,
  TwitterSocialLink,
]
