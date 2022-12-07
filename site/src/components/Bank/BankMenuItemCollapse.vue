<template>
<v-menu
      class="menu"
      open-on-hover
      bottom
      offset-y
      content-class="elevation-0"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="menu-button"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{MenuTitle}}
        <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card color="white" class="item-card" height="275" width="420">
        <v-row>
          <v-col>
            <div class="menu-item-title">SERVICES:
              <br/>
            <span class="menu-item-title-desc">Everything you need, in one spot!</span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <BankMenuIconItem
          :IconName="'mdi-bank-transfer'"
          :Title="'Transfer funds'"
          />
          <BankMenuIconItem class="item-2"
          :IconName="'mdi-credit-card-chip'"
          :Title="'Cards'"
          />
        </v-row>
        <v-row>
          <BankMenuIconItem
          :IconName="'mdi-cash-multiple'"
          :Title="'Pay bills'"
          />
          <BankMenuIconItem class="item-2"
          :IconName="'mdi-message-settings'"
          :Title="'Messages'"
          />
        </v-row>
        <v-row>
          <BankMenuIconItem
          :IconName="'mdi-account'"
          :Title="'My accounts'"
          />
        </v-row>
        <v-row>
          <BankMenuIconItem
          :IconName="'mdi-cash-fast'"
          :Title="'Send money'"
          />
        </v-row>
      </v-card>
    </v-menu>    
</template>

<script>
import BankMenuIconItem from "../Bank/BankMenuIconItem.vue"
export default {
    name: "BankMenuItemCollapse",
    data(){
        return{
      }
    },
    components: {
      BankMenuIconItem,
    },
    props: {
      MenuTitle: String,
    }
}
</script>

<style scoped>
.item-2{
  position:relative;
  right:20px;
}
.menu-item-title{
  color:rgb(168, 168, 168);
  font-size:16px;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  margin-top:20px;
  margin-left:25px;
}
.menu-item-title-desc{
  color:rgb(168, 168, 168);
  font-size:14px;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
}
.card-item{
    cursor:pointer;
}
.v-menu__content {
  box-shadow:0 2px 15px rgba(73, 120, 251, 0.5) !important;
}
.card-item:hover{
    color: red;
    transition: background .2s;
}
.menu-button{
  font-family: 'Montserrat', sans-serif;
  font-weight:600;
  font-size:16px;
  background: none !important;
  color:black !important;
  box-shadow: none !important;
  outline: none !important;
  border:none !important;
}
.menu-button:hover{
  color: #4978fb !important;
}
.menu-button::before{
  background-color:transparent !important;
}
</style>