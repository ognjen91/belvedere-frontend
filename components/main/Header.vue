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
      <v-layout column justify-center  class="menuItems" pt-5>

      <nuxt-link :to="localePath(item.link)" tag="v-list-tile" v-for="item in items" :key="item.title" @click="" class="menuContent" @click="hideResults">



            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content class="menuItem">
              <v-list-tile-title><span class="c1 menuItemText">{{ item[`title_${currentLocale}`] }}</span></v-list-tile-title>
            </v-list-tile-content>

      </nuxt-link>

      <!-- <v-list-tile v-for="item in items" :key="item.title" @click="" class="menuContent" @click="hideResults">



            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content class="menuItem">
              <v-list-tile-title><nuxt-link :to="localePath(item.link)"><span class="c1 menuItemText">{{ item[`title_${currentLocale}`] }}</span></nuxt-link></v-list-tile-title>
            </v-list-tile-content>

      </v-list-tile> -->



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
          title_en: 'Home',
          title_sr: 'Home',
          title_ru: 'Home',
          icon: 'fas fa-home',
          link : 'index'
        },
        {
          title_en: 'Facility',
          title_sr: 'Objekat Belvedere',
          title_ru: 'Здание Бельведер',
          icon: 'fas fa-hotel',
          link : 'facility'
        },
        {
          title_en: 'Rooms & Apartments',
          title_sr: 'Sobe i apartmani',
          title_ru: 'квартиры и комнаты',
          icon: 'fas fa-bed',
          link : 'rooms'
        },
        {
          title_en: 'Gallery',
          title_sr: 'Galerija',
          title_ru: 'Галерея',
          icon: 'far fa-image',
          link : 'gallery'
        },
        {
          title_en: 'Blog',
          title_sr: 'Blog',
          title_ru: 'Блог',
          icon: 'fas fa-book-open',
          link : 'blog'
        },
        {
          title_en: 'Friends facilites',
          title_sr: 'Objekti prijatelja',
          title_ru: 'Наши друзья',
          icon: 'fas fa-user-friends',
          link : 'friends'
        },
        {
          title_en: 'About us',
          title_sr: 'O nama',
          title_ru: 'О нас',
          icon: 'far fa-address-card',
          link : 'about'
        },

        {
          title_en: 'Contact',
          title_sr: 'Kontakt',
          title_ru: 'контакт',
          icon: 'fas fa-envelope',
          link : 'contact'
        },
      ]
    }
  },



  methods : {
    hideResults(){
      this.$store.commit('belvedereCalendars/CLOSE_RESULTS')
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
