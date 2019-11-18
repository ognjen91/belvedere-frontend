<template lang="html">
  <v-layout wrap class="bottomBoxes" px-2>
    <v-flex v-for="i in 4" :key="i" xs12 md3 py-1 class='bottomBox'>
      <v-layout>
        <v-flex>
          <div class="bottomBoxImageHolder">
            <img :src='url + "/" + images[i-1]' class='mb-4'>
          </div>
        </v-flex>
      </v-layout>
      <h4 class='fo2 text-xs-center'>
      {{ $t(`bottomBoxes.box${i}.title`) }}
    </h4>
      <p class='fo2 cf text-xs-center px-3'>
        {{ $t(`bottomBoxes.box${i}.text`) }}
      </p>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  data(){
    return{
      images : ['sunrise.png', 'wifi.png', 'car.png', 'boat.png']
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

    &:not(:last-child){

    @media screen and (min-width: $md){
      border-right: 1px solid rgba(187, 159, 185, 0.85);
    }
    }

    & p{
      font-size: 1.25em;
    }

  }


  .bottomBoxImageHolder{
    @include flexCenterImg(24%);

    @media screen and (min-width: $md){
      @include flexCenterImg(22%);

    }
  }
</style>
