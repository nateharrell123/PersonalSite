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
      <v-img src="@/assets/note.png" alt="nate" class="fab fa-angular"
      max-width="80"
      >
      </v-img>
    </div>
    <div class="content">
      <h3 id="angular">
        MELODIES.TO
      </h3>
      <p id="text-2">Melodies.to is a web application
        that creates AI generated melodies.
      </p>
      <a @click="toMelodies"> Visit </a>
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
  /* padding:40px 0; */
}
.card{
  position:relative;
  width:360px;
  height:210px; 
  background-color:#222;
  /* margin: 40px 70px; */
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
.card:hover .imgbox{
  width:150px;
  height:150px;
  left:-75px;
  top:calc(50% - 75px);
}
.card .content{
  position:absolute;
  right: 0;
  width:calc(100% - 75px);
  height: 100%;
  padding:28px;
}
#angular{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card .content a{
  display:inline-block;
  font-size:0.9em;
  margin-top:10px;
  border-radius:5px;
  padding: 10px 20px;
  text-decoration: none;
  font-weight:400;
  color:#fff;
  background:linear-gradient(90deg, #f403d4, #f44141, #fce628, #f403d4);
  background-size:400%;
  z-index:1;
}
.card .content #angular{
  color:#ff5165;
  text-transform:uppercase;
}
.card .content a:hover{
  animation: animate 8s linear infinite;
}

@keyframes animate{
  0%{
    background-position:0;
  }
  100%{
    background-position:400%;
  }
}
</style>