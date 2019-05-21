<template lang="html">
  <v-container class='blog'>
    <v-layout align-center column mb-4>
      <h1>{{post.title}}</h1>
      <h3 class='cf fo2'>{{ $t('blog.writtenBy') }} <span>{{author.name}}</span> {{ $t('blog.onDate') }} {{post.created_at}}</h3>
    </v-layout>
    <v-layout my-5 px-1 class="blogContent">
      <div v-html="post.content" id="post"></div>
      <!-- <div id="post"> -->
        <!-- {{ post.content}} -->
      <!-- </div> -->
    </v-layout>
  </v-container>
</template>

<script>
import metaOf from '@/meta/blogSingle.js'

export default {

  layout : "pagesNoBottomBoxes",

  /*HEAD*/
  head () {
     return {
  title: `${this.post.title} : Belvedere Blog`,
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: `${this.post.excerpt}`
      },
      //TWITTER & FACEBOOK
      ...metaOf(this).twitter, ...metaOf(this).facebook,]
    }},

  /*END HEAD*/

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
      $("#post img").each(function(index){
        $(this).addClass("postImg")
      })

    } catch (error) {
      console.log(error);
    }
  },

  mounted(){
    //FIXIN IMAGES URL - JS WAY (can be done in php too)

      $("#post img").each(function(index){
        $(this).addClass("postImg").css("max-width", "100vw").css('max-height', '100vw').css("margin", "1% 1% 1% 0")  //PROBLEM SOLVED!!!
      })
  }

}
</script>

<style lang="scss" scoped>
.blogContent{
  display: flex;
  justify-content: center;
}

.blog{
  min-height: 85vh;
  max-width: 100vw;

}

#post {
  max-width: 100vw;
  & img{
    max-width: 50vw !important;

  }
}


</style>
