<template lang="html">
<v-card>

  <nuxt-link :to="localePath({ name: 'blog-id', params: {id: post.id} })">
        <v-img v-if="post.image"
          :src="sourceFolder + post.image.name"
          aspect-ratio="2.75"
          lazy-src="/placeholder.jpg"

        ></v-img>
        <v-img v-else
        src="/placeholder.jpg"
        aspect-ratio="2.75"
      ></v-img>
    </nuxt-link>


        <v-card-title primary-title>
          <div>
            <h3 class="blogPreviewTitle fo1 mb-0">{{post.title}}</h3>
            <p class="cf">{{$t('previews.writtenBy')}} <span class="c3">{{post.author.name}}</span></p>
            <div class='cf'> <strong class="cf">{{ post.excerpt }} </strong></div>
          </div>
        </v-card-title>

        <v-card-actions>
            <v-btn :to="localePath({ name: 'blog-id', params: {'id' : post.id} })" :color="c1" outline>
              <span class="c3">{{$t('previews.readMsg')}}</span>
            </v-btn>

        </v-card-actions>

  </v-card>
</template>



  <script>
  export default {
    props : {
      post : {
        Type: Object,
        required: true
      }
    }
  }
  </script>

  <style lang="css" scoped>
  </style>
