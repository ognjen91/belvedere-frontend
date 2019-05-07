<template>
  <div>
    <v-layout justify-center mb-4>
      <!-- <h1 class="text-center">Sobe i Apartmani</h1> -->
    </v-layout>
    <v-layout justify-center wrap class="roomsPreviewHome">
      <v-flex xs12 sm6 md4 mb-5 mx-4>
        <ApartmentPreview :apartment="randomApartment" />
      </v-flex>


      <!-- <h4>Sobe</h4> -->
      <v-flex xs12 sm6 md4 mb-5 v-for="(room, i) in rooms" :key="i" mx-4 class="roomPreview">
        <RoomPreview :room="room" />
      </v-flex>
    </v-layout>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import RoomPreview from '@/components/reusable/BelvedereRoomPreview.vue'
import ApartmentPreview from '@/components/reusable/BelvedereApartmentPreview.vue'
export default {
  components: {
    RoomPreview,
    ApartmentPreview
  },

  computed : {
    ...mapGetters({
      randomRooms : 'belvedere/getSeveralRandomRooms',
      randomApartment : 'belvedere/getRandomApartment'
    }),

    rooms(){
      return this.randomRooms(3);
    }
  }
}
</script>

<style lang="scss" scoped>
.roomPreview:nth-of-type(1){
  margin-top: 5%;

}

.roomsPreviewHome{
  @media screen and (min-width: $md){
    // border-left: 1px solid rgb(147, 130, 125);
    // padding-right: 3%;
  }
}
</style>
