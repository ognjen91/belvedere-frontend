<template lang="html">
  <div>
    <v-card>

      <v-img :src="room.profileImage? sourceFolder + room.profileImage.name : '/placeholder.jpg'" aspect-ratio="1.2" lazy-src='placeholder.jpg'></v-img>

      <v-card-title primary-title>
          <div>
            <h3 class="roomName  c1 fo2 spaced">{{room[`name_${currentLocale}`]}}</h3>
            <p class="cf">{{room[`slogan_${currentLocale}`]}}</p>
            <div>
              <p class='mb-1 cf'>{{room.noOfBeds}}  {{room.noOfBeds>1? $t('previews.beds') : $t('previews.bed')}}</p>
              <p class='cf' v-if="room.startingPrice">{{ $t('previews.startingWith')}} {{room.startingPrice }}&euro;  </p>
             </div>
          </div>
      </v-card-title>

      <v-card-actions>
          <v-btn :to="localePath({ name: 'rooms-id', params: {id: room.id} })" :color="c1" dark nuxt>{{$t('previews.goMsg')}}</v-btn>
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
