<template lang="html">
  <div>
    <v-parallax dark :src="image? sourceFolder + image.name : '/placeholder.jpg'"  height=200>
      <v-layout align-center column justify-end class='insideParallax'>
        <div>
         <h1 class="spaced center--text">
           {{object.name_sr}}
         </h1>
         <h4 py-2 class="center--text">
           <span v-if="typeof object.noOfRooms!=='undefined'">{{object.noOfRooms}} {{ object.noOfRooms>1? $t('previews.rooms') :  $t('previews.room')}} |
           </span> {{object.noOfBeds}} {{object.noOfBeds>1? $t('previews.beds') : $t('previews.bed')}},
           {{object.area}}m<sup>2</sup></h4>
        </div>
      </v-layout>
    </v-parallax>
  </div>
</template>
<!-- <Amenities :object='object' class="paralaxContent" /> -->

<script>
import Parallax from 'vue-parallaxy'
import Amenities from '@/components/apartmentsAndRooms/Amenities.vue'


export default {
  components: {
    Parallax,
    Amenities
  },
  props : {
    image : {
      Required : false,
      default : false
    },

    object : {
      Type: Object
    }
  }
}
</script>

<style lang="scss" scoped>

.insideParallax{
  width: 100vw;

  &>div{
    margin-bottom:1%;
  }
}

.paralaxContent{
  border: $redb;
  position: relative;
  top: 3%;
  z-index: 10;
}
</style>
