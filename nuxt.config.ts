// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  site: {
    url: 'https://esraa-abuhalawa-site.vercel.app/', 
    name: 'Esraa Abuhalawa | Frontend Developer',
    description: 'Frontend Developer specializing in Vue.js and Angular. Futuristic, performant, and accessible web experiences.',
    defaultLocale: 'en',
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
  ],
  colorMode: {
    preference: 'system',   // default value, respects OS preference on first visit
    fallback: 'light',      // used if system preference can't be detected
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',        // no prefix, so class is just "dark" / "light"
    classSuffix: '',        // no "-mode" suffix — matches your current CSS
    storageKey: 'theme'     // reuse the same localStorage key you already have,                      // so existing users don't lose their saved preference
  },
  css: ['~/assets/main.css'],
  app: {
    head: {
      title: 'Portfolio | Esraa Abuhalawa',
      meta: [
        { name: 'description', content: 'Esraa Abuhalawa front end Developer Portfolio with futuristic design' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
