<template lang="html">
  <v-container>
    <v-layout column>

      <v-flex my-4>
        <v-layout column>
          <h1>{{ $t('rooms.title') }}...</h1>
          <h4 class='cf'>...{{ $t('rooms.subtitle') }}</h4>
        </v-layout>
      </v-flex>

      <v-flex v-if='apartments.length' mb-5 mt-2>
        <v-layout justify-start>
        <h2 class="underlined spaced">{{ $t('rooms.apartmentsTitle') }}</h2>
        </v-layout>
        <v-layout wrap justify-start>

          <v-flex xs11 md4 lg3 pa-3 v-for='(apartment, i) in apartments' :key="i">
            <ApartmentPreview :apartment="apartment" />
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex v-if='rooms.length'>
        <v-layout justify-start>
        <h2 class='underlined spaced'>{{ $t('rooms.roomsTitle') }}</h2>
      </v-layout>
        <v-layout wrap justify-start>

          <v-flex xs11 md4 lg3 pa-3 v-for='(room, i) in rooms' :key="i">
            <RoomPreview :room="room" />
          </v-flex>

        </v-layout>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import metaOf from '@/meta/rooms.js'
import ApartmentPreview from '@/components/reusable/BelvedereApartmentPreview'
import RoomPreview from '@/components/reusable/BelvedereRoomPreview'
export default {

  layout: 'pages',

  /*HEAD*/
  head () {
     return {
       title: 'Belvedere : Accomodation',
       meta: [
         { hid: 'description', name: 'description', content: 'Belvedere: available rooms and apartments with beautiful seaview, near city center of Herceg Novi, only few minutes walk from the main tourist attractions in Herceg Novi' },
         //TWITTER & FACEBOOK
         ...metaOf(this).twitter, ...metaOf(this).facebook,

       ]
     }
   },

    /*ENDHEAD*/
  components : {
    ApartmentPreview,
    RoomPreview
  },

  computed : {
    ...mapGetters({
      rooms : 'belvedere/getRooms',
      apartments : 'belvedere/getApartments'
    })
  }

}
</script>

<style lang="css" scoped>
</style>
