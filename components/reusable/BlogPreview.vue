<template lang="html">
<v-card>
        <v-img v-if="post.image"
          :src="sourceFolder + post.image.name"
          aspect-ratio="2.75"
          lazy-src="/placeholder.jpg"

        ></v-img>
        <v-img v-else
        src="/placeholder.jpg"
        aspect-ratio="2.75"
      ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="blogPreviewTitle fo1 mb-0">{{post.title}}</h3>
            <p class="cf">napisao <span class="c3">{{post.author.name}}</span></p>
            <div class='cf'> <strong class="cf">{{ post.excerpt }} </strong></div>
          </div>
        </v-card-title>

        <v-card-actions>
          <nuxt-link :to="{ name: 'blog-id', params: {'id' : post.id} }" tag="v-btn">
              <span class="c3">Pogledajte</span>
        </nuxt-link>
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
