import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  buildModules: [],
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_KEY }]
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  }
})
