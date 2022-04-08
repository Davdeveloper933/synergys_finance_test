const debug = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  styleResources: {
    scss: [
      "@/assets/scss/index.scss",
    ]
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Capella Finance',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {property: 'og:type', content: 'website'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: "@/assets/scss/index.scss",
      lang: "scss"
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {mode: 'all', src: '~/plugins/api-plugin'},
    {mode: 'all', src: '~/plugins/utils-plugin'},
    {mode: 'client', src: '~/plugins/vue-youtube'},
    {mode: 'client', src: '~plugins/vue-js-modal.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: debug ? "http://localhost:1337" : 'https://capella.finance',
    //baseURL: 'https://capella.finance',
    // baseURL: 'http://localhost:1337',
    withCredentials: !debug,
    debug,},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
