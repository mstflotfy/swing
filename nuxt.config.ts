// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '/assets/css/color.css',
    '/assets/css/text.css',
    '/assets/css/resets.css'
  ],
  modules: [
    '@nuxt/image',
  ],
  image: {
    inject: true,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    staticFilename: '/_nuxt/[name].[hash][ext]',
    provider: 'ipx'
  }
})
