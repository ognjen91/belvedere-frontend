<template lang="html">
  <div>
    <v-card>

      <v-img :src="room.profileImage? sourceFolder + room.profileImage.name : '/placeholder.jpg'" aspect-ratio="1.2" lazy-src='placeholder.jpg'></v-img>

      <v-card-title primary-title>
          <div>
            <h3 class="roomName mb-2 c1 fo2 spaced">{{room.name_sr}}</h3>
            <div>
              <p class='mb-1 cf'>{{room.noOfBeds}} kreveta </p>
              <p class='cf'>počev od 50&euro;  </p>
             </div>
          </div>
      </v-card-title>

      <v-card-actions>
          <v-btn :to="{ name: 'rooms-id', params: {id: room.id} }" :color="c1" dark nuxt>Pogledajte</v-btn>
      </v-card-actions>

    </v-card>
  </div>
</template>

<script>
export default {
  props : {
    room : {
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
