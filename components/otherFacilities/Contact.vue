<template lang="html">

  <div>

    <v-btn small  @click='showForm=true'>
      <v-icon small>far fa-envelope</v-icon> &nbsp; <span class="c1"> {{ $t('friends.facility.contactButtonText') }}! </span>
    </v-btn>

  <transition
  enter-active-class="animated flipInX"
  leave-active-class="animated fadeOut"
  mode="out-in"
  duration='500'>
  <div class='otherContactForm' v-if="showForm">
    <v-icon class='closeForm' @click='showForm = false'>fas fa-times</v-icon>
    <Form :facility-id='facilityId'  :facility="facility" />
  </div>
</transition>
</div>

</template>

<script>
import Form from '@/components/contact/Form.vue'
export default {

  props : ['facility-id', 'facility'],

  components : {
    Form
  },

  data(){
    return{
      showForm : false
    }
  }

}
</script>

<style lang="scss" scoped>
  .otherContactForm{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh !important;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 10000;
  }

  .closeForm{
    position: fixed;
    top: 1%;
    left: 1%;
  }

</style>
