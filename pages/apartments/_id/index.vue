<template lang="html">
  <div>
      <!-- <v-layout column align-center>
        <ApartmentHeader :image='apartment.profileImage' :object="apartment" />
      </v-layout> -->
      <v-layout>
        <v-flex xs12 class="slajder">
        <Slider :slides='sliderSlides' />
      </v-flex>
      </v-layout>

      <Amenities :object="apartment" />


      <v-container class="mb-5">
        <v-layout wrap mb-5>
            <v-flex xs12 md8 pl-2>
              <v-layout align-center justify-center class="description cf" column px-2>


                <h1 class="spaced center--text">
                  {{apartment.name_sr}}
                </h1>
                <h4 py-2 class="center--text cf">
                  <span class="cf">{{apartment.noOfRooms}} {{ apartment.noOfRooms>1? $t('previews.rooms') :  $t('previews.room')}} |
                  </span> {{apartment.noOfBeds}} {{apartment.noOfBeds>1? $t('previews.beds') : $t('previews.bed')}},
                  {{apartment.area}}m<sup  class="cf">2</sup></h4>
                <h4>{{apartment[`slogan_${currentLocale}`]}}</h4>
                <p class="cf px-2 description-text">{{apartment[`description_${currentLocale}`]}}</p>
                <!-- {{apartment[`description_${currentLocale}`]}} -->
            </v-layout>
            </v-flex>

            <v-flex xs12 md4  class='theCalendar'>
              <Calendar :dates="calendarDates" />
            </v-flex>

            <v-flex xs12 mt-4>
              <v-layout>
                <h2>{{$t('apartments.imagesTitle')}} "{{apartment[`name_${currentLocale}`]}}"</h2>
              </v-layout>
              <Gallery :images="images" />
            </v-flex>
        </v-layout>


        <v-layout column mb-4 v-if="otherApartments.length">
          <v-flex mb-3>
            <h2 class="text-xs-center text-md-left">{{ $t('apartments.otherApartmentsTitle') }}</h2>
          </v-flex>
          <v-flex>
          <OtherApartments :apartments="otherApartments" />
        </v-flex>
        </v-layout>


        <v-layout column v-if="rooms.length">
          <v-flex mb-3>
            <h2 class="text-xs-center text-md-left">{{ $t('apartments.seeAlso') }}...</h2>
          </v-flex>
          <v-flex>
          <RoomsSuggestion :rooms="rooms" />
        </v-flex>
        </v-layout>

      </v-container>






  </div>
</template>

<script>
import metaOf from '@/meta/apartmentSingle.js'


import Slider from '@/components/otherFacilities/Slider.vue'
import ApartmentHeader from '@/components/apartmentsAndRooms/TopParallax.vue'
import Amenities from '@/components/apartmentsAndRooms/Amenities.vue'
import Calendar from '@/components/apartmentsAndRooms/Calendar.vue'
import Gallery from '@/components/apartmentsAndRooms/Gallery.vue'
import OtherApartments from '@/components/apartmentsAndRooms/OtherApartments.vue'
import RoomsSuggestion from '@/components/apartmentsAndRooms/RoomsSuggestion.vue'
export default {

  head () {
    return {
      title: `${this.apartment[`name_${this.currentLocale}`]}: Belvedere`  ,
      meta: [
        { hid: 'description', name: 'description', content: `Belvedere apartment ${this.apartment[`name_${this.currentLocale}`]} : ${this.apartment.description_en}` },
        //TWITTER & FACEBOOK
        ...metaOf(this).twitter, ...metaOf(this).facebook,

      ]
    }
  },


  components : {
    ApartmentHeader, //option 1
    Slider, //option 2
    Amenities,
    Calendar,
    Gallery,
    OtherApartments,
    RoomsSuggestion
  },
  data(){
    return {
      index: null
    }
  },

  computed : {

    apartment(){
      let id = this.$route.params.id;
      return this.$store.getters['belvedere/getTheApartment'](id);
    },


    calendarDates(){
        let apartmentData = {
          type : 'apartment',
          id : this.$route.params.id
        }
        return this.$store.getters['belvedereCalendars/getCalendar'](apartmentData)
      },

      images(){
        if(this.apartment.images) return this.apartment.images.map(img=> this.sourceFolder + img.name) //because image sources must be in array with full url
        return []
    },

     otherApartments(){
       return this.$store.getters['belvedere/getOtherApartments'](this.$route.params.id)
     },

     rooms(){
       return this.$store.getters['belvedere/getSeveralRandomRooms'](4)
     },

     sliderSlides (){
       let slides = [];
       slides = this.apartment.images.map(image => {
         return {
           isInitial : false,
           name : image.name
         }
       })
       return slides;
     },
  },

  async fetch({$axios, params, store}){
    if (store.getters['belvedere/getTheApartment'](params.id)['fullyLoaded']) return;
    //treba ovo uraditi i za apartmane
    try {
      let {data} = await $axios.get("apartments/" + params.id)
      store.commit('belvedere/SET_FULL_APARTMENT', data.data)
    } catch (error) {
      // error({ statusCode: 404, message: 'Not found' })
      console.log(error);
    }
  },


}
</script>

<style lang="scss" scoped>

.theCalendar{
  @media screen and (min-width: $md){
    text-align: center;
  }
}

.description{
  height: 100%;
  padding: 2%;

  & h4{
    margin-bottom: 3%;
  }
}

</style>
