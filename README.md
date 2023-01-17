# Astro Content Collections (Experimental)

---

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)



## TODO

- Components

  - [x] Button
  - [x] Card
  - [x] Container
  - [x] Footer
  - [x] Header
    - [ ] Mobile Nav is React still. Also not working. Maybe this <https://github.com/surjithctly/astro-navbar#readme> or DaisyUI?
    - [ ] scroll animations
  - [x] Prose
  - [x] Section
  - [x] SimpleLayout => in `layouts/SimpleLayout`
    - wrapped in `BaseLayout`
    - handles `intro` with a named slot OR prop
  - [x] ArticleLayout => in `layouts/ArticleLayout`
    - wrapped in `BaseLayout`
    - [ ] not handling RSS feeds
  - [ ] SocialIcons

- Pages
  - [x] `_app` => layouts/HeaderFooterLayout.astro
    - [ ] no "previous path" handling
  - [x] `_document` => layouts/BaseLayout.astro
  - [x] about
  - [ ] index
    - [ ] only featured items, but mix types?
    - [ ] replace photos
    - [ ] icons not styled correctly?
    - [x] newsletter component
    - [x] resume component
    - [x] photo gallery component
    - [x] list of articles
    - [x] main page
  - [x] projects
  - [xs] articles
    - [x] index
    - [x] post
  - [x] speaking
  - [ ] thank-you
  - [x] uses
- Behavior
  - [ ] scrolling behavior for header
  - [ ] enable newsletter
- [ ] homepage
  - [ ] icons need diff color depending on dark/not-dark
- Content
  - preview cards
    - [ ] featured image
    - [ ] cta?
    - [ ] link posts?
  - articles
    - [ ] featured image
    - [ ] show description
    - [ ] admonitions: <https://discord.com/channels/830184174198718474/1056930016459489320>
    - [ ] embeds
      - [ ] include figure
      - [ ] vimeo embed
      - [ ] youtube embed
    - [ ] ctas
  - formatting
    - [ ] list item formatting (about page, articles)
    - [ ] links (cards, articles)
  - [ ] extract page contents to mdx
    - [ ] about
  - [ ] images
  - [ ] canonical urls 
    - [ ] esp link psots
  - [ ] RSS feeds
    - [ ] pubDate
    - [ ] excerpt => description
  - [ ] sitemap
  - [ ] SEO tags <https://github.com/jonasmerlin/astro-seo#readme> <https://github.com/codiume/orbit>
  - [ ] compare sitemaps
- [ ] cleanup
  - [ ] excerpt => description

---

This demos our Blog Starter using **[the experimental Content Collections API.](https://docs.astro.build/en/guides/content-collections/)**

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-content)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/with-content)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   └── content/
│       └── blog/
│           ├── first.md
│           └── second.md
│       └── config.ts
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

`src/content/` contains "collections" of related Markdown and MDX documents. Astro will generate a `getCollection` function to retrieve posts from `src/content/`, and type-check your frontmatter using an optional schema (see `src/content/config.ts`).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit
