<template lang="html">
  <div>
    <v-card>

       <nuxt-link :to="localePath({ name: 'apartments-id', params: {id: apartment.id} })">
         <v-img :src="apartment.profileImage? sourceFolder + apartment.profileImage.name : '/placeholder.jpg'" aspect-ratio="1.2" lazy-src='placeholder.jpg'></v-img>
       </nuxt-link>

      <v-card-title primary-title>
          <div>
            <h3 class="apartmentName spaced cf fo2">{{apartment[`name_${currentLocale}`]}}</h3>
            <p class="c1">{{apartment[`slogan_${currentLocale}`]}}</p>

            <div>
              <p class='mb-1 c1'>{{apartment.noOfRooms}} {{ apartment.noOfRooms>1? $t('previews.rooms') :  $t('previews.room')}} | {{apartment.noOfBeds}} {{apartment.noOfBeds>1? $t('previews.beds') : $t('previews.bed')}}</p>
              <p class="c1" v-if='apartment.startingPrice'>{{ $t('previews.startingWith')}} {{apartment.startingPrice}}&euro;  </p>           </div>
          </div>
      </v-card-title>

      <v-card-actions>
          <v-btn :to="localePath({ name: 'apartments-id', params: {id: apartment.id} })" nuxt :color='c1' outline><span class='c1'>{{$t('previews.goMsg')}}</span></v-btn>
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
