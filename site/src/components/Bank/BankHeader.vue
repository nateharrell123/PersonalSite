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
<v-menu
      open-on-hover
      bottom
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-col>
    </v-row>    
</template>



<script>
export default {
    name: "BankHeader",
    data(){
        return{
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
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