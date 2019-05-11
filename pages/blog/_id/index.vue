<template lang="html">
  <v-container class='blog'>
    <v-layout align-center column mb-4>
      <h1>{{post.title}}</h1>
      <h3 class='cf fo2'>{{ $t('blog.writtenBy') }} <span>{{author.name}}</span> {{ $t('blog.onDate') }} {{post.created_at}}</h3>
    </v-layout>
    <v-layout my-5 px-5>
      <div v-html="post.content" id="post"></div>
    </v-layout>
  </v-container>
</template>

<script>
export default {

  layout : "pagesNoBottomBoxes",

  data(){
    return{
      post : {},
      author : {}
    }
  },

  async asyncData({$axios, params}){
    // console.log(context.app.route.params.id);
    try {
      let post = await $axios.get("blogs/" + params.id)
      // console.log(post);
      return {
        post : post.data.data,
        author : post.data.author
      }
    } catch (error) {
      console.log(error);
    }
  },

  mounted(){
    //FIXIN IMAGES URL - JS WAY (can be done in php too)
      // var theThis = this;
      // $("#post img").each(function(index){
      //   let link = $(this).attr('src');
      //   let fixedLink = link.slice(1);
      //   $(this).attr("src", theThis.theWebsite + "/"+ fixedLink  )
      // })
  }

}
</script>

<style lang="scss" scoped>
.blog{
  min-height: 85vh;
}
</style>
