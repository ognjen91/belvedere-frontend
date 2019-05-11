<template lang="html">

  <v-container mb-3>
    <v-layout mb-5>
        <v-flex xs12>
          <h1>{{facility[`name_${currentLocale}`]}}</h1>
          <Rating v-if="facility.bookingRating" :booking-rating="facility.bookingRating" />
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

          <h4>{{facility[`slogan_${currentLocale}`]}}</h4>

          <p>{{facility.address}}</p>

          <p class="belvederDescr cf">
            {{facility[`description_${currentLocale}`]}}
          </p>

          <h4>{{ $t('facility.noOfRooms') }}: {{rooms.length}}</h4>
          <h4 class="mb-4">{{ $t('facility.noOfApartments') }} :{{apartments.length}}</h4>

          <v-layout>
            <v-btn icon :href="'http://'+facility.facebook">
              <v-icon>fab fa-facebook</v-icon>
            </v-btn>
            <v-btn icon :href="'http://'+facility.instagram">
              <v-icon>fab fa-instagram</v-icon>
            </v-btn>
          </v-layout>

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
