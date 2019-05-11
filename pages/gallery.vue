<template lang="html">
  <v-container class="galleryPage">
    <v-layout justify-center mb-5>
      <h1>{{ $t('gallery.title') }}</h1>
    </v-layout>

    <v-layout>
      <v-flex xs12 v-if="images.length">
       <gallery :images="images" :index="index" @close="index = null"></gallery>


       <v-layout wrap justify-center class="imgWrap">

        <v-img
        lazy-src="/placeholder.jpg"
        aspect-ratio="1.8"
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        :src="image"
        @click="index = imageIndex"
        ></v-img>

      </v-layout>
      </v-flex>

      <v-flex v-else>
        <h3 class='text-xs-center'>{{ $t('gallery.noImagesMsg') }}...</h3>
      </v-flex>
    </v-layout>


  </v-container>
</template>

<script>
export default {
  layout: 'pages',


  data(){
    return {
      index: null
    }
  },
  computed : {
    images(){
      let images = this.$store.getters['belvedere/getFacility'].images
      if(images) return images.map(image=> this.sourceFolder + image.name);
      return []

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
