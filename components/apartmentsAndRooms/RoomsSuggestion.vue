<template lang="html">
  <v-layout justify-start wrap>
    <v-flex v-for='(room, i) in rooms' :key='i'xs12 md4 lg3 px-3 mb-3>
      <BelvedereRoomPreview :room='room' />
    </v-flex>
  </v-layout>
</template>

<script>
import BelvedereRoomPreview from '@/components/reusable/BelvedereRoomPreview.vue'

export default {
  components : {
    BelvedereRoomPreview
  },

  props : ['rooms']
}
</script>

<style lang="css" scoped>
</style>
