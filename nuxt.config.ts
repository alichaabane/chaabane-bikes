import { resolve } from 'pathe'

const isDev = process.env.NODE_ENV !== 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-05-30',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'm5qFjl26KF3L_CcBK0TzEpB1n7Mad3DO8jZ8T1KUOV4'
        }
      ]
    }
  },
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/sections', pathPrefix: false }
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/seo'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  // Work around a Nuxt/Vite resolution issue where `#app-manifest` may fail to resolve in dev.
  // Nuxt normally provides this virtual module; we point it directly at the generated dev manifest.
  vite: {
    resolve: {
      alias: isDev ? { '#app-manifest': resolve('.nuxt/manifest/meta/dev.json') } : {}
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    // Force default language to French (do not auto-detect browser language).
    detectBrowserLanguage: false,
    // Nuxt i18n v10 resolves paths relative to <rootDir>/i18n by default.
    // Keep our locale files in /locales while pointing i18n to them.
    langDir: '../locales',
    locales: [
      { code: 'fr', iso: 'fr-TN', name: 'Francais', file: 'fr.json' },
      { code: 'ar', iso: 'ar-TN', name: 'Arabic', file: 'ar.json', dir: 'rtl' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    vueI18n: '../i18n.config.ts'
  },
  site: {
    url: 'https://benchaabenbikes.example',
    name: 'Ben Chaaben BIKES',
    description: 'Vitrine premium : VTT, velos electriques, velos route et accessoires a Metlaoui.',
    defaultLocale: 'fr'
  },
  // nuxt-og-image (installed via @nuxtjs/seo). Disable runtime image generation to avoid unsigned URLs.
  ogImage: {
    zeroRuntime: true
  }
})
