import { useEffect, useState } from 'react'

// Reads the theme set by the inline script in index.html, keeps it in
// state, and persists changes to localStorage.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  const toggleTheme = () =>
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
