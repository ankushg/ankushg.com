const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

function disableTransitionsTemporarily() {
  document.documentElement.classList.add('[&_*]:!transition-none')
  window.setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none')
  }, 0)
}

function isSystemDarkModeEnabled() {
  return darkModeMediaQuery.matches
}

export function toggleDarkMode() {
  console.log('toggling dark mode')
  disableTransitionsTemporarily()

  const isDarkMode = document.documentElement.classList.toggle('dark')

  if (isDarkMode === isSystemDarkModeEnabled()) {
    delete window.localStorage.isDarkMode
  } else {
    window.localStorage.isDarkMode = isDarkMode
  }
}

function applyDarkModeSettingsWithoutTransitions() {
  disableTransitionsTemporarily()
  applyDarkModeSettings()
}
export function applyDarkModeSettings() {
  const isSystemDarkMode = isSystemDarkModeEnabled()

  // either we are forced into dark mode, or system dark mode is enabled and we have no forced mode
  const isDarkMode =
    window.localStorage.isDarkMode === 'true' ||
    (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

  if (isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  if (isDarkMode === isSystemDarkMode) {
    delete window.localStorage.isDarkMode
  }
}

export function listenForDarkModeChanges() {
  darkModeMediaQuery.addEventListener(
    'change',
    applyDarkModeSettingsWithoutTransitions
  )
  window.addEventListener('storage', applyDarkModeSettingsWithoutTransitions)
}
