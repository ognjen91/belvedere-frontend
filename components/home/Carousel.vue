<template>
  <div>

  <v-carousel next-icon="fas fa-caret-right" prev-icon="fas fa-caret-left">
    <!-- <transition-group name="list-complete" enter-active-class="animated fadeIn" -->
                <!-- leave-active-class="animated fadeOut"> -->

    <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="sourceFolder + slide.name"
      reverse-transition="reverseFade"
      transition="fade"
    >
    <div class="textHolder">
      <h1 class="text-center spaced"><strong>{{slide[`text_${currentLocale}`]}}</strong></h1>
    </div>


    </v-carousel-item>
  <!-- </transition-group> -->
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

.fade{

      &-enter-active{
        animation: bounce-in .3s;
      }

      &-leave-active{
      //   // animation: bounce-in .5s;
        // animation: bounce-out .1s;
      }

    }


      @keyframes bounce-in {
    0% {
      // transform: scale(0.8);
      opacity: 0.8;
      transform:  skewY(3deg);
    }
    100% {

      // transform: scale(1);
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
      opacity: 0.4;
    }
    50% {
      transform: scale(0.9);
      opacity: 0.5;
      margin-left: 50%;
    }
    100% {
      transform: scale(0.7);
      opacity: 0;
      margin-left: 100%;
    }
  }


.reverseFade{

      &-enter-active{
        animation: bounce-in .3s;
      }

    &-leave-active{
        animation: bounce-out .5s reverse;
      }

    }


</style>
