<template>
    <v-row class="header" justify="center" align="center">
    <v-col class="ma-2 mb-0">
      <v-avatar size="60px">
      <v-img src="@/assets/bank/circle-icon.png" class="bank-img"
      max-width="60"
      @click="toHome"
      >
      </v-img>
      </v-avatar>
      <span class="title">
        WeBank
      </span>
    </v-col>
    <v-col>
      <BankMenuItem :MenuTitle="'DASHBOARD'"/>
    </v-col>
    <v-col>
        <BankMenuItemCollapse
        :MenuTitle="'Services'"
        />
    </v-col>
    <v-col>
      <v-btn style="float:right;" color="white" class="acct-button mr-6">
        Create an account
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn style="float:right;" color="#1eb88f" class="sign-in-button mr-6">
        Sign in
      </v-btn>
    </v-col>
    </v-row>    
</template>

<script>
import BankMenuItemCollapse from "../Bank/BankMenuItemCollapse.vue"
import BankMenuItem from "../Bank/BankMenuItem.vue"

export default {
    name: "BankHeader",
    data(){
        return{

        }
    },
    methods: {
      toHome(){
        this.$router.push("/").catch(()=>{});
      }
    },
    components: {
        BankMenuItemCollapse,
        BankMenuItem
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Passion+One&display=swap');

.sign-in-button{
  font-family: 'Montserrat', sans-serif;
  color:white;
  font-weight:600;
}
.acct-button{
  font-family: 'Montserrat', sans-serif;
  color:#1eb88f;
  font-weight:600;
}

.header{
  box-shadow:0 2px 15px rgba(73, 120, 251, 0.5);
}
.bank-img{
    filter: invert(38%) sepia(82%) saturate(1885%) hue-rotate(211deg) brightness(99%) contrast(99%);
    cursor: pointer;
}
.title{
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size:24px !important;
letter-spacing: 2px !important;
}
</style>