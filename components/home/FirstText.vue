<template lang="html">
   <v-layout column justify-center  class="entryText">


    <h2 class='jumboHeading fo2'>{{ $t('homepage.firstText.title') }}</h2>
    <h5 class='mb-5 title fo1 spaced'>{{ $t('homepage.firstText.subtitle') }}</h5>

    <p class="cf">{{ $t('homepage.firstText.text') }}</p>

          <!-- <v-btn :to="{ name: 'rooms', params: {} }" nuxt><span class='c1'>Pogledajte sve sobe i apartmane</span></v-btn> -->


</v-layout>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
 .entryText{


   height: 100%;

   & p{
     letter-spacing: 1px;
     line-height: 1.15;
     margin-bottom: 5%;
   }

   @media screen and (min-width: $md){
     border-right: 1px solid rgba(93, 107, 105, 0.2);
     padding-right: 5%;
   }
 }

 .jumboHeading{
   font-size: 2.75em;
 }
</style>
