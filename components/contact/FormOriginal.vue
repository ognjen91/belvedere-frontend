<!-- ORIGINAL FORM: cors problem is still unsolved, so the alternative is to redirect to backend website and send email from there (via Form.vue) -->

<template lang="html">
  <v-flex xs10 md6 offset-xs1 offset-md0 px-3 my-4>
            <v-layout column>
              <v-form @submit.prevent>
                      <v-flex xs12>

                        <!-- SENDER NAME -->
                        <v-text-field
                              :label="$t('contact.yourName')"
                              :placeholder="$t('contact.namePlaceholder')"
                              v-model='name'
                            ></v-text-field>

                            <!-- SENDER EMAIL -->
                            <v-text-field
                                  :label="$t('contact.yourEmail')"
                                  :placeholder="$t('contact.emailPlaceholder')"
                                  v-model='email'
                                ></v-text-field>

                      </v-flex>

                    <v-flex xs12>
                      <!--MSG-->
                      <v-textarea
                              outline
                              name="input-7-4"
                              :label="$t('contact.textareaLabel')"
                              v-model="text"
                              :placeholder="$t('contact.textareaPlaceholder')"
                              required


                            ></v-textarea>


                    </v-flex>

                    <v-btn :color="c1" dark @click="sendQuestion">{{ $t('contact.sendQuestionButton') }}</v-btn>
              </v-form>



              <!--SUCCESS MSG-->
              <transition
              enter-active-class="animated flipInX"
              leave-active-class="animated fadeOut"
              mode="out-in"
              duration='500'>

              <v-flex xs12 my-2 v-if="showSentMsg" py-2 class="successMsg">
                <p class='white--text text-xs-center'>
                  <v-icon>fas fa-check</v-icon> &nbsp; {{$t('contact.msgSentMsg')}}
                </p>
              </v-flex>
            </transition>

            <!--ERROR WITH SERVER-->
            <transition
            enter-active-class="animated flipInX"
            leave-active-class="animated fadeOut"
            mode="out-in"
            duration='500'>
              <v-flex xs12 my-2 v-if="showErrorMsg" py-2 class="errorMsg">
                <p class='white--text text-xs-center'>
               <v-icon>fas fa-times</v-icon> &nbsp; {{$t('contact.errorMsg')}}
              </p>
              </v-flex>
            </transition>

            <!--ALERT FOR NON-PROPERLY INPUT-->
            <transition
            enter-active-class="animated flipInX"
            leave-active-class="animated fadeOut"
            mode="out-in"
            duration='500'>
              <v-flex xs12 my-2 v-if="fieldsNotOk" py-2 class="errorMsg" id='fieldsNotOk'>
                <p class='white--text text-xs-center'>
               <v-icon color="white">fas fa-times</v-icon> &nbsp; {{$t('contact.fieldsNotOkMsg')}}
              </p>
              </v-flex>
            </transition>

            </v-layout>


  </v-flex>

</template>

<script>
export default {

  props: {
    facilityId: {
      Type: Number
    }
  },

  data() {
    return {
      name: '',
      email: '',
      text: "",
      showSentMsg: false,
      showErrorMsg: false,
      fieldsNotOk: false,


    }
  },

  computed: {
    facility() {
      return this.$store.getters['belvedere/getFacility']
    }
  },


  methods: {
    async sendQuestion() {
      let  theWebsite = this.theWebsite;
      if (!this.name || !this.validateEmail(this.email) || !this.text) {
        this.fieldsNotOk = true;
        setTimeout(()=>{this.fieldsNotOk = false}, 6000)
        return;
      }




        try {
          const config = {
            headers: {
              'Accept': 'application/json',
              "Access-Control-Allow-Origin" : "belvedere-montenegro.me"
            }
          }
          // let mail = await this.$axios.post(this.theWebsite + "/api/contact/1", {
          let mail = await this.$axios.post(theWebsite+"/api/contact/"+this.facilityId , {
            sender: this.name,
            senderEmail: this.email,
            text: this.text
          }, config);
          this.showSentMsg = true

          this.showErrorMsg = false
        } catch (error) {
          // console.log("error ", error);
          this.showSentMsg = false
          this.showErrorMsg = true
        }
    },

    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>

<style lang="scss" scoped>
.successMsg {
    background-color: rgb(75, 179, 26);
}

.errorMsg {
    background-color: rgb(185, 22, 37);
}
</style>
