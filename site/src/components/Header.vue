<template>
  <v-row class="ma-0 pa-0" id="row">
    <v-col cols="2"/>
    <v-col cols="7">
      <v-avatar size="60px">
      <v-img src="../assets/nate.jpg" alt="nate"
        class="nate">
      </v-img>
      </v-avatar>
      <span class="name">
        Nate Harrell
      </span>
    </v-col>
    <v-col cols="3">
      <button @click="contact" class="contact">Contact</button>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{

    }
  },
  methods: {
    contact(){
      console.log('contact');
    }
  }
}
</script>

<style scoped>
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
    padding-left:15px;
    vertical-align: middle;
}
.contact{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  position:relative;
  font-weight:200;
  top:12px;
  font-size:22px;
  background: none;
  outline: none;
  border:none;
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
