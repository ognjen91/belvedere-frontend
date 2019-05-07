<template>
  <v-app>
    <!-- <v-img src="/logo.png" class='logo'></v-img> -->
    <img src="/logo.png" class="logo" alt="" href="/">
  <Header />


  <!-- <v-container> -->
    <nuxt class="wrap" />
  <!-- </v-container> -->

  <Footer />
</v-app>
</template>


<script>
import Header from '@/components/main/Header.vue'
import Footer from '@/components/main/Footer.vue'
export default {
  components : {
    Header,
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
  padding-top: 6.5%;
}

</style>
