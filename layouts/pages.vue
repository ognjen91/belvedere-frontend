<template>
  <v-app>
    <LogoAndLanguage />
     <Header />


  <!-- <v-container> -->
    <nuxt class="wrap nonDefaultLayout" />
  <!-- </v-container> -->
    <BottomBoxes />
  <Footer />
</v-app>
</template>


<script>
import Header from '@/components/main/Header.vue'
import LogoAndLanguage from '@/components/main/LogoAndLanguage.vue'
import BottomBoxes from '@/components/main/BottomBoxes.vue'
import Footer from '@/components/main/Footer.vue'
export default {
  components : {
    Header,
    LogoAndLanguage,
    BottomBoxes,
    Footer
  }
}
</script>

<style scoped lang="scss">





</style>
