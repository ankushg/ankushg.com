import {
  CollectionEntry,
  defineCollection,
  getCollection,
  z,
} from 'astro:content'

// https://docs.astro.build/en/guides/content-collections/

const oldTemplateHeader = z
  .object({
    actions: z
      .array(
        z.object({
          icon: z.string().optional(),
          label: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    teaser: z.string().optional(),
    teaser_caption: z.string().optional(),
    overlay_image: z.string().optional(),
    caption: z.string().optional(),
    og_image: z.string().optional(),
  })
  .optional()

const oldTemplateFrontmatter = z.object({
  title: z.string(),
  link: z.string().optional(),
  description: z.string().optional(),
  excerpt: z.string().optional(),
  categories: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  // Transform string to Date object
  date: z.coerce.date(),
  feature: z.boolean().optional(),
  header: oldTemplateHeader,
  permalink: z.string().optional(),
  slug: z.string().optional(),
  accolades: z.string().array().optional(),
})

const baseFrontMatter = oldTemplateFrontmatter.extend({
  cta: z.string().default('Read more'),
})

function convertPermalinkToSlug(
  permalink: string | undefined,
  collectionName: string
) {
  const regex = new RegExp(`/?${collectionName}/?`)
  return permalink?.replace(regex, '')
}

const articleFrontmatterSchema = baseFrontMatter

const posts = defineCollection({
  slug: ({ defaultSlug, collection, data }) => {
    return (
      convertPermalinkToSlug(data.permalink, collection) ||
      data.slug ||
      defaultSlug
    )
  },
  schema: articleFrontmatterSchema,
})

export type ArticleContentItem = CollectionEntry<'posts'>
export async function getAllArticles(): Promise<ArticleContentItem[]> {
  return (await getCollection('posts')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )
}

const projectFrontmatterSchema = baseFrontMatter
const projects = defineCollection({
  slug: ({ defaultSlug, collection, data }) => {
    return (
      convertPermalinkToSlug(data.permalink, collection) ||
      data.slug ||
      defaultSlug
    )
  },
  schema: projectFrontmatterSchema,
})
export async function getAllProjects(): Promise<ProjectContentItem[]> {
  return (await getCollection('projects')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )
}

export type ProjectContentItem = CollectionEntry<'projects'>

const speakingFrontmatterSchema = baseFrontMatter.extend({
  event: z.string(),
})
const speaking = defineCollection({
  slug: ({ defaultSlug, collection, data }) => {
    return (
      convertPermalinkToSlug(data.permalink, collection) ||
      data.slug ||
      defaultSlug
    )
  },
  // Type-check frontmatter using a schema
  schema: speakingFrontmatterSchema,
})
export type SpeakingAppearanceContentItem = CollectionEntry<'speaking'>
export async function getAllAppearances(): Promise<
  SpeakingAppearanceContentItem[]
> {
  return (await getCollection('speaking')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )
}
export const collections = { posts, projects, speaking }

export type ContentItem =
  | ArticleContentItem
  | SpeakingAppearanceContentItem
  | ProjectContentItem

export async function getAllItems(featuredOnly = false) {
  const posts = await getCollection('posts')
  const speaking = await getCollection('speaking')
  const projects = await getCollection('projects')

  const merged: ContentItem[] = [...posts, ...speaking, ...projects]

  return merged
    .filter((i) => {
      if (featuredOnly) {
        return i.data.feature
      }
      return true
    })
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}
