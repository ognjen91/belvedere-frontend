<template lang="html">
  <v-container class="blogs">

    <v-layout align-center column>
      <h2>Belvedere Blog</h2>
      <p>o nama, o Herceg Novom, o Boki...</p>
    </v-layout>

    <v-layout wrap justify-center>

        <v-flex xs11 md5 class="blogPost" v-for="(post, i) in blogs" :key="i">
          <BlogPreview :post="post" />
        </v-flex>



    </v-layout>

    <v-layout justify-center v-if='blogs.length >= meta.total' my-5>
      <a href="http://www.facebook.com/belvederehn">Posjetite i našu Fejsbuk stranicu za više postova</a>
    </v-layout>


  </v-container>
</template>

<script>
import {throttle} from 'lodash'
import {mapGetters} from 'vuex'
import BlogPreview from '@/components/reusable/BlogPreview'
export default {

  layout: 'pages',


  components : {
    BlogPreview
  },

  computed : {
    ...mapGetters({
      blogs : 'blog/getBlogs',
      links : 'blog/getLinks',
      meta : 'blog/getMeta'
    })
  },

  methods : {
    addNewPostsIfScrolledToBottom: throttle(function(e){
      if (this.checkIfScrolledToBottom() && this.blogs.length < this.meta.total) this.loadNewPosts()
    }, 500),

    checkIfScrolledToBottom (ev) {
       return ((window.innerHeight + window.scrollY) >= 0.9*document.body.offsetHeight)
        },

  async loadNewPosts(){
    try {
      let newBlogs = await this.$axios.$get(this.links.next)
      this.$store.commit('blog/ADD_NEW_BLOGS', newBlogs)
    } catch (error) {
      console.log(error);
    }
    }

  },

  mounted(){
    window.addEventListener('scroll', this.addNewPostsIfScrolledToBottom)
  }
}
</script>

<style lang="scss" scoped>

  .blogPost{
    margin: 0 4% 2% 0;
  }
  .blogs{
    min-height: 85vh;
  }

</style>
