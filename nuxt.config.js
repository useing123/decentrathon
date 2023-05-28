export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app1',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  router: {
    extendRoutes(routes, resolve) {
      // Add custom routes
      routes.push(
        {
          name: 'block-transactions',
          path: '/block-transactions',
          component: 'components/BlockTransactions.vue'
        },
        {
          name: 'hashrate',
          path: '/hashrate',
          component: 'components/Hashrate.vue'
        },
        {
          name: 'miner-pools',
          path: '/miner-pools',
          component: 'components/MinerPools.vue'
        },
        {
          name: 'confirmation-count',
          path: '/confirmation-count',
          component: 'components/ConfirmationCount.vue'
        },
        {
          name: 'average-fees',
          path: '/average-fees',
          component: 'components/AverageFees.vue'
        },
        {
          name: 'addresses',
          path: '/addresses',
          component: 'components/Addresses.vue'
        },
        {
          name: 'network-nodes',
          path: '/network-nodes',
          component: 'components/NetworkNodes.vue'
        }
      );
    }
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
