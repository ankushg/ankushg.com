import { renderMarkdown } from '@astrojs/markdown-remark'

const markdownRendererOptions = {
  contentDir: new URL('file://'),
}

export async function renderMarkdownToHtml(markdown: string): Promise<string> {
  return await renderMarkdown(markdown, markdownRendererOptions).then(
    (m) => m.code
  )
}
