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
          


        }
      }
    })
  }
}


Vue.use(GlobalVars);
