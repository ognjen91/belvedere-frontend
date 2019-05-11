<template>
  <div>
    <h6 class='subtitle cf'>{{ $t('facility.bookingRatingText') }} <span><strong>{{bookingRating}}</strong></span></h6>
    <v-rating readonly small color="rgb(238, 255, 42)" length=10 v-model="bookingRating"></v-rating>
  </div>
</template>

<script>
  export default {
    data: () => ({
    }),

    props : ['bookingRating']
  }
</script>
