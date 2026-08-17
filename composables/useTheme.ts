import { ref, watch } from 'vue'

type Theme = 'dark' | 'light'

// module-level state — created once, shared by every caller
const theme = ref<Theme | null>(null)
let initialized = false

const applyTheme = (newTheme: Theme) => {
  if (process.client) {
    const html = document.documentElement
    html.classList.toggle('light', newTheme === 'light')
    html.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }
}

const initTheme = () => {
  if (process.client && !initialized) {
    initialized = true
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      theme.value = saved
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = isDark ? 'dark' : 'light'
    }
  }
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

watch(theme, (newTheme) => {
  if (newTheme) applyTheme(newTheme)
}, { immediate: true })

export const useTheme = () => {
  return { theme, toggleTheme, initTheme }
}