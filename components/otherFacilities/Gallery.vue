<template lang="html">
  <!-- <v-container class="galleryPage"> -->
<div>

    <v-layout justify-center mb-5>
      <h1>{{ $t('friends.facility.galleryTitle') }}</h1>
    </v-layout>

    <v-layout>
      <v-flex xs12>
       <gallery :images="fixedImages" :index="index" @close="index = null"></gallery>


       <v-layout wrap justify-center class="imgWrap">

        <v-img
        lazy-src="/placeholder.jpg"
        aspect-ratio="1.8"
        class="image"
        v-for="(image, imageIndex) in fixedImages"
        :key="imageIndex"
        :src="image"
        @click="index = imageIndex"
        ></v-img>

      </v-layout>
      </v-flex>
    </v-layout>


  </div>
  <!-- </v-container> -->
</template>

<script>
export default {

  props : {
    images : {
      Type: Array,
      required : false,
      default : []
    }
  },

  data(){
    return {
      index: null
    }
  },
  computed : {
    fixedImages(){
      if(this.images.length) return this.images.map(image=> this.sourceFolder + image.name);
      return [];
    }
  }
}
</script>

<style lang="scss" scoped>

.galleryPage{
  min-height: 85vh;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;

  width: 35%;

  @media screen and (min-width:786px){
    width: 25%;
  }

  @media screen and (min-width:992px){
    width: 20%;
  }
}

</style>
