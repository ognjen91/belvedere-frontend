<template lang="html">
  <div>
    <v-card>

       <v-img :src="apartment.profileImage? sourceFolder + apartment.profileImage.name : '/placeholder.jpg'" aspect-ratio="1.2" lazy-src='placeholder.jpg'></v-img>

      <v-card-title primary-title>
          <div>
            <h3 class="apartmentName spaced mb-2 cf fo2">{{apartment.name_sr}}</h3>
            <div>
              <p class='mb-1 c1'>{{apartment.noOfRooms}} sobe | {{apartment.noOfBeds}} kreveta</p>
              <p class="c1">počev od 50&euro;  </p>           </div>
          </div>
      </v-card-title>

      <v-card-actions>
          <v-btn :to="{ name: 'apartments-id', params: {id: apartment.id} }" nuxt><span class='c1'>Pogledajte</span></v-btn>
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
