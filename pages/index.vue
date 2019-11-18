<template>
 <main>

   <CarouselAndCalendar :slides="slides" />


   <transition
   enter-active-class="animated bounceInDown"
   leave-active-class="animated fadeOut"
   mode="out-in"
   duration='500'>
   <SearchResults  v-if="showSearchResults" @closeSearchResults='closeResults' />
 </transition>

   <v-container>
     <v-layout wrap>
       <v-flex xs12 md4>
         <FirstText />
       </v-flex>
       <v-flex xs12 md8>
         <RoomsPreview />
       </v-flex>
     </v-layout>
   </v-container>

   <Video />

   <v-container>
     <hr my-3 mx-5>
   </v-container>

  <v-container mb-3>
   <LatestBlogs />
  </v-container>


 <v-layout  class="parallax">
 <!-- <v-layout mb-5> -->
   <Parallax />
 </v-layout>

 <v-container mb-5>
   <v-layout>
     <v-flex mb-5>
       <HercegNovi />
     </v-flex>
   </v-layout>


   <v-layout class="my-2 mt-5 py-3 friendsOnHome">
     <v-flex>
       <OurFriends />
     </v-flex>
   </v-layout>
 </v-container>


 </main>
</template>

<script>
import {mapGetters} from 'vuex'
import CarouselAndCalendar from '@/components/home/Carousel.vue'
import SearchResults from '@/components/home/SearchResults.vue'
import FirstText from '@/components/home/FirstText.vue'
import RoomsPreview from '@/components/home/RoomsPreview.vue'
import LatestBlogs from '@/components/home/LatestBlogs.vue'
import HercegNovi from '@/components/home/HercegNovi.vue'
import Parallax from '@/components/home/Parallax.vue'
import OurFriends from '@/components/home/Friends.vue'
import Video from '@/components/home/Video.vue'
export default {
  components: {
    CarouselAndCalendar,
    FirstText,
    RoomsPreview,
    LatestBlogs,
    HercegNovi,
    Parallax,
    SearchResults,
    OurFriends,
    Video
  },




  computed : {
    ...mapGetters({
      slides : 'sliders/getMainSlider',
      showSearchResults : 'belvedereCalendars/showResults',
    })
  },

  async fetch({store, params, app:{$axios}}){
      if(store.getters['sliders/getMainSlider'].length) return;
      let {data} = await $axios.get('sliders/1');
      store.commit('sliders/SET_MAIN_SLIDER', data.data);
  },

  methods : {
    closeResults(){
      this.$store.commit('belvedereCalendars/CLOSE_RESULTS')
    }
  },

  updated(){
    this.showSearchResults = false
  }
}
</script>

<style lang="scss">
.parallax{
  margin-bottom: 9%;
}

.friendsOnHome{
  // background-color: rgba(203, 204, 194, 0.12);
  background-color: rgba(#a30046, 0.06);
}

</style>
