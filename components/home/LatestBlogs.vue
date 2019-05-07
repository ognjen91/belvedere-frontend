<template>
  <v-layout column>
    <v-flex xs12 md12>
      <v-layout column align-center>
        <h2 class='mb-1 blogSectionTitle fo2'>Belvedere blog</h2>
    </v-layout>
    </v-flex>

      <v-flex xs12 md110>
        <v-layout wrap justify-center align-center>
          <v-flex xs10 md3 ma-2  v-for="(post, i) in blogs" :key="i">
            <BlogPreview  :post="post" />
          </v-flex>
        </v-layout>
      </v-flex>


        <v-flex py-5>
          <v-layout justify-center>
            <nuxt-link :to="{ name: 'blog', params: {} }"><p class="cf">Pogledajte sve blogove na stranici <span class="c1">blog</span></p></nuxt-link>
          </v-layout>
      </v-flex>





  </v-layout>
</template>

<script>
import BlogPreview from '@/components/reusable/BlogPreview'
export default {
  components : {
    BlogPreview
  },
  computed : {
    blogs(){
      return this.$store.getters['blog/getNumberOfBlogs'](3)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
