<template lang="html">
  <div>
    <v-card>
       <v-img :src="apartment.profileImage? sourceFolder + apartment.profileImage.name : '/placeholder.jpg'" aspect-ratio="2.5" lazy-src='placeholder.jpg'></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-2 orange--text">{{apartment.name_sr}}</h3>
          <div>
            <p class='mb-1 orange--text'>{{apartment.noOfRooms}} sobe | {{apartment.noOfBeds}} kreveta</p>
            <p class="orange--text">počev od 50&euro;  </p>           </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <!-- <v-btn nuxt :href="'/apartments/'+apartment.id" dark color="blue">Pogledajte</v-btn> -->
        <v-btn color="rgb(235, 128, 147)" dark :to="{ name: 'friends-facility-unitType-unitId', params: {id: apartment.facility_id, unitType : 'apartments', unitId:apartment.id} }" >Pogledajte</v-btn>

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
