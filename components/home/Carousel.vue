<template>
  <div>

  <v-carousel next-icon="fas fa-caret-right" prev-icon="fas fa-caret-left">
    <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="sourceFolder + slide.name"
    >
    <div class="textHolder">
      <h1 class="text-center">{{slide[`text_${currentLocale}`]}}</h1>
    </div>


    </v-carousel-item>
  </v-carousel>


  <Calendars />

</div>
</template>

<script>

import Calendars from '@/components/home/Calendars.vue'

  export default {
    components : {
      Calendars
    },


    props : {
      slides : {
        Type : Array
      }
    },

    data () {
      return {

      }
    },




  }
</script>


<style lang="scss">

.v-carousel__controls{
  background-color: rgba(223, 156, 8, 0);
}

.textHolder{
  width: 100%;
  height: 100%;
  position: relative;

  &  h1{
    color: $c1 !important;
    font-family: $fo2;
    position: absolute;
    bottom: 14%;
    // border: 1px solid green;
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
  }
}

</style>
