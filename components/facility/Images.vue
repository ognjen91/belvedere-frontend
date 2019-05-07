<template lang="html">
  <v-layout class="border" justify-center column>
          <v-flex xs12>
            <v-layout justify-center class="border">
              <v-flex xs10 >

                <v-img
                :src="sourceFolder + activeImg"
                lazy-src="/placeholder.jpg"
                aspect-ratio="1.8"
                class="grey lighten-2"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-flex>


          <v-flex>
            <v-layout>
              <v-flex xs12 sm10 offset-sm1>
                <v-card>
                  <v-container grid-list-sm fluid>
                    <v-layout row wrap>
                      <v-flex
                        v-for="(img , n) in images"
                        :key="n"
                        xs4
                        d-flex
                        v-if="n<6"
                      >
                        <v-card flat tile class="d-flex">
                          <v-img @click='activeImg = img.name'
                            :src="sourceFolder + img.name"
                            lazy-src="/logo.png"
                            aspect-ratio="1.5"
                            class="grey lighten-2"
                          >
                            <template v-slot:placeholder>
                              <v-layout
                                fill-height
                                align-center
                                justify-center
                                ma-0
                              >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                              </v-layout>
                            </template>
                          </v-img>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
  </v-layout>


</template>

<script>
export default {
  props: ['images', 'profileImage'],

  data() {
    return {
      activeImg: this.profileImage.name
    }
  }
}
</script>

<style lang="css" scoped>
</style>
