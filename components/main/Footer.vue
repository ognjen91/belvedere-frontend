<template>
<v-footer dark height="auto">
  <v-card class="flex" flat tile>
    <v-card-title class="footerHold">
      <strong class="subheading white--text">Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn v-for="(icon,i) in icons" :key="i" class="mx-3" dark icon :href="icon.link">
        <v-icon size="24px" color="white">{{ icon.icon }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-actions class="justify-center white--text">
      &copy;{{new Date().getFullYear()}} — <strong class="spaced white--text">sajt napravio Ognjen</strong>
    </v-card-actions>
  </v-card>
</v-footer>
</template>





<script>
  export default {
    data: () => ({
      icons: [
        {icon: 'fab fa-facebook', link:'http://www.facebook.com/belvederehn'},
        {icon : 'fab fa-instagram', link : 'http://www.instagram.com/belvederehn'}

      ]
    })
  }
</script>

<style lang="scss">
  .footerHold{
    background-color: $c1;
    color: #fff;
  }
</style>
