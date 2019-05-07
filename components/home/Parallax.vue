<template>
  <v-flex>

<v-parallax dark src="https://q-ak.bstatic.com/images/hotel/max1024x768/815/81519176.jpg" height=350>
  <v-layout align-center column justify-center>
    <h1 class="display-2 font-weight-thin mb-3">Specijalna ponuda</h1>
    <h4 class="title mb-3"><strong>20% popusta za rezervacije sa sajta</strong></h4>

    <v-btn><span class="c1">Rezervišite sada</span></v-btn>
  </v-layout>
</v-parallax>

</v-flex>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  components: {
    Parallax
  }
}
</script>

<style lang="css" scoped>
</style>
