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
    <p><span v-if="apartments.length">{{apartments.length}}  {{ apartments.length>1? $t('previews.apartments') :  $t('previews.apartment')}}
      <span v-if='rooms.length'>| </span></span><span v-if='rooms.length'>{{rooms.length}}  {{ rooms.length>1? $t('previews.rooms') :  $t('previews.room')}}</span></p>
</v-layout>


<v-layout wrap  py-5 column align-center>

    <v-flex  class='desc'>
      <p class='cf'>{{facility[`description_${currentLocale}`]}}</p>
    </v-flex>


    <v-flex xs12 my-5 class='accomodation'>
      <v-layout justify-center>
        <v-flex xs12 md8>
          <RoomsAndApartments :rooms="rooms" :apartments='apartments' />
        </v-flex>

        <v-flex xs12 md3 style='height=100%;' class='basicInfo'>
          <v-layout column justify-center style='height=100% !important;' class='infoWrap'>
            <v-flex mb-4>
              <h3>{{ $t('friends.facility.basicInfoTitle') }}</h3>
            </v-flex>

            <v-flex>
                  <p class="mb-1">  {{ $t('friends.facility.address') }} : <span class="cf">{{facility.adress}}</span> </p>
                  <p class="mb-1">  {{ $t('friends.facility.owner') }} : <span class="cf">{{owner.name}}</span></p>

                  <v-layout my-5>
                    <v-icon class='pr-2' color="rgba(60, 90, 152, 1)">fab fa-facebook-square</v-icon>
                    <v-icon>fab fa-instagram</v-icon>
                  </v-layout>


                  <v-btn small :to="{ name: 'friends-facility-contact', params: {facility : this.facility.id} }" >
                    <v-icon small>far fa-envelope</v-icon> &nbsp; <span class="c1"> {{ $t('friends.facility.contactButtonText') }}! </span>
                  </v-btn>
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
import Slider from '@/components/otherFacilities/Slider.vue'
import RoomsAndApartments from '@/components/otherFacilities/RoomsAndApartments.vue'
import Gallery from '@/components/otherFacilities/Gallery.vue'
import BlogPreview from '@/components/otherFacilities/OtherBlogPreview.vue'

export default {

  layouts : 'freindsNoHeaderPadding',

  components : {

    Slider,
    RoomsAndApartments,
    Gallery,
    BlogPreview


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
