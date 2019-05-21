<template lang="html">
  <v-container class="blogs">

    <v-layout align-center column mb-4>
      <h2>{{ $t('blog.pageTitle') }}</h2>
      <p>{{ $t('blog.pageSubtitle') }}...</p>
    </v-layout>

    <v-layout wrap justify-center v-if="blogs.length">
        <template  v-if="blogs.length">
        <v-flex xs11 md5 class="blogPost" v-for="(post, i) in blogs" :key="i">
          <BlogPreview :post="post" />
        </v-flex>
      </template>
      <template v-flex>
          <h3 class="text-xs-center">Nije napisan ni jedan blog post do sada...</h3>
      </template>




    </v-layout>

    <v-layout justify-center v-if='blogs.length >= meta.total' my-5>
      <a href="http://www.facebook.com/belvederehn">Posjetite i našu Fejsbuk stranicu za više postova</a>
    </v-layout>


  </v-container>
</template>

<script>
import metaOf from '@/meta/blog.js'
import {throttle} from 'lodash'
import {mapGetters} from 'vuex'
import BlogPreview from '@/components/reusable/BlogPreview'
export default {

  layout: 'pagesNoBottomBoxes',

  /*HEAD*/
  head () {
     return {
  title: `Belvedere Blog`,
      meta: [
      {
        hid: `description`,
        name: 'description',
        content: `Blog o nama, o Herceg Novom, o Boki Kotorskoj...`,

      },
      //TWITTER & FACEBOOK
      ...metaOf(this).twitter, ...metaOf(this).facebook,
    ]
  }
},

  /*END HEAD*/


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

    @media screen and (min-width: $md){
      &:nth-of-type(2n){
        margin-top: 4.5%;
      }
    }
  }
  .blogs{
    min-height: 85vh;
  }

</style>
