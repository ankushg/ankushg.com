import rss from '@astrojs/rss'
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts'
import { getAllItems } from '../content/config'
import { hrefTo } from '../data/navigation'
import { renderMarkdownToHtml } from '../utils/renderMarkdown'

const content = await getAllItems()

const rssItems = await Promise.all(
  content.map(async (post) => {
    const descriptionHtml = await renderMarkdownToHtml(
      post.data.description ?? post.data.excerpt ?? ''
    )
    return {
      link: hrefTo(post),
      title: post.data.title,
      pubDate: post.data.date,
      description: descriptionHtml,
    }
  })
)

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: SITE_TITLE,
    // `<description>` field in output xml
    description: SITE_DESCRIPTION,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: rssItems,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/styles.xsl',
  })
