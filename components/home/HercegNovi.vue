<template lang="html">
<v-layout wrap align-center>
    <v-flex xs12 md4 class="novi" style='height:100%;'>
      <!-- <v-layout column justify-center  class="entryText"  style='height:100%;'> -->

       <h2 class='mb-1 dislpay-2'>Herceg Novi</h2>
       <h5 class='mb-5 title'>200 sunčanih dana godišnje</h5>

       <p class="cf">Lu fugiat possumus. Aliqua senserit se quem fugiat, si quae velit tempor
         cernantur qui dolor deserunt te illustriora ita tamen aliquip deserunt ne est
         incididunt sempiternum, ingeniis nisi magna ingeniis velit, eram comprehenderit
         laboris multos ullamco ab cernantur eram minim excepteur labore. Est export
         arbitror possumus.</p>
   <!-- </v-layout> -->
    </v-flex>


    <v-flex xs12 md8 class="noviImages">
     <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', height: '200px' }"
      ></div>
    </v-flex>
    </v-layout>
</template>

<script>
// import VueGallery from 'vue-gallery';

export default {
  data: function () {
      return {
        images: [
          '/hn1.jpg',
          '/hn2.jpg',
          '/hn3.jpg',
          '/hn4.jpg',
        ],
        index: null
      };
    },

    components: {
     // 'gallery': VueGallery
   },
}
</script>


<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;

    width: 35%;
  }

  .novi{
    padding: 0 5% 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .noviImages{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .entryText{


    height: 100%;

    & p{
      letter-spacing: 1px;
      line-height: 1.15;
    }
  }

</style>
