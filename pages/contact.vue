<template lang="html">
<v-container>
  <v-layout wrap>

<v-flex xs12 md5  mb-5 class="contactInfo">

      <h2 class="text-xs-center">{{facility.name_sr}}</h2>

      <p>Manastirska 2</p>
      <p>85340 {{ $t('contact.hnMne') }}</p>
      <p>{{facility.phone1}}</p>
      <p>{{facility.phone2}}</p>


      <v-layout align-center  column class='map'>
        <v-flex xs10 offset-xs1 md12 offset-md0  class="mapHolder">
            <a href="https://www.google.com/maps/place/Belvedere/@42.4532405,18.5374194,17z/data=!3m1!4b1!4m5!3m4!1s0x134c3b714dfb9461:0x3690d4c167908a6f!8m2!3d42.4532405!4d18.5396081">
            <img src="/mapa.jpg" alt="">
          </a>
        </v-flex>
      </v-layout>



</v-flex>

<v-flex xs10 md6 offset-xs1 offset-md0 px-3 my-4>
          <v-layout column>
            <v-form @submit.prevent>
            <v-flex xs12>

              <v-text-field
                    :label="$t('contact.yourName')"
                    :placeholder="$t('contact.namePlaceholder')"
                    :value='name'
                  ></v-text-field>

                  <v-text-field
                        :label="$t('contact.yourEmail')"
                        :placeholder="$t('contact.emailPlaceholder')"
                        :value='email'
                      ></v-text-field>

            </v-flex>
          <v-flex xs12>
            <v-textarea
                    outline
                    name="input-7-4"
                    :label="$t('contact.textareaLabel')"
                    :value="text"
                    :placeholder="$t('contact.textareaPlaceholder')"
                    required


                  ></v-textarea>


          </v-flex>

          <v-btn :color="c1" dark @click="sendQuestion">{{ $t('contact.sendQuestionButton') }}</v-btn>
            </v-form>

          </v-layout>


</v-flex>

</v-layout>
</v-container>
</template>

<script>
export default {

  layout : 'pagesNoBottomBoxes',

  data(){
    return{
      name: '',
      email: '',
      text : "",


    }
  },

  computed : {
    facility(){
      return this.$store.getters['belvedere/getFacility']
    }
  },


  methods: {
    async sendQuestion(){
      try{
        const config = {  headers: { 'Accept': 'application/json' }
}

        // let mail = await this.$axios.post(this.theWebsite + "/api/contact/1", {
        let mail = await this.$axios.post("http://localhost:8000/api/contact/1", {
          sender : this.name,
          senderEmail : this.email,
          text : this.text
        }, config);
        console.log("ok   ", mail);
      }catch(error){
        console.log("error ", error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.contactInfo{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.map{
  // border: $redb;

  & img{
    width: 50%;
    display: block;
    margin: auto;
  }
}
</style>
