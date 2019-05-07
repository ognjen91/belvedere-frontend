import Vue from 'vue'

const GlobalVars = {
  //making vue plugin
  install(Vue, options){
    //now inject the mixin
    Vue.mixin({
      data(){
        return{

          c0 : "#282828", //dark
          c1 : "#A30046", //pink
          c2 : "#909090", //grayFontCollor
          c3 : "#A30046", //crvena
          cf : "#525050" //bojaFonta



        }
      }
    })
  }
}


Vue.use(GlobalVars);
