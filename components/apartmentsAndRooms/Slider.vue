<template lang="html">
  <div>
    <no-ssr>

<carousel :per-page="3" :scrollPerPage="false" :paginationEnabled="false" autoplay :speed="3000"  :loop="true" :autoplay-timeout="6000" :navigation-enabled="false">
  <slide v-for='slide in initializedSlides' :key="slide.name">
    <v-img :src="slide.isInitial? slide.src : sourceFolder + slide.name" aspect-ratio="2.2" lazy-src='/placeholder.jpg'></v-img>

  </slide>
</carousel>

</no-ssr>
</div>


</template>


<script>
    export default {
      props : {
        slides : {
          Type : Array,
          Required : false
        }
      },

      data(){
        return {
          initializedSlides : [

          ]
        }
      },

      mounted(){
        this.slides.forEach(slide => slide.isInitial = false)
        this.initializedSlides = [...this.initializedSlides, ...this.slides]
      }

    }
</script>


<style lang="css" scoped>

</style>
