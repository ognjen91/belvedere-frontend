<template lang="html">
  <v-layout class="bottomBoxes">
    <v-flex v-for="i in 3" :key="i" xs12 md4 py-3 class='bottomBox'>
      <v-layout>
        <v-flex>
          <div class="bottomBoxImageHolder">
            <img :src='images[i-1]' class='mb-4'>
          </div>
        </v-flex>
      </v-layout>
      <p class='fo2 text-xs-center'>
        {{ $t(`bottomBoxes.box${i}.text`) }}
      </p>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  data(){
    return{
      images : ['foo.png', 'foo.png', 'foo.png']
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottomBoxes{
    margin-bottom: 4%;
  }

  .bottomBox{

    background-color: rgba(150, 138, 44, 0);
    @media screen and (min-width: $md){
      border-right: 1px solid rgba(187, 159, 185, 0.85);
    }

    & p{
      font-size: 1.25em;
    }

  }


  .bottomBoxImageHolder{
    @include flexCenterImg(50%);

    @media screen and (min-width: $md){
      @include flexCenterImg(22%);

    }
  }
</style>
