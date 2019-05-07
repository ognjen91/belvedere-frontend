<template lang="html">
  <div>
    <h1>Belvedere</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed : {
    ...mapGetters({
         facility : 'belvedere/getFacility',

      }),
      apartments(){
        return this.$store.getters['belvedere/getApartments'];
      }
    },

    mounted(){
      console.log();
    }
}
</script>

<style lang="css" scoped>
</style>
