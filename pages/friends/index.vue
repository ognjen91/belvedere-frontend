<template lang="html">
<v-container>

  <v-layout>
    <v-flex>
      <h2>{{ $t('friends.title') }}</h2>
      <p>{{ $t('friends.subtitle') }}</p>
    </v-flex>
  </v-layout>

<v-layout wrap  v-if="facilities.length <=3">
    <v-flex  xs12 md6  lg4 v-for="facility in facilities" :key='facility.id' mb-4>
      <v-layout justify-center align-center>
        <v-flex xs10>
          <FacilityPreview :facility="facility" />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>

  <v-layout wrap v-else py-3>
    <v-flex xs12 md4  lg3 v-for="facility in facilities" :key='facility.id' mb-4>
      <v-layout justify-center align-center>
        <v-flex xs10>
          <FacilityPreview :facility="facility" />
        </v-flex>
      </v-layout>
    </v-flex>
</v-layout>


</v-container>
</template>

<script>
import metaOf from '@/meta/friends.js'
import FacilityPreview from '@/components/reusable/OtherFacilityPreview.vue'

export default {
  layout: 'friends',

  /*HEAD*/
  head () {
     return {
       title: 'Belvedere: Our Friends',
       meta: [
         { hid: 'description', name: 'description', content: "Find accomodation for you in one of the our friends' facilities, all around city of Herceg Novi." },
         //TWITTER & FACEBOOK
         ...metaOf(this).twitter, ...metaOf(this).facebook
       ]
       }
   },

  /*END HEAD*/

  components : {
    FacilityPreview
  },

  computed : {
    facilities(){
      return this.$store.getters['otherFacilities/getFacilities']
    }
  }
}
</script>

<style lang="css" scoped>
</style>
