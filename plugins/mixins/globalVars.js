import Vue from 'vue'

const GlobalVars = {
  //making vue plugin
  install(Vue, options){
    //now inject the mixin
    Vue.mixin({
      data(){
        return{

          theWebsite : process.env.BACKEND_URL,
          sourceFolder : process.env.BACKEND_STORAGE,
          url : process.env.WEBSITE_URL,
          // locale : this.$i18n.locale
          // dis : this

        }
      },

      computed:{
        currentLocale(){
         return  this.$i18n.locale
       },
       availableLocales () {
         return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
       }
      }
    })
  }
}


Vue.use(GlobalVars);
