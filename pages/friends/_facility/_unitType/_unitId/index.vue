<template lang="html">
  <v-container class='friendsUnit'>
  <v-layout wrap>
    <v-flex xs12 mb-3>
    <h2>{{unit[`name_${currentLocale}`]}}</h2>
    <h3>
    {{facility[`name_${currentLocale}`]}}
    <v-btn icon :to="localePath({name: 'friends-facility', params: {facility: facility.id}})" small>
      <v-icon>fas fa-angle-right</v-icon>
    </v-btn>
    </h3>

    <p v-if='unit.type=="apartment"'>{{unit.noOfRooms}}  {{ $t('friends.unit.rooms') }} || {{unit.noOfBeds}}  {{ $t('friends.unit.beds') }}</p>
    <p v-else>{{unit.noOfBeds}} {{ $t('friends.unit.beds') }}</p>
  </v-flex>

  <v-flex xs12 px-5 md7 class="cf initDesc" v-if='unit[`description_${currentLocale}`] !== ""'>
    <h4 class='mb-3 mt-1'>{{ unit[`slogan_${currentLocale}`] }}</h4>
    <p class="cf">{{unit[`description_${currentLocale}`]}}</p>
    <!-- //opis -->
  </v-flex>
  <v-flex xs12 md5 mb-5 class='calendar'>
    <!-- callendar -->
  <Calendar :dates="calendarDates" />
  </v-flex>


  <v-flex xs12 mb-2>
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
import metaOf from '@/meta/friendsUnit.js'
import Calendar from '@/components/apartmentsAndRooms/Calendar'
import Amenities from '@/components/otherFacilities/units/Amenities'
import Gallery from '@/components/otherFacilities/units/Gallery.vue'
export default {

  layout : 'pagesNoBottomBoxes',

  /*HEAD*/
  head () {
     return {
  title: `${this.unit.name_en} : unit in ${this.facility.name_en}`,
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: `${this.unit.name_en} : unit in ${this.facility.name_en}: ${this.unit.description_en}`
      },
      //TWITTER & FACEBOOK
      ...metaOf(this).twitter, ...metaOf(this).facebook
    ]
    }},

  /*END HEAD*/
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
      // error({ statusCode: 404, message: 'Not found' })
    }
  },


}
</script>

<style lang="scss" scoped>
.friendsUnit{
  padding-top: 6.5%;

}
.initDesc{
    display: flex;
    align-items: center;
    flex-direction: column;
}

.calendar{
  display: flex;
  justify-content: center;
}
</style>
