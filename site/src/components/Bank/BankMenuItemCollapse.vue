<template>
      <!-- open-on-hover -->
<v-menu
      class="menu"
      v-model="menu"
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

      <v-card color="white" class="item-card" width="420">
        <v-row>
          <v-col>
            <div class="menu-item-title">DASHBOARD ITEMS:
              <br/>
            <span class="menu-item-title-desc">Dashboard items shown here:</span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Yo
          </v-col>
        </v-row>
      </v-card>
    </v-menu>    
</template>

<script>
export default {
    name: "BankMenuItemCollapse",
    data(){
        return{
      items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
        menu: true,
      }
    },
    props: {
      MenuTitle: String,
    }
}
</script>

<style scoped>
.card-item{
    cursor:pointer;
}
.item-card{
}
.menu{

}
.menu-item-title{
  color:rgb(168, 168, 168);
  font-size:16px;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  margin-top:20px;
  margin-left:20px;
}
.menu-item-title-desc{
  color:rgb(168, 168, 168);
  font-size:14px;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
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