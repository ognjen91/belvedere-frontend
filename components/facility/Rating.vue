<template>
  <div>
    <h6>Ocjena na Booking.com <span><strong>{{rating}}</strong></span></h6>
    <v-rating readonly small color="rgb(238, 255, 42)" length=10 v-model="rating"></v-rating>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rating: 9.2
    })
  }
</script>
