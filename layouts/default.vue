<template>
  <v-app>
    <!-- <v-img src="/logo.png" class='logo'></v-img> -->
    <img src="/logo.png" class="logo" alt="">
  <Header />

  <!-- <v-container> -->
    <nuxt />
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

<style>

.logo{
  position: absolute;
  top: 0.3%;
  left: 4%;
  z-index: 10000;
  width: 150px;
}

</style>
