<template lang="html">
  <v-layout column  class='results' >
    <div>
      <v-icon @click="close">fas fa-times-circle</v-icon>
    </div>

    <v-flex>
      <v-layout column justify-center align-center>

      <h2 class='text-center'>{{ $t('homepage.searchResults.resultsTitle') }} <span v-if='results.length'> : {{ $t('homepage.searchResults.total') }} {{results.length}} {{results.length>1? $t('homepage.searchResults.results') : $t('homepage.searchResults.result') }}</span></h2>
      <h4 class='text-center'>{{ $t('homepage.searchResults.arrival')}}  {{arrivalDate}}, {{nights}} {{nights>1? $t('homepage.searchResults.nights'): $t('homepage.searchResults.night')}}</h4>
    </v-layout>
    </v-flex>

    <v-flex class='belvedereResults' v-if='results.length'>
      <v-layout wrap>

        <v-flex xs12 md6 lg3 v-for='(result,i) in results' :key="i" class="searchResult">
          <ApartmentPreview v-if="result.type == 'apartment'" :apartment="result.calendarable" />
          <RoomPreview v-else :room="result.calendarable" />
        </v-flex>

      </v-layout>
    </v-flex>
    <v-flex v-else flex justify-center align-center>
      <h3 class='text-xs-center'>{{ $t('homepage.searchResults.noResultsMsg') }}</h3>
      <h4 class="cf text-xs-center">{{ $t('homepage.searchResults.tryAgaingMsg') }}</h4>
    </v-flex>

  </v-layout>

</template>

<script>
import {mapGetters} from 'vuex'
import RoomPreview from '@/components/reusable/BelvedereRoomPreview.vue'
import ApartmentPreview from '@/components/reusable/BelvedereApartmentPreview.vue'
export default {
  components : {
    RoomPreview,
    ApartmentPreview
  },
  computed : {
    ...mapGetters({
      results : 'belvedereCalendars/getResults',
      arrivalDate : 'belvedereCalendars/getArrivalDate',
      departureDate : 'belvedereCalendars/getDepartureDate',
      nights : 'belvedereCalendars/getNights',
    })
  },


  methods : {
    close(){
      this.$emit('closeSearchResults')
    }
  }
}
</script>

<style lang="scss" scoped>

.results {
  background-color: #fff;
  overflow-y: scroll;
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 2%;
  top: 0;
}

.searchResult{
  margin: 3%;
}

</style>
