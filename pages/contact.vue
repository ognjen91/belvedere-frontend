<template lang="html">
<v-container>
  <v-layout wrap>

<v-flex xs12 md6 class="contactInfo">

      <h2 class="text-xs-center">{{facility.name_sr}}</h2>

      <p>Manastirska 2</p>
      <p>85340 Herceg Novi Montenegro</p>
      <p>{{facility.phone1}}</p>
      <p>{{facility.phone2}}</p>


      <v-layout justify-center>
        <v-flex xs10 md8>
          <!-- <a href="https://www.google.com/maps/place/Belvedere/@42.4532405,18.5374194,17z/data=!3m1!4b1!4m5!3m4!1s0x134c3b714dfb9461:0x3690d4c167908a6f!8m2!3d42.4532405!4d18.5396081"> -->
          <v-img src='/map.jpg'></v-img>
          <!-- </a> -->
        </v-flex>
      </v-layout>



</v-flex>

<v-flex xs12 md6>
          <v-layout column>
            <v-form @submit.prevent>
            <v-flex xs12>

              <v-text-field
                    label="Vaše ime"
                    placeholder="Ime"
                    :value='name'
                  ></v-text-field>

                  <v-text-field
                        label="Vaš email"
                        placeholder="email"
                        :value='email'
                      ></v-text-field>

            </v-flex>
          <v-flex xs12>
            <v-textarea
                    outline
                    name="input-7-4"
                    :label="label"
                    :value="text"
                    :placeholder="textPlaceholder"
                    required


                  ></v-textarea>


          </v-flex>

          <v-btn :color="c1" dark @click="sendQuestion">Pošaljite pitanje</v-btn>
            </v-form>

          </v-layout>


</v-flex>

</v-layout>
</v-container>
</template>

<script>
export default {

  layout : 'pages',

  data(){
    return{
      name: '',
      email: '',
      text : "",
      label: "Your question",
       textPlaceholder: "Your question here"

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

        let mail = await this.$axios.post(this.theWebsite + "/api/contact/1", {
          sender : this.name,
          senderEmail : this.email,
          text : this.text
        });
        console.log("ok   ", mail);
      }catch(error){
        console.log("error ", error);
      }
    }
  }
}
</script>

<style lang="css" scoped>

.contactInfo{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
