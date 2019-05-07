<template lang="html">
<v-layout>
  <v-flex xs12>
   <gallery :images="images" :index="index" @close="index = null"></gallery>


    <v-layout wrap>

    <v-img
    lazy-src="/placeholder.jpg"
    aspect-ratio="1.8"
   class='image'
    v-for="(image, imageIndex) in images"
    :key="imageIndex"
    :src="image"
    @click="index = imageIndex"
    ></v-img>
  </v-layout>
  </v-flex>
</v-layout>

</template>





<script>
export default {
  props : {
    images : {
      Type: Array,
      Required: true
    }
  },
  data(){
    return {
      index: null
    }
  },



}
</script>

<style lang="scss" scoped>
.image {
  float: left;
  margin: 5px;
  @media screen and (min-width:786px){
    width: 30%;
  }

  @media screen and (min-width:992px){
    width: 20%;
  }




}


</style>
