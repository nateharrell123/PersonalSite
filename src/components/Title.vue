<template>
<v-row>
  <!-- left side -->
  <v-col cols="3" id="fade-in">
    <!-- Left -->
  </v-col>
    <v-col cols="6">
    <header>
      <div class="title" id="fade-out" v-if="!hide"> 
        Hey there :)
      </div>
      <!-- <div style="text-align:center;"> 
        <button class="how-it-works" v-if="hide">My Projects</button>
      </div> -->
    </header>
    </v-col>
    <!-- right side -->
  <v-col cols="3" id="fade-in">
    <!-- Right -->
  </v-col>
  <v-row class="pa-0"> 
    <v-col cols="3"/>
    <v-col id="fade-in">
      <div style="text-align:center;"> 
        <button class="how-it-works" v-if="hide">My Projects</button>
      </div>
    </v-col>
    <v-col cols="3"/>
  </v-row>
</v-row>
</template>

<script>
export default {
  name: "Title",
  data(){
    return{
      hide: false
    }
  },
  mounted(){
    this.activate()
  },
  methods: {
    activate(){
      setTimeout(() => this.hide = true, 2030)
    },
  }
};
</script>

<style scoped>
.title {
  font-weight: 550;
  font-size:300px;
  /* font-family: "Montserrat"; */
  text-align: center;
  text-transform: uppercase;
  transition: transform 1s;
}
.how-it-works{
  text-transform: uppercase;
  font-size:60px;
}
.how-it-works{
  font-size: 45px;
  color: #9AAAAA;
  background:none;
  outline:none;
  border:none;
}
.how-it-works:hover{
  color:#9DDDDD;
}
.how-it-works::after{
  content:'';
  height:2px;
  width:0%;
  background-color: #1AAAAA;
  display:block;
  transition: .2s ease-in-out;
}
.how-it-works:hover::after{
  content:'';
  height:2px;
  width:100%;
  background-color: #1AAAAA;
  display:block;
}
#text {
  font-size:125px;
}
@keyframes slideInTop {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeout {
  0% {
    opacity: 1;
  }
  66% {
    opacity: 1;
  }
  100% {
    display:none;
    opacity: 0;
  }
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#fade-out{
    animation: 3s ease 0s normal forwards 1 fadeout;
}
#fade-in{
    animation: 3s ease 0s normal forwards 1 fadein;
}
header {
  animation: 1s ease-out 0s 1 slideInTop;
}
</style>