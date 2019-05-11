<template lang="html">
  <v-layout wrap class="amenities"  pt-2 align-center justify-center>
    <v-flex v-if='object.kitchen' xs3 md2>
      <v-layout justify-center>
        <p class="amenity white--text">{{ $t('rooms.amenities.kitchen') }}</p> <v-icon color="white" small>fas fa-check</v-icon>
      </v-layout>
    </v-flex>
    <v-flex v-if='object.bathroom' xs3 md2>
      <v-layout justify-center>
        <p class="amenity white--text">{{ $t('rooms.amenities.bathroom') }}</p> <v-icon color="white" small>fas fa-check</v-icon>
      </v-layout>
    </v-flex>
    <v-flex v-if='object.terrcer' xs3 md2>
      <!-- !!!fix -->
      <v-layout justify-center>
        <p class="amenity white--text">{{ $t('rooms.amenities.terrace') }}</p> <v-icon color="white" small>fas fa-check</v-icon>
      </v-layout>
    </v-flex>
    <v-flex v-if='object.conditioner' xs3 md2>
      <v-layout justify-center>
        <p class="amenity white--text">{{ $t('rooms.amenities.conditioner') }}</p> <v-icon color="white" small>fas fa-check</v-icon>
      </v-layout>
    </v-flex>
    <v-flex v-if='object.tv' xs3 md2>
      <v-layout justify-center>
        <p class="amenity white--text">TV</p> <v-icon color="white" small>fas fa-check</v-icon>
      </v-layout>
    </v-flex>
    <v-flex v-if='object.wifi' xs3 md2>
      <v-layout justify-center>
        <p class="amenity white--text">WiFi</p> <v-icon color="white" small>fas fa-check</v-icon>
      </v-layout>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  props : {
    object : {
      Type: Object,
      Required : true
    }
  },

  data(){
    return {

  }
}
}
</script>

<style lang="scss" scoped>
.amenities{
  // background-color: rgba(191, 236, 219, 0.23);
  // background-color: $c205;
  background-color: $c1;

  &>div{
    // margin: 0 1%;
  }
}

.amenity{
  margin-right: 7%;
}

</style>
