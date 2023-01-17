function normalize(href: string) {
  return href
    .split('/')
    .filter((s) => s !== '')
    .join('/')
}

export function isCurrentPath(requestUrl: string, href: string): boolean {
  const currentPath = new URL(requestUrl).pathname

  const isCurrentPath = normalize(href) === normalize(currentPath)
  return isCurrentPath
}

export function isPartOfCurrentPath(requestUrl: string, href: string): boolean {
  const currentPath = new URL(requestUrl).pathname

  const isPartOfCurrentPath = normalize(currentPath).includes(normalize(href))
  return isPartOfCurrentPath
}
