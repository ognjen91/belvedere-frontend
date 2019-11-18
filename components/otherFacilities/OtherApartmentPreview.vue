<template lang="html">
  <div>
    <v-card>
      <nuxt-link :to="localePath({ name: 'friends-facility-unitType-unitId', params: {id: apartment.facility_id, unitType : 'apartments', unitId:apartment.id} })">  
       <v-img :src="apartment.profileImage? sourceFolder + apartment.profileImage.name : '/placeholder.jpg'" aspect-ratio="2.5" lazy-src='placeholder.jpg'></v-img>
     </nuxt-link>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-2">{{apartment[`name_${currentLocale}`]}}</h3>

          <div>
            <p class='mb-1 cf'>{{apartment.noOfRooms}} {{ apartment.noOfRooms>1? $t('previews.rooms') :  $t('previews.room')}} | {{apartment.noOfBeds}} {{apartment.noOfBeds>1? $t('previews.beds') : $t('previews.bed')}}</p>
            <p class="cf">{{ $t('previews.startingWith')}} 50&euro;  </p>           </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <!-- <v-btn nuxt :href="'/apartments/'+apartment.id" dark color="blue">Pogledajte</v-btn> -->
        <v-btn  outline :color="c1" :to="localePath({ name: 'friends-facility-unitType-unitId', params: {id: apartment.facility_id, unitType : 'apartments', unitId:apartment.id} })" >
          <span class="c1">{{$t('previews.goMsg')}}</span>
          </v-btn>

      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props : {
    apartment : {
      Type: Object,
      Required: true
    }
  },
  data() {
    return {
      card_text : 'Naša najljepša soba u prizemlju spremna samo za vas'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
