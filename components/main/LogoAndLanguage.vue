<template lang="html">
  <div class="logoNlang">
    <img src="/logo.png" class="logo" alt="">
    <div class="flags">
    <nuxt-link
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"><img :src="'/'+locale.name+'.png'" class='flag'></nuxt-link>
  </div>
  </div>   
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
