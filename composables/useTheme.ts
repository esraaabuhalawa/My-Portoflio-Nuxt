import { ref } from 'vue'

type Theme = 'dark' | 'light'
export const useTheme = () => {
    const theme = ref<Theme | null>(null) // ← null avoids false "no change" on init

    const applyTheme = (newTheme: Theme) => {
        if (process.client) {
            const html = document.documentElement
            html.classList.toggle('light', newTheme === 'light')
            html.classList.toggle('dark', newTheme === 'dark')
            localStorage.setItem('theme', newTheme)
        }
    }

    const initTheme = () => {
        if (process.client) {
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
        // ← No applyTheme call here; watcher handles it
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    // immediate: true ensures applyTheme fires on init too
    watch(theme, (newTheme) => {
        if (newTheme) applyTheme(newTheme)
    }, { immediate: true }) // ← covers the initTheme assignment reactively

    return { theme, toggleTheme, initTheme }
}