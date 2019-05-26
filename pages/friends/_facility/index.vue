<template lang="html">
<div>

<v-layout>
  <v-flex xs12 class="slajder">
  <Slider :slides='sliderSlides' />
</v-flex>
</v-layout>

<v-container>

<v-layout  column align-center>
    <h1>{{facility[`name_${currentLocale}`]}}</h1>
    <h2><strong>{{facility.place}}</strong></h2>
    <h3 class="cf">{{facility[`slogan_${currentLocale}`]}}</h3>
    <p><span v-if="apartments.length">{{apartments.length}}  {{ apartments.length>1? $t('previews.apartments') :  $t('previews.apartment')}}
      <span v-if='rooms.length'>| </span></span><span v-if='rooms.length'>{{rooms.length}}  {{ rooms.length>1? $t('previews.rooms') :  $t('previews.room')}}</span></p>
</v-layout>


<v-layout wrap  pt-5 pb-3 column align-center>

    <v-flex  class='desc'>
      <p class='cf'>{{facility[`description_${currentLocale}`]}}</p>
    </v-flex>


    <v-flex xs12  my-5 class='accomodation'>
      <v-layout justify-center wrap>
        <v-flex xs12 md8 mb-5>
          <RoomsAndApartments :rooms="rooms" :apartments='apartments' />
        </v-flex>

        <v-flex xs12 md4 style='height=100%;' class='basicInfo'>
          <v-layout  justify-center align-center wrap class='infoWrap' style='height=100% !important;'>
            <v-flex mb-4 xs12>
              <h3>{{ $t('friends.facility.basicInfoTitle') }}</h3>
            </v-flex>

            <v-flex xs12>
                  <p class="mb-1">  {{ $t('friends.facility.address') }} : <span class="cf">{{facility.address}}</span> </p>
                  <p class="mb-1">  {{ $t('friends.facility.owner') }} : <span class="cf">{{owner.name}}</span></p>

                  <v-layout my-5 wrap>
                    <v-btn v-if="facility.facebook" icon :href="'http://'+facility.facebook"><v-icon>fab fa-facebook-square</v-icon></v-btn>
                    <v-btn v-if="facility.instagram" icon :href="'http://'+facility.instagram"><v-icon mb-3>fab fa-instagram</v-icon></v-btn>
                    <v-btn v-if="facility.website" icon :href="'http://'+facility.website"><v-icon mb-3>fas fa-globe</v-icon></v-btn>
                  </v-layout>


                    <ContactButtonAndForm :facility-id="facility.id" />
            </v-flex>

          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

</v-layout>

<v-layout wrap>

      <v-flex xs12 md4 v-if="blogs.length">
        <h3 class='text-xs-center mb-3 cf'>{{ $t('friends.facility.ownersBlogTitle') }}</h3>

        <v-layout column align-center justify-center class='px-3'>
          <v-flex v-for='(post,i) in blogs' :key="i" xs10 md8 mb-4 v-if='i<3'>
            <BlogPreview :post="post" />
          </v-flex>
      </v-layout>

      </v-flex>

      <v-flex class="gallery px-2" xs12 md8 v-if="blogs.length">
        <div class='pt-3'>
          <Gallery :images="facility.images" />
        </div>
      </v-flex>

      <v-flex class="gallery px-1" xs12 v-else>
        <Gallery :images="facility.images" />
      </v-flex>

</v-layout>

</v-container>

</div>
</template>

<script>
import metaOf from '@/meta/friendsFacility.js'
import Slider from '@/components/otherFacilities/Slider.vue'
import RoomsAndApartments from '@/components/otherFacilities/RoomsAndApartments.vue'
import Gallery from '@/components/otherFacilities/Gallery.vue'
import BlogPreview from '@/components/otherFacilities/OtherBlogPreview.vue'
import ContactButtonAndForm from '@/components/otherFacilities/Contact.vue'

export default {

  layout : 'freindsNoHeaderPadding',

  /*HEAD*/
  head () {
     return {
       title: `Belvedere friends: ${this.facility.name_en}`,
       meta: [
         { hid: 'description', name: 'description', content: `${this.facility.description_en}` },
         //TWITTER & FACEBOOK
         ...metaOf(this).twitter, ...metaOf(this).facebook

       ]
     }
   },

  /*END HEAD*/

  components : {

    Slider,
    RoomsAndApartments,
    Gallery,
    BlogPreview,
    ContactButtonAndForm

  },


  computed : {
    facility(){
      return this.$store.getters['otherFacilities/getTheFacility'](this.$route.params.facility);
    },
    rooms(){
      return this.$store.getters['otherFacilities/getTheFacilityRooms'](this.$route.params.facility);
    },
    apartments(){
      return this.$store.getters['otherFacilities/getTheFacilityApartments'](this.$route.params.facility);
    },
    sliderSlides (){
      return this.$store.getters['sliders/getOtherFacilitySlider'](this.$route.params.facility);
    },
    owner(){
      return this.$store.getters['otherFacilities/getTheOwner'](this.facility.owner_id);
    }

  },

  async asyncData({$axios, params}){
    let blogs = await $axios.get('facilities/' + params.facility + "/blogs");
    return {blogs: blogs.data.data}
    },


  async fetch({$axios, params, store}){
    if (store.getters['otherFacilities/getTheFacility'](params.facility)['fullyLoaded']) return;
    try {
      let facility = await $axios.get("facilities/" + params.facility)
      store.commit('otherFacilities/SET_FULL_FACILITY',  {facility : facility.data})

      let {data} = await $axios.get('sliders/' + params.facility);
      store.commit('sliders/SET_OTHER_FACILITY_SLIDER', {data : data.data, id: params.facility});



    } catch (error) {
      // error({ statusCode: 404, message: 'Not found' })
      console.log(error);
    }
  },
}
</script>

<style lang="scss" scoped>
.slajder{
  // border: $greb;
}

.slajder{

}

.desc{
  // border: $redb;
  width: 50%;
}

.basicInfo{
  display: flex;
  align-items: center;
  padding-left: 4%;
}

.infoWrap{
  border-left: 1px solid rgb(194, 167, 177);
  padding-left: 5%;
}
</style>
