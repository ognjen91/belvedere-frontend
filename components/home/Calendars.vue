<template>
<v-layout row wrap justify-center py-lg4 class="homeCalendars py-5" >





  <v-flex xs12 sm6 lg4 class='homeCalendar px-2' >
    <Calendar :key="1" :label="$t('homepage.calendars.arrivalDate')"  />
  </v-flex>


  <v-flex xs12 sm6 lg2 class='homeCalendar px-2'>
    <v-text-field
                :label="$t('homepage.calendars.numberOfNights')"
                placeholder="Number of nights"
                v-model='nights'
                type="number"


              ></v-text-field>

  </v-flex>

  <v-flex xs12 sm6 lg3 class="d-flex px-2 justify-center">
    <v-btn :color='c3' dark class='searchBtn' @click="search">{{ $t('homepage.calendars.search') }}</v-btn>
  </v-flex>




</v-layout>
</template>


<script>
  import Calendar from './Calendar.vue'
  export default {
    components : {
      Calendar
    },

    data(){
      return{

          }
      },

  computed : {
    nights : {
      get : function(){
        return this.$store.getters['belvedereCalendars/getNights']
      },

      set : function(newVal){
        this.$store.commit('belvedereCalendars/SET_NIGHTS', newVal)
      }
    }
  },

  methods : {
    search(){
      this.$store.commit('belvedereCalendars/DO_SEARCH')
    }
  }

  }
</script>

<style lang='scss'>

.homeCalendar{
  display: flex;
  align-items: center;
}


.searchBtn{
  letter-spacing: 2px;
}

</style>
