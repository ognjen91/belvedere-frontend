<template lang="html">
<v-container>
  <v-layout wrap>

<v-flex xs12 md5  mb-5 class="contactInfo">

      <h2 class="text-xs-center">{{facility.name_sr}}</h2>

      <p>Manastirska 2</p>
      <p>85340 {{ $t('contact.hnMne') }}</p>
      <p>{{facility.phone1}}</p>
      <p>{{facility.phone2}}</p>
      <a :href="'mailto:'+facility.email" class="mb-4">{{facility.email}}</a>


      <v-layout align-center  column class='map'>
        <v-flex xs10 offset-xs1 md12 offset-md0  class="mapHolder">
            <a href="https://www.google.rs/maps/place/Apartments+Belvedere/@42.4533281,18.5373565,17z/data=!3m1!4b1!4m8!3m7!1s0x134c3b73f7913f65:0x657dad94bcfbf582!5m2!4m1!1i2!8m2!3d42.4533281!4d18.5395452">
            <img src="/mapa.jpg" alt="">
          </a>
        </v-flex>
      </v-layout>



</v-flex>

<ContactForm facility-id=1  :facility="facility" />


</v-layout>
</v-container>
</template>

<script>
import metaOf from '@/meta/about.js'
import ContactForm from '@/components/contact/Form.vue'
export default {

  layout : 'pagesNoBottomBoxes',


  /*HEAD*/
  head () {
     return {
       title: 'Belvedere Apartments : Contact',
       meta: [
         { hid: 'description', name: 'description', content: 'Contact us and we will reply soon. Special discounts for reservations from the website.' },
         //TWITTER & FACEBOOK
         ...metaOf(this).twitter, ...metaOf(this).facebook,

       ]
     }
   },

  /*END HEAD*/

  components : {
    ContactForm
  },


  computed : {
    facility(){
      return this.$store.getters['belvedere/getFacility']
    }
  },
}




</script>

<style lang="scss" scoped>

.contactInfo{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.map{
  // border: $redb;

  & img{
    width: 50%;
    display: block;
    margin: auto;
  }
}

</style>
