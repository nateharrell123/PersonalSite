<template>
    <v-row class="header " justify="center" align="center">
    <v-col class="ma-2 mb-0" cols="2">
      <v-avatar size="60px">
      <v-img src="@/assets/bank/circle-icon.png" class="bank-img"
      max-width="60"
      >
      </v-img>
      </v-avatar>
      <span class="title">
        WeBank
      </span>
    </v-col>
    <v-col>
        <BankMenuItem/>
    </v-col>
    </v-row>    
</template>

<script>
import BankMenuItem from "../Bank/BankMenuItem.vue"
export default {
    name: "BankHeader",
    data(){
        return{

        }
    },
    components: {
        BankMenuItem
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Passion+One&display=swap');

.header{
  box-shadow:0 2px 15px rgba(73, 120, 251, 0.5);
}
.bank-img{
    filter: invert(38%) sepia(82%) saturate(1885%) hue-rotate(211deg) brightness(99%) contrast(99%);
}
.title{
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size:24px !important;
letter-spacing: 2px !important;
}
</style>