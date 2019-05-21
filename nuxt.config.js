import pkg from './package'
require('dotenv').config()


const en = require('./lang/en-US.js')
const sr = require('./lang/sr-RS.js')
const ru = require('./lang/ru-RU.js')


export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Belvedere Herceg Novi",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Apartments and rooms near city center and The Old Town of Herceg Novi, Montenegro. Fully equiped, beautiful sea view. Main tourist attractions on a few minutes walk. Specail discounts for reservations from the website."},
      {hid: 'robots', name: 'robots', content : 'follow'},


      //TWITTER
      {hid: 'twitter:card', name:'twitter:card', content:"summary"},
      {hid: 'twitter:url', name:'twitter:url', content: process.env.WEBSITE_URL},
      {hid: 'twitter:title', name:'twitter:title', content:"Belvedere Herceg Novi"},
      {hid: 'twitter:description', name:'twitter:description', content:"Apartments and rooms near city center and The Old Town of Herceg Novi, Montenegro"},
      {hid: 'twitter:creator', name:'twitter:creator', content:"Ognjen"},
      {hid: 'twitter:image:src', name:'twitter:image:src', content: process.env.WEBSITE_URL + "/placeholder.jpg"},

      //FACEBOOK
      {hid: 'og:title', name:'og:title', content: "Belvedere Herceg Novi"},
      {hid: 'og:type', name:'og:type', content: "website"},
      {hid: 'og:url', name:'og:url', content: process.env.WEBSITE_URL},
      {hid: 'og:image', name:'og:image', content: process.env.WEBSITE_URL + "/placeholder.jpg"},
      {hid: 'og:description', name:'og:description', content: "Apartments and rooms near city center and The Old Town of Herceg Novi, Montenegro"},
      {hid: 'og:site_name', name:'og:site_name', content: "belvedere-montenegro.com"}



    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Cinzel|Josefin+Sans"},
      { rel: 'shortcut icon', href:"/logo.ico"}

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
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
    locales: [
      {
        name: 'Serbian',
        code: 'sr',
        iso: 'sr-RS',
        // file: 'sr-RS.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        // file: 'en-US.js'
      },
      {
        name: 'Russian',
        code: 'ru',
        iso: 'ru-RU',
        // file: 'en-US.js'
      }
    ],
    // langDir: 'lang/',
    defaultLocale: 'sr',

    vueI18n: {
        fallbackLocale: 'sr',
        messages: { en, sr, ru }
      },


      pages: {
          facility: {
            sr: '/objekat',
            en: '/facility',
            ru: '/facility'
          }
        }
      }
  ]],

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
