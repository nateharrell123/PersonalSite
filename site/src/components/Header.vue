<template>
  <v-row class="ma-0 pa-0" id="row">
    <v-col cols="2"/>
    <v-col cols="8">
      <v-avatar size="60px">
      <v-img src="../assets/nate.jpg" alt="nate"
        class="nate">
      </v-img>
      </v-avatar>
      <span class="name">
        Nate Harrell
      </span>
    </v-col>
    <v-col cols="2">
      <span class="contact">Contact</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Header",
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
position:relative;
top:18px;
}
</style>
