<template lang="html">
<v-container>
<v-layout wrap class="mb-4">


<v-flex xs12 md6 class='aboutText'>

  <h1 class="text-center"> {{ $t('about.title') }}</h1>
  <p class='cf'> {{ $t('about.text') }}</p>
</v-flex>

<v-flex xs12 md6 px-3>
  <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(image, i) in images"
              :key="i"
              xs6
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="url + '/' + image"
                  :lazy-src="url + '/placeholder.jpg'"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

</v-flex>


</v-layout>



</v-container>
</template>

<script>
import metaOf from '@/meta/about.js'
export default {
  layout: 'pages',

  /*SEO*/
  head () {
     return {
       title: 'Belvedere: About us',
       meta: [
         { hid: 'description', name: 'description', content: 'Learn more about vision behind Belvedere Apartments, apartments with beautiful seaview near city center.' },
         //TWITTER & FACEBOOK
         ...metaOf(this).twitter, ...metaOf(this).facebook,


       ]
     }
   },

  /* end SEO*/


  data(){
    return{
      images : ['about1.jpg', 'about2.jpg', 'about3.jpg', 'about4.jpg']
    }
  }

}
</script>

<style lang="scss" scoped>

.aboutText{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3%;
}
</style>
