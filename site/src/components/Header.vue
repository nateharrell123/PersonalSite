<template>
<v-container class="header-container">
  <v-row id="row">
    <v-col lg="6" cols="6" class="nate-col">
      <v-avatar size="60px">
        <v-img src="../assets/nate.jpg" alt="nate"
          class="nate">
        </v-img>
      </v-avatar>
      <span class="name"> Nate Harrell</span>
    </v-col>
    <v-col cols="6" class="about-col align-self-center">
      <button @click="about" class="contact about"> About </button>
    </v-col>
  </v-row>
  <div id="sneaky"/>
</v-container>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{

    }
  },
  methods: {
    about(){
      document.getElementById("sneaky").scrollIntoView({
        behavior: "smooth"
      });
    },
  }
}
</script>

<style scoped>
@media (max-width: 599px) {
  .about-col {
    position:relative;
    top:25px;
  }
}
.nate-col{
  padding-left:15%;
}
.about-col{
  padding-right:15%;
}
.header-container{
  min-width:100%;
}
.socials{
  position:relative;
  top:11px;
}
#sneaky{
  position:absolute;
  top:1050px;
  left:500px;
}

.social-icon{
  margin-right:10px;
}
#row{
  border-bottom: .02rem rgb(197, 194, 194) solid;
}
.nate{
  border-radius: 1000px;
}
.name{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    letter-spacing: 2px;
    font-weight:180;
    font-size:22px;
    vertical-align: middle;
    white-space: nowrap;
}
.contact{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight:180;
  letter-spacing: 2px;
  font-size:22px;
  background: none;
  outline: none;
  border:none;
  float:right;
}
.contact:hover{
  color:#3ebbbb;
}
.contact::after{
  content:'';
  height:1px;
  width:0%;
  background-color: #3ebbbb;
  display:block;
  transition:.2s ease-in-out;
}
.contact:hover::after{
  content:'';
  height:1px;
  width:100%;
  background-color:#3ebbbb;
  display: block;
}

</style>
