<template lang="html">
  <div>
    <v-card class='thePost'>
      <v-img :src="room.profileImage? sourceFolder + room.profileImage.name : '/placeholder.jpg'" aspect-ratio="2.5" lazy-src='placeholder.jpg'></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-2 cf">{{room[`name_${currentLocale}`]}}</h3>
          <div>
            <p class='mb-1'>{{room.noOfBeds}} {{room.noOfBeds>1? $t('previews.beds') : $t('previews.bed')}}</p>
            <p>{{ $t('previews.startingWith')}} 50&euro;  </p>
           </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <!-- <v-btn nuxt :href="'/rooms/'+room.id" dark color="orange">Pogledajte</v-btn> -->
        <v-btn :color="c1" dark :to="localePath({ name: 'friends-facility-unitType-unitId', params: {id: room.facility_id, unitType : 'rooms', unitId: room.id} })" >{{$t('previews.goMsg')}}</v-btn>
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
.thePost{
  width: 100%;
}
</style>
