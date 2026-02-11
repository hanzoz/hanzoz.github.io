// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-31',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/hanzoz.github.io/',
    buildAssetsDir: '/_nuxt/',
  }
})
