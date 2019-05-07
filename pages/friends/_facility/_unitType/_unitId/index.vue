<template lang="html">
  <v-container>
  <v-layout wrap>
    <v-flex xs12>
    <h2>{{unit.name_sr}}</h2>
    <h3>{{facility.name_sr}}</h3>

    <p v-if='unit.type=="apartment"'>{{unit.noOfRooms}} sobe || {{unit.noOfBeds}} kreveta</p>
    <p v-else>{{unit.noOfBeds}}</p>
  </v-flex>

  <v-flex xs12 md7>

    {{unit.description_sr}}
    <!-- //opis -->
  </v-flex>
  <v-flex xs12 md5 mb-5>
    <!-- callendar -->
  <Calendar :dates="calendarDates" />
  </v-flex>


  <v-flex xs12>
    <!-- //amenities -->
    <Amenities :object="unit" />

  </v-flex>
  <v-flex xs12>
    <v-layout>
    </v-layout>
    <Gallery :images="images" />
  </v-flex>


  </v-layout>


</v-container>
</template>

<script>
import Calendar from '@/components/apartmentsAndRooms/Calendar'
import Amenities from '@/components/otherFacilities/units/Amenities'
import Gallery from '@/components/otherFacilities/units/Gallery.vue'
export default {

  components : {
    Calendar,
    Amenities,
    Gallery
  },

  computed : {
    facility(){
      return this.$store.getters['otherFacilities/getTheFacility'](this.unit.facility_id);
    },

    calendarDates(){
      return this.$store.getters['otherFacilitiesCalendars/getCalendar'](this.unit.id, this.$route.params.unitType == "apartments"? "apartment" : "room");
    },

    images(){
      return this.unit.images.map(img=> this.sourceFolder + img.name) //because image sources must be in array with full url
  },
  },


  async asyncData({$axios, params, store, redirect}){
    if(params.unitType !== "apartments" && params.unitType !== 'rooms') redirect(301, '/')


    try {
      let {data} = await $axios.get(params.unitType + "/" + params.unitId)
      return {unit : data.data}
    } catch (error) {
      console.log(error);
    }
  },

  async fetch({$axios, params, store, redirect}){
    if(params.unitType !== "apartments" && params.unitType !== 'rooms') redirect(301, '/')

    try {
      await store.dispatch('otherFacilitiesCalendars/setFacilityCalendars', {facility_id : params.facility})
    } catch (error) {
      console.log(error);
    }
  },


}
</script>

<style lang="css" scoped>
</style>
