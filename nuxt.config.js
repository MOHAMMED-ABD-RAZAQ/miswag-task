export default {
  // Disabled for development
  ssr: false,

  generate: {
    fallback: true,
  },

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Misuag-Task',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/mock', mode: 'client' },
    '@/plugins/axios.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    middleware: 'skelton'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
