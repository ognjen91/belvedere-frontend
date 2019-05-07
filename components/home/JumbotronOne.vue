<template lang="html">
   <v-layout column justify-center  class="entryText">


    <h2 class='jumboHeading fo2'>Kraljevski odmor</h2>
    <h5 class='mb-5 title fo1 spaced'>Nadomak centra Herceg Novog</h5>

    <p class="cf">Lu fugiat possumus. Aliqua senserit se quem fugiat, si quae velit tempor
      cernantur qui dolor deserunt te illustriora ita tamen aliquip deserunt ne est
      incididunt sempiternum, ingeniis nisi magna ingeniis velit, eram comprehenderit
      laboris multos ullamco ab cernantur eram minim excepteur labore. Est export
      arbitror possumus.In id dolore nescius si sed ut eruditionem, singulis sunt quem
      do quid ubi mentitum reprehenderit in quamquam. Esse senserit te quae quid.
      Mandaremus exquisitaque et incurreret ne magna id offendit in export, pariatur
      se excepteur, e dolore relinqueret.</p>

          <v-btn :to="{ name: 'rooms', params: {} }" nuxt><span class='c1'>Pogledajte sve sobe i apartmane</span></v-btn>


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
