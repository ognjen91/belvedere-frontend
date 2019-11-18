<template lang="html">
  <v-flex xs10 md6 offset-xs1 offset-md0 px-3 my-4>
            <v-layout column class="" style="height:100%;">

              <v-flex v-if="facilityId==1" class="text-xs-center belvedereContactText" mb-1>
                  <h2 class="px-5 mb-3">{{$t('contact.dearGuests')}},</h2>
                  <h3 class="cf px-5">{{$t('contact.belvedereMsg')}}</h3>
              </v-flex>
            <v-flex v-else class="belvedereContactText  text-xs-center" mb-4>
                  <h2 class="px-5 mb-3">{{$t('contact.dearGuests')}},</h2>
                  <h3 class="cf px-5">{{$t('contact.otherMsg')}}</h3>
            </v-flex>

            <v-flex :class="{btnBoxBelvedere : facilityId==1, btnBoxOther: facilityId!==1}">
                <v-btn v-if="facilityId==1" :color="c1" large dark :href="theWebsite + '/contact/' + facilityId">{{$t('contact.btnTextBelvedere')}}</v-btn>
                <v-btn v-else :color="c1" large dark :href="theWebsite + '/contact/' + facilityId">{{$t('contact.btnTextOther')}}</v-btn>
            </v-flex>

            </v-layout>


  </v-flex>

</template>

<script>
export default {

  props: {
    facilityId: {
      Type: Number
    },

    facility : {
      Type: Object,
      required: true
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
    // facility() {
    //   return this.$store.getters['belvedere/getFacility']
    // }
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

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;

  width: 100%;

  @media screen and (min-width:786px){
    // width: 25%;
  }

  @media screen and (min-width:992px){
    // width: 20%;
  }
}

.belvedereContactText{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btnBoxOther{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.btnBoxBelvedere{
  display: flex;
  justify-content: start;
  align-items: center;
}

</style>
