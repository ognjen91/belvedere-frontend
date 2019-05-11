<template>
  <v-app>
    <!-- <v-img src="/logo.png" class='logo'></v-img> -->
    <img src="/logo.png" class="logo" alt="" href="/">
  <Header />


  <!-- <v-container> -->
    <nuxt class="wrap" />
  <!-- </v-container> -->
    <BottomBoxes />
  <Footer />
</v-app>
</template>


<script>
import Header from '@/components/main/Header.vue'
import BottomBoxes from '@/components/main/BottomBoxes.vue'
import Footer from '@/components/main/Footer.vue'
export default {
  components : {
    Header,
    BottomBoxes,
    Footer
  }
}
</script>

<style scoped lang="scss">

.logo{
  position: absolute;
  top: 0.3%;
  left: 4%;
  z-index: 10000;
  width: 150px;
}

.wrap{
  padding-top: 16.5%;

  @media screen and (min-width: $md){
    padding-top: 7.5%;

  }
}

</style>
