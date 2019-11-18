<template lang="html">
  <div>
    <v-card>
      <nuxt-link :to="localePath({ name: 'friends-facility', params: {facility: facility.id} })">
      <v-img :src="facility.profileImage? sourceFolder + facility.profileImage.name : '/placeholder.jpg'" aspect-ratio="1.2" lazy-src='placeholder.jpg'></v-img>
      </nuxt-link>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-2">{{facility[`name_${currentLocale}`]}}</h3>
          <p class="cf">{{facility[`slogan_${currentLocale}`]}}</p>

          <div >
            <p class='mb-1'>
              <span class="cf" v-if="facility.noOfRooms">{{facility.noOfRooms}}  {{ facility.noOfRooms>1? $t('previews.rooms') :  $t('previews.room')}}
                 <span v-if="facility.noOfApartments">|</span></span>
              <span class="cf" v-if="facility.noOfApartments">{{facility.noOfApartments}}  {{ facility.noOfApartments>1? $t('previews.apartments') :  $t('previews.apartment')}}</span>
            </p>
           </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn nuxt :to="localePath({ name: 'friends-facility', params: {facility: facility.id} })"><span class="c1">Pogledajte</span></v-btn>
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
