<template>
<v-date-picker v-model="dates" multiple first-day-of-week=1 :color="c1" no-title readonly :locale='currentLocale'></v-date-picker>
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
