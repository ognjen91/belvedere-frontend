<template>
<v-date-picker v-model="dates" multiple first-day-of-week=1 color="rgb(136, 39, 187)" no-title readonly></v-date-picker>
</template>

<script>
export default {
  props: {
    dates: {
      Type: Array
    }
  },


}
</script>
