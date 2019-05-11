<template lang="html">
<v-card>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{post.title}}</h3>
            <p><span class="cf">{{ $t('blog.writtenBy') }}</span> {{post.author.name}}</p>
            <div class="cf"> {{ post.excerpt }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn @click="showFull = true" :color='c1' dark>{{$t('previews.readMsg')}}</v-btn>
        </v-card-actions>

        <FullPost :id='post.id' v-if='showFull' @close='showFull=false' />

  </v-card>
</template>



  <script>
  import FullPost from '@/components/otherFacilities/OtherBlog.vue'

  export default {

      components : {
          FullPost


      },

    props : {
      post : {
        Type: Object,
        required: true
      }
    },


    data(){
      return {
        showFull : false
      }
    }
  }
  </script>

  <style lang="css" scoped>
  </style>
