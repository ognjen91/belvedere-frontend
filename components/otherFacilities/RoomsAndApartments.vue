<template>
<div>
  <v-tabs v-model="active"  slider-color="cyan" next-icon="fas fa-chevron-right" prev-icon="fas fa-chevron-left">
    <v-tab v-for="(apartment, i) in apartments" :key="i*344+43" ripple v-if="apartments.length">
      {{apartment.name_sr}}

    </v-tab>
    <v-tab v-for="(room, i) in rooms" :key="i*985+28" ripple v-if="apartments.length">
        <small>
          {{room.name_sr}}
        </small>

    </v-tab>
    <v-tab-item v-for="(apartment, i) in apartments" :key="i*54+11" v-if="apartments.length">
      <ApartmentPreview :apartment="apartment" />
    </v-tab-item>
    <v-tab-item v-for="(room, i) in rooms" :key="i*22+55" v-if="rooms.length" >
      <RoomPreview :room="room" />
    </v-tab-item>
  </v-tabs>


</div>
</template>



<script>
import ApartmentPreview from '@/components/otherFacilities/OtherApartmentPreview.vue'
import RoomPreview from '@/components/otherFacilities/OtherRoomPreview.vue'

export default {

  components: {

    ApartmentPreview,
    RoomPreview

  },

  props: {
    rooms: {
      Type: Array,
      Required: false,
      default: []
    },
    apartments: {
      Type: Array,
      Required: false,
      default: []
    },
  },

  data(){
    return{
      active : null
    }
  }



}
</script>
