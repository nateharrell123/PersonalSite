<template>
<div>
  <v-row class="ma-0 pa-0" id="row">
    <v-col cols="2"/>
    <v-col class="pb-0">
      <v-avatar size="60px">
      <v-img src="../assets/nate.jpg" alt="nate"
        class="nate">
      </v-img>
      </v-avatar>
      <span class="name">
        Nate Harrell
      </span>
    </v-col>
    <v-col>
      <button @click="about" style="margin-left:50px;" class="contact about"> About </button>
      <!-- <button @click="contact" class="contact">Contact</button> -->
    </v-col>
    <v-col cols="2"/>
  </v-row>
  <div id="sneaky">
    </div>
</div>
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
  padding-bottom:10px !important;
}
.nate{
  border-radius: 1000px;
}
.name{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    letter-spacing: 2px;
    font-weight:180;
    font-size:22px;
    padding-left:15px;
    vertical-align: middle;
    white-space: nowrap;
}
@media (max-width:600px){
    .name{
        padding-left:0px;
    }
    .contact{
      /* margin-top:3%; */
      margin-top:30%;
    }
}
.contact{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight:180;
  letter-spacing: 2px;
  font-size:22px;
  background: none;
  outline: none;
  border:none;
  position:relative;
  top:14px;
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
