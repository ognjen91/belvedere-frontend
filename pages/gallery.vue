<template lang="html">
  <v-container class="galleryPage">
    <v-layout justify-center mb-5>
      <h1>Galerija</h1>
    </v-layout>

    <v-layout>
      <v-flex xs12>
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
      return this.$store.getters['belvedere/getFacility'].images.map(image=> this.sourceFolder + image.name);

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
