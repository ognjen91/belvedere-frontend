<template lang="html">
  <v-container>
    <v-layout column>

      <v-flex my-4>
        <v-layout column>
          <h1>Izaberite odgovarajući smještaj...</h1>
          <h4>...a sve ostalo prepustite nama</h4>
        </v-layout>
      </v-flex>

      <v-flex v-if='apartments.length' mb-5>
        <v-layout justify-start>
        <h2 class="underlined spaced">Apartmani</h2>
        </v-layout>
        <v-layout wrap justify-start>

          <v-flex xs11 md4 lg3 ma-3 v-for='(apartment, i) in apartments' :key="i">
            <ApartmentPreview :apartment="apartment" />
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex v-if='rooms.length'>
        <v-layout justify-start>
        <h2 class='underlined spaced'>Sobe</h2>
      </v-layout>
        <v-layout wrap justify-start>

          <v-flex xs11 md4 lg3 ma-3 v-for='(room, i) in rooms' :key="i">
            <RoomPreview :room="room" />
          </v-flex>

        </v-layout>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import ApartmentPreview from '@/components/reusable/BelvedereApartmentPreview'
import RoomPreview from '@/components/reusable/BelvedereRoomPreview'
export default {

  layout: 'pages',


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
