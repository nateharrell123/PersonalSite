<template>
<div>
  <v-card color="#222" class="card">
    <div class="imgbox" onclick="">
    <div class="title-hardcode">MELODIES.TO</div>
      <v-img src="@/assets/note.png" alt="nate" class="fab fa-angular"
      max-width="80"
      >
      </v-img>
    </div>

    <v-row class="ma-0 pa-0">
      <v-col cols="2"/>
      <v-col>
        <div class="content">
          <h3 id="angular">
            MELODIES.TO
          </h3>
          <p id="text-2">Melodies.to is a web application
            that creates AI generated melodies.
            <br/>
            <br/>
            I built this using Vue.js, ASP.NET Core and a few open source libraries (details on  my <span class="gitLink" @click="toGit"> GitHub!) </span>
          </p>
          <a @click="toMelodies" class="pad"> Visit </a>
        </div>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>
export default {
    name: "Melodies",
    methods: {
        toMelodies(){
            window.open('https://melodies.to')
        },
        toGit(){
          window.open('https://github.com/nateharrell123/Melody-Maker')
        }
    }
}
</script>
<style scoped>
.center{
    display:table;
    margin: 0 auto;
}
.gitLink{
  cursor: pointer;
  border-bottom: 1px solid #eb1e82;
}
.gitLink:hover{
  background-image: linear-gradient(45deg, #ff63af, #ffb26e);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 1px solid #ff63af;
}
#text-2{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#melody-card{
  border-radius:20px;
}
.container{
  position:relative;
  justify-content: space-around;
  flex-wrap: wrap;
  padding:0;
}
.card{
  position:relative;
  background-color:#222;
  border-radius:30px;
  box-shadow:0 5px 15px rgba(0,0,0, 0.5);
  min-height:350px;
  margin-bottom:20px;
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
@media (max-width:600px) {
.card:hover .imgbox{
  width:150px;
  height:150px;
  /* left:365px; */
  left:90%;
  top:calc(50% - 75px);
}
}
.title-hardcode{
  position:absolute;
  top:20px;
  font-size:24px;
  text-transform: uppercase;
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight:bold;
  transition: opacity 0.5s ease-in-out;
}
.card:hover .title-hardcode {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.card .content{
  padding-right:80px;
  padding-left:40px;
  padding-top:20px;
  padding-bottom:20px;
}
#angular{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card .content a{
  font-size:0.9em;
  border-radius:5px;
  padding: 10px 20px;
  text-decoration: none;
  font-weight:400;
  color:#fff;
  background:linear-gradient(90deg, #f403d4, #f44141, #ddca1b, #f403d4);
  background-size:400%;
  z-index:1;
  margin-bottom:10px;
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