<template lang="html">
<v-layout>
  <v-flex xs12>
   <gallery :images="images" :index="index" @close="index = null"></gallery>


    <v-layout wrap>

    <v-img
    lazy-src="/placeholder.jpg"
    aspect-ratio="1.8"
    :class="{ roomImage : galleryType == 'room', apartmentImage : galleryType == 'apartment'}" class='image'
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
    },
    galleryType : {
      Required : false,
      Type: String,
      default : "apartment" //can also be "room"
    }
  },
  data(){
    return {
      index: null
    }
  },

  mounted(){
    if (!['room', 'apartment'].includes(this.galleryType)) this.galleryType = "apartment"
  }
}
</script>

<style lang="scss" scoped>
.image {
  float: left;
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center center;
  // border: 1px solid #ebebeb;
  margin: 5px;




}

.roomImage {
  width: 35%;

  @media screen and (min-width:786px){
    width: 30%;
  }

  // @media screen and (min-width:992px){
  //   width: 20%;
  // }
}

.apartmentImage {
  width: 35%;

  @media screen and (min-width:786px){
    width: 25%;
  }

  @media screen and (min-width:992px){
    width: 20%;
  }
}
</style>
