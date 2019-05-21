<template>


    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            :label="label"
            prepend-icon="far fa-calendar-alt"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date"  first-day-of-week=1 :event-color="c3" header-color="primary" :color="c3" :locale='currentLocale' scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal = false">{{ $t('homepage.calendars.cancel') }}</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props : {


    label : {
      Type: String,
      Required : false,
      default : ""
    }
  },


  data: () => ({
    menu: false,
    modal: false,
    menu2: false,
    // date : this.activeDate
  }),

  computed : {
    date : {
      get : function(){
        return this.$store.getters['belvedereCalendars/getArrivalDate']
      },
      set : function(newVal){
        this.$store.commit('belvedereCalendars/SET_ARRIVAL_DATE', newVal);
      }
    },



  },



}
</script>

<style lang="scss">
  .calendarDialog{
    background-color: rgba(122, 173, 160, 0);
  }
</style>
