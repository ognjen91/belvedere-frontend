<template lang="html">
  <div class="otherBlog">

    <v-icon class="closeBlog" @click='close'>fas fa-times-circle</v-icon>
    <v-container>

      <v-layout mb-4>
        <h2>{{post.title}}</h2>
      </v-layout>


      <v-layout justify-center>
        <v-flex xs>
          <div v-html="post.content"></div>
        </v-flex>
      </v-layout>

    </v-container>


  </div>
</template>

<script>
export default {
  props : ['id'],


  data(){
    return {
      post : {

      }
    }
  },

  methods : {
    close(){
      this.$emit('close', {})
    }
  },

  async mounted(){
    try {
    let post = await this.$axios.$get('blogs/' + this.id)
    this.post = post.data;
  } catch (error){
    console.log(error);
  }
  }
}
</script>

<style lang="css" scoped>

  .otherBlog{
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    border: $redb;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 1000;
    overflow-y: scroll;
  }

  .closeBlog{
    position: fixed;
    top: 1%;
    left: 2%;
  }

</style>
