<template lang="html">
  <div>
    <v-parallax dark :src="image? sourceFolder + image.name : '/placeholder.jpg'"  height=200>
      <v-layout align-center column justify-end class='insideParallax'>
        <div>
         <h1>
           {{object.name_sr}}
         </h1>
         <h4 py-2><span v-if="object.type=='apartment'">{{object.noOfRooms}} sobe |</span> {{object.noOfBeds}} kreveta</h4>
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
