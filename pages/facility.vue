<template lang="html">

  <v-container mb-3>
    <v-layout mb-5>
        <v-flex xs12>
          <h1>{{facility.name_sr}}</h1>
          <Rating />
          <h4>Vaša oaza u Herceg Novom</h4>
        </v-flex>
      </v-layout>

    <v-layout wrap>

      <v-flex xs12 md7>
        <v-layout wrap>

          <Images :images="facility.images" :profileImage='facility.profileImage' />

        </v-layout>
      </v-flex>

      <v-flex xs12 md5>
        <v-layout  class="descrPart" justify-center align-center>
          <v-flex pt-8>

          <h3>Zdanje "Belvedere"</h3>
          <p>{{facility.address}}</p>

          <p class="belvederDescr">
            {{facility.description_sr}}
          </p>

          <h4>Broj soba: {{rooms.length}}</h4>
          <h4>Broj apartmana :{{apartments.length}}</h4>

        </v-flex>
        </v-layout>
      </v-flex>




    </v-layout>
  </v-container>


</template>

<script>
import Rating from '@/components/facility/Rating.vue'
import Images from '@/components/facility/Images.vue'
import History from '@/components/facility/History.vue'
export default {

  layout: 'pages',
  

components : {
  Rating,
  Images,
  History
},

  computed : {
    facility(){
      return this.$store.getters['belvedere/getFacility']
    },

    rooms(){
      return this.$store.getters['belvedere/getRooms']
    },
    apartments(){
      return this.$store.getters['belvedere/getApartments']
    },

  }
}
</script>

<style lang="scss" scoped>


</style>
