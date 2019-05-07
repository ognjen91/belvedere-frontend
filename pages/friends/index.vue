<template lang="html">
<v-container>

  <v-layout>
    <v-flex>
      <h2>Objekti naših prijatelja</h2>
      <p>Molimo Vas da pogledate i smještajne kapacitete naših dragih prijatelja koji se nalaze širom Herceg Novog.</p>
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

  <v-layout v-else py-3>
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
import FacilityPreview from '@/components/reusable/OtherFacilityPreview.vue'

export default {
  layout: 'pages',
  

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
