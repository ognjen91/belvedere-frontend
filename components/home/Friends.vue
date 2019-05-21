<template lang="html">
  <v-layout wrap pl-3>


    <v-flex xs12 md4 mb-4 class='friendsText'>
      <h2 class="text-xs-center mb-4 friendsSectionTitle spaced2">{{ $t('homepage.friends.title') }}</h2>

      <p>{{ $t('homepage.friends.text') }}</p>
      <v-btn :to='localePath({name: "friends"})' :color="c1" dark>{{ $t('homepage.friends.buttonText') }}</v-btn>

    </v-flex>
    <v-flex xs12 md8>
      <v-layout wrap justify-center>
        <v-flex xs12 md4 mr-2 v-if="typeof kumbor !== 'undefined'">
          <FacilityPreview :facility="kumbor" />
        </v-flex>

        <v-flex xs12 md4 mr-2 v-if='typeof randomFacility !== "undefined" && randomFacility !== kumbor'>
          <FacilityPreview :facility="randomFacility" />
        </v-flex>


      </v-layout>
    </v-flex>

    <v-flex>

    </v-flex>
  </v-layout>
</template>

<script>
import FacilityPreview from '@/components/reusable/OtherFacilityPreview.vue'

export default {

  components : {
    FacilityPreview
  },

  computed : {
    randomFacility(){
      return this.$store.getters['otherFacilities/getRandomFacility']
    },

    kumbor(){
      return this.$store.getters['otherFacilities/getKumbor']
    }
  },

  mounted(){
    console.log(this);
  }


}
</script>

<style lang="css" scoped>

.friendsText{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.friendsSectionTitle{
  font-size: 1.7em;
}
</style>
