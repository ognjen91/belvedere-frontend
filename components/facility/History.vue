<template lang="html">
  <div>


  <v-timeline dense>
    <v-timeline-item
      v-for="(event, n) in events"
      :key="n"
      color="red lighten-2"

    >
      <template v-slot:opposite>
        <span> <strong>{{event.year}}</strong></span>
      </template>
      <!-- <v-card class="elevation-2">
        <v-card-title class="headline">{{event.title}}</v-card-title>
        <v-card-text>
          {{event.text}}
        </v-card-text>
      </v-card> -->
      <v-layout>
        <v-flex>
          <h4 class='text-center'>{{event.title}}</h4>
          <p class='text-center'>{{event.text}}</p>
        </v-flex>
      </v-layout>

    </v-timeline-item>
  </v-timeline>


  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [{
          year: 1910,
          title: "Osnivanje",
          text: "Podignuto je zdanje Belvedere"
        },

        {
          year: 1923,
          title: "Kralj u Belvedereu",
          text: "Prilikom posjete Herceg Novom, našem zdanju odsjeda Kralj Aleksandar"
        },

        {
          year: 1990,
          title: "Era Batrićevića",
          text: "Zdanje postaje vlasništvo porodice Batrićević"
        },
        {
          year: 2016,
          title: "Rekord",
          text: "xzy ostvarenih noćenja, što je rekord"
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
