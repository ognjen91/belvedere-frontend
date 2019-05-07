<template lang="html">
  <v-layout justify-start>
    <v-flex v-for='(apartment, i) in apartments' :key='i' xs12 md4 lg3 mr-3>
      <BelvedereApartmentPreview :apartment='apartment' />
    </v-flex>
  </v-layout>
</template>

<script>
import BelvedereApartmentPreview from '@/components/reusable/BelvedereApartmentPreview.vue'

export default {
  components : {
    BelvedereApartmentPreview
  },

  props : ['apartments']
}
</script>

<style lang="css" scoped>
</style>
