<template lang="html">
  <div>
    <v-layout column align-center>
      <RoomHeader :image='room.profileImage || false' :object="room" />
    </v-layout>
    <Amenities :object="room" />


    <v-container>
      <v-layout wrap mb-3>

          <v-flex xs12 md8 class="roomData description">
            <v-layout wrap column justify-center align-center>

                  <h2 class="text-center">slogan ove sobe</h2>
                  <p>{{room.description_sr}}</p>


            </v-layout>

          </v-flex>


          <v-flex xs12 md4 class="roomData">
            <v-layout column>
              <v-flex xs12 mb-5>
                <v-layout>
                  <h2>Slike ove sobe</h2>
                </v-layout>
                <Gallery :images="images" galleryType="room" />
              </v-flex>

              <v-flex xs12>
                <v-layout justify-center>
                  <Calendar :dates="calendarDates" />
                </v-layout>
              </v-flex>

            </v-layout>
          </v-flex>
      </v-layout>



      <v-layout column mb-4>
        <v-flex mb-3>
          <h2>Ostale sobe</h2>
        </v-flex>
        <v-flex>
        <OtherRooms :rooms="otherRooms" />
      </v-flex>
      </v-layout>


      <v-layout column>
        <v-flex mb-3>
          <h2>Pogledajte i...</h2>
        </v-flex>
        <v-flex>
        <ApartmentsSuggestion :apartments="apartments" />
      </v-flex>
      </v-layout>

    </v-container>




   </div>
</template>

<script>
import RoomHeader from '@/components/apartmentsAndRooms/TopParallax.vue'
import Gallery from '@/components/apartmentsAndRooms/Gallery.vue'
import Calendar from '@/components/apartmentsAndRooms/Calendar.vue'
import Amenities from '@/components/apartmentsAndRooms/Amenities.vue'
import OtherRooms from '@/components/apartmentsAndRooms/OtherRooms.vue'
import ApartmentsSuggestion from '@/components/apartmentsAndRooms/ApartmentsSuggestion.vue'


export default {
  components : {
    RoomHeader,
    Calendar,
    Gallery,
    Amenities,
    OtherRooms,
    ApartmentsSuggestion
    // OtherApartments,
    // RoomsSuggestion
  },
  computed : {
    room(){
      let id = this.$route.params.id;
      return this.$store.getters['belvedere/getTheRoom'](id);
    },

    calendarDates(){
        let roomData = {
          type : 'room',
          id : this.$route.params.id
        }
        return this.$store.getters['belvedereCalendars/getCalendar'](roomData)
      },

      images(){
        return this.room.images.map(img=> this.sourceFolder + img.name) //because image sources must be in array with full url
    },

     otherRooms(){
       return this.$store.getters['belvedere/getOtherRooms'](this.$route.params.id)
     },

     apartments(){
       return this.$store.getters['belvedere/getSeveralRandomApartments'](4)
     }
  },

  async fetch({$axios, params, store}){
    if (store.getters['belvedere/getTheRoom'](params.id)['fullyLoaded']) return;
    //treba ovo uraditi i za apartmane
    try {
      let {data} = await $axios.get("rooms/" + params.id)
      store.commit('belvedere/SET_FULL_ROOM', data.data)
    } catch (error) {
      console.log(error);
    }
  },

}
</script>

<style lang="scss" scoped>
.description {
  padding: 0 10%;
}

.roomData{

  @media screen and (min-width: $md){
      height: 100% !important;
      // border: $redb;
  }
}
</style>
