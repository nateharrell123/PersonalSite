<template>
<!-- <v-card color="#32363b" id="melody-card">
    <v-row class="ma-0 pa-0">
      <v-col>
        <span class="center" id="text-2">Melodies.to </span>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
        <p class="desc" id="text">A web app that that creates AI generated Melodies.</p>
    </v-row>
</v-card> -->
<div class="container">
  <div class="card">
    <div class="imgbox">
      <!-- <i class="fab fa-angular"></i> -->
      <v-img src="@/assets/note.png" alt="nate"
      max-width="80"
        class="nate">
      </v-img>
    </div>
    <div class="content">
      <h3 id="angular">
        ANGULAR
      </h3>
      <p>Angular is a platform for building mobile
        and desktop web applications
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "Melodies",
    methods: {
        toMelodies(){
            window.open('https://melodies.to')
        }
    }
}
</script>
<style scoped>
.center{
    display:table;
    margin: 0 auto;
}
#text-2{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-size: 100%;
  font-weight:600;
  font-size:26px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#text{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-size: 100%;
  font-weight:300;
  font-size:22px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.desc{
    text-align: center;
}
#melody-card{
  border-radius:20px;
}
.container{
  position:relative;
  max-width:100vw; 
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding:40px 0;
}
.card{
  position:relative;
  width:360px;
  height:210px; 
  background-color:#222;
  margin: 40px 70px;
  border-radius:20px;
  box-shadow:0 5px 15px rgba(0,0,0, 0.5);
}
.card .imgbox{
  position:absolute;
  top:10px;
  left:10px;
  background:rgba(255,255,255, 0.1);
  width: calc(100% - 20px);
  height:calc(100% - 20px);
  z-index:10;
  display:flex;
  justify-content: center;
  align-items:center;
  overflow:hidden;
  border-radius:20px;
  border:1px solid rgba(255,255,255, 0.2);
  box-shadow:5px 5px 30px rgba(0,0,0,0.1);
  transition:0.5s ease-in-out;
  backdrop-filter: blur(20px);
}
</style>