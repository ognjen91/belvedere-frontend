<template lang="html">
  <v-container class='friendsUnit'>
  <v-layout wrap>
    <v-flex xs12 mb-3>
    <h2>{{unit[`name_${currentLocale}`]}}</h2>
    <h3>{{facility[`name_${currentLocale}`]}}</h3>

    <p v-if='unit.type=="apartment"'>{{unit.noOfRooms}}  {{ $t('friends.unit.rooms') }} || {{unit.noOfBeds}}  {{ $t('friends.unit.beds') }}</p>
    <p v-else>{{unit.noOfBeds}} {{ $t('friends.unit.beds') }}</p>
  </v-flex>

  <v-flex xs12 px-5 md7 class="cf" v-if='unit[`description_${currentLocale}`] !== ""'>
  {{unit[`description_${currentLocale}`]}}
    <!-- {{}} -->
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
      if(this.unit.images.length) return this.unit.images.map(img=> this.sourceFolder + img.name) //because image sources must be in array with full url
      return []
  },
  },


  async asyncData({$axios, params, store, redirect}){
    if(params.unitType !== "apartments" && params.unitType !== 'rooms') redirect(301, '/')


    try {
      let {data} = await $axios.get(params.unitType + "/" + params.unitId)
      console.log("UNIIIT", data.data);
      return {unit : data.data}
    } catch (error) {
      console.log("UNIT ERROR ", error);
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

<style lang="scss" scoped>
.friendsUnit{
  padding-top: 6.5%;

}
</style>
