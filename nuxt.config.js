import pkg from './package'
require('dotenv').config()

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Cinzel|Josefin+Sans"}

    ],
    script : [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/app.css',
    '@/assets/styles/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify.js',
    { src : '@/plugins/vue-select.js', ssr: false},
    '@/plugins/mixins/globalVars.js',
    '@/plugins/mixins/colors.js',
    {src: '@/plugins/gallery.js', ssr: false},
    {src: '@/plugins/vueSlider.js', ssr: false},
    // '@plugins/vueSlider3d'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'

  ],

  styleResources: {
       scss: [
           'assets/styles/helpers/_variables.scss',
           'assets/styles/helpers/_mixins.scss',
       ]
   },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL : process.env.BACKEND_URL + '/api/'

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
