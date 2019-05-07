<template>
<header>
<v-layout wrap style="height: 200px;">
  <v-container>
    <v-layout justify-end >
      <v-icon x-large @click.stop="drawer = !drawer" class="menuBtn">fas fa-bars</v-icon>
    </v-layout>
  </v-container>

  <v-navigation-drawer v-model="drawer"  temporary  floating  class="menuDrawer"  fixed flex column align-center :width="320">
    <v-list class="itemsList">
      <v-layout column justify-center  class="menuItems">

      <v-list-tile v-for="item in items" :key="item.title" @click="" class="menuContent" @click="hideResults">

            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content class="menuItem">
              <v-list-tile-title><nuxt-link :to="item.link"><span class="c1 menuItemText">{{ item.title }}</span></nuxt-link></v-list-tile-title>
            </v-list-tile-content>

      </v-list-tile>


    </v-layout>
    </v-list>
  </v-navigation-drawer>
</v-layout>
</header>

</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [{
          title: 'Home',
          icon: 'fas fa-home',
          link : '/'
        },
        {
          title: 'Facility',
          icon: 'fas fa-hotel',
          link : '/facility'
        },
        {
          title: 'Rooms & Apartments',
          icon: 'fas fa-bed',
          link : '/rooms'
        },
        {
          title: 'Gallery',
          icon: 'far fa-image',
          link : '/gallery'
        },
        {
          title: 'Blog',
          icon: 'fas fa-book-open',
          link : '/blog'
        },
        {
          title: 'Friends',
          icon: 'fas fa-user-friends',
          link : '/friends'
        },
        {
          title: 'About',
          icon: 'far fa-address-card',
          link : '/about'
        },

        {
          title: 'Contact',
          icon: 'fas fa-envelope',
          link : '/contact'
        },
      ]
    }
  },



  methods : {
    hideResults(){
      this.$store.commit('CLOSE_RESULTS')
    }
  }
}
</script>

<style lang="scss">


  .menuDrawer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 3%;
  }

  .menuBtn{
    position: fixed;
    top: 4%;
    right: 4%;
  }

  .itemsList{
    // border: $greb;
    height: 100%;
  }

  .menuItems{
    // border: $redb;
    height: 100%;
  }
</style>
