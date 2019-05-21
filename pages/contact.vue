<template lang="html">
<v-container>
  <v-layout wrap>

<v-flex xs12 md5  mb-5 class="contactInfo">

      <h2 class="text-xs-center">{{facility.name_sr}}</h2>

      <p>Manastirska 2</p>
      <p>85340 {{ $t('contact.hnMne') }}</p>
      <p>{{facility.phone1}}</p>
      <p>{{facility.phone2}}</p>


      <v-layout align-center  column class='map'>
        <v-flex xs10 offset-xs1 md12 offset-md0  class="mapHolder">
            <a href="https://www.google.com/maps/place/Belvedere/@42.4532405,18.5374194,17z/data=!3m1!4b1!4m5!3m4!1s0x134c3b714dfb9461:0x3690d4c167908a6f!8m2!3d42.4532405!4d18.5396081">
            <img src="/mapa.jpg" alt="">
          </a>
        </v-flex>
      </v-layout>



</v-flex>

<ContactForm facility-id=1 />


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
