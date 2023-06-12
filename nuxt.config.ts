// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  buildModules: ['@nuxt/image'],
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
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  }
})
