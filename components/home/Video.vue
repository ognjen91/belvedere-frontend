<template lang="html">
  <v-layout class='videoLayout'>
    <v-flex xs12 md10 offset-md1 class="videoCol">
      <iframe class="videoAb" src="https://www.youtube.com/embed/D0WuL5jjzOE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.videoLayout{
  background-color: #F5EBEF;
}

.videoCol{
  // border: $blub;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 0;
  @media screen and (min-width: 768px){
    // padding: 1% 0;
  }

& iframe {
  width: 90vw;
  height: 50.8vw;

  @media screen and (min-width: 768px){
    width: 82vw;
    height: 46vw;
  }

}

}

</style>
