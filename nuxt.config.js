export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jednoŚladami Andersa - harcerska sztafeta rowerowa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Harcerska sztafeta rowerowa',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/global.scss'],

  styleResources: {
    scss: [
      `@/assets/css/variables.scss`,
      `@/assets/css/mixins.scss`,
      `@/assets/css/breakpoints.scss`,
      `@/assets/css/fonts.scss`,
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-snap'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtclub/feathericons',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-leaflet',
    [
      'wp-nuxt',
      {
        // TODO: use env variable as wordpress Url
        // endpoint: `${process.env.WORDPRESS_URL}/wp-json`,
        endpoint: `https://bikejamboree.pl/wp-json`,
      },
    ],
    [
      'vue-screen/nuxt',
      {
        sm: 0,
        md: 390,
        lg: 600,
        xl: 1440,
        xxl: 1920,
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pl',
      name: 'jednoŚladami Andersa',
      short_name: 'jednoŚladami Andersa',
      description: 'Harcerska sztafeta rowerowa szlakiem Armii Andersa',
      display: 'browser',
      theme_color: '#ca161aff',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    HOSTNAME: process.env.HOSTNAME,
    MAPBOX_KEY: process.env.MAPBOX_KEY,
  },
}
