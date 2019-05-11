<template>
  <v-flex>

<v-parallax dark src="https://q-ak.bstatic.com/images/hotel/max1024x768/815/81519176.jpg" height=350>
  <v-layout align-center column justify-center>
    <h1 class="display-2 font-weight-thin mb-3">{{ $t('homepage.parallax.title') }}</h1>
    <h4 class="title mb-3"><strong>{{ $t('homepage.parallax.subtitle') }}</strong></h4>

    <v-btn :to='localePath("contact")' color='#fff' ><span class="c1">{{ $t('homepage.parallax.buttonText') }}</span></v-btn>
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
