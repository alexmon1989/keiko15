module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'keiko15',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#93931e' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
  ],
  css: [
    '~/assets/css/main.scss'
  ],
  plugins: [
    '~plugins/vuebar',
    '~plugins/vuecarousel',
  ],
  fontawesome: {
    imports: [
      {
        set: '~fortawesome/fontawesome-free-solid'
      },
      {
        set: '~fortawesome/free-brands-svg-icons',
        icons: ['faVk', 'faFacebook', 'faInstagram']
      },
    ],
  },
};
