<template lang="html">
  <div>
    <v-card>
      <v-img :src="facility.profileImage? sourceFolder + facility.profileImage.name : '/placeholder.jpg'" aspect-ratio="1.2" lazy-src='placeholder.jpg'></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-2">{{facility.name_sr}}</h3>
          <div >
            <p class='mb-1'>
              <span class="cf" v-if="facility.noOfRooms">{{facility.noOfRooms}} soba <span v-if="facility.noOfApartments">|</span></span>
              <span class="cf" v-if="facility.noOfApartments">{{facility.noOfApartments}} apartmana</span>
            </p>
           </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn nuxt :to="{ name: 'friends-facility', params: {facility: facility.id} }"><span class="c1">Pogledajte</span></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props : {
    facility : {
      Type: Object,
      Required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
