<template>
        <v-btn
          class="menu-button"
          dark
          @click="toHome"
        >
          {{MenuTitle}}
        </v-btn>  
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
    },
    methods: {
        toHome() {
        this.$router.push("/Bank").catch(()=>{});
        }
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