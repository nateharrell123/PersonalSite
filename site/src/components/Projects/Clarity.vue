<template>
<div class="container">
  <v-card color="#144058" class="card">
    <div class="imgbox" onclick="">
    <div class="title-hardcode"> CLARITYFREIGHT.COM </div>
      <v-img src="@/assets/clarity.png" alt="nate" class="fab fa-angular"
      max-width="80"
      >
      </v-img>
    </div>

    <v-row class="ma-0 pa-0">
      <v-col>
        <div class="content">
          <h3 id="angular">
            CLARITYFREIGHT.COM
          </h3>
          <p id="text-2">Clarityfreight.com is a website I built for a freight shipping company.
            <br/>
            <br/>
            They had an old wordpress site that was a little out-dated and ran a little slow.
            I was fortunate to have the opportunity to rebuild it, improve its speed and modernize it! 
            It was built using Vuetify and Vue.js (no backend!)
          </p>
          <span class="toClarity" @click="toMelodies"> Visit </span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>
export default {
    name: "Clarity",
    methods: {
        toMelodies(){
            window.open('https://clarityfreight.com')
        }
    }
}
</script>
<style scoped>

.toClarity{
  font-size:0.9em;
  border-radius:5px;
  padding: 10px 20px;
  text-decoration: none;
  font-weight:400;
  color:#fff;
  background:linear-gradient(90deg, #5d92ae, #26c2ff, #339753, #5d92ae);
  background-size:400%;
  z-index:1;
  margin-bottom:10px;
cursor: pointer;
}
.toClarity:hover{
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
.title-hardcode{
  position:absolute;
  top:20px;
  font-size:24px;
  text-transform: uppercase;
    background-image: linear-gradient(45deg, #5d92ae, #339753); /* #144058 */
  background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight:bold;
  transition: opacity 0.5s ease-in-out;
}
.card:hover .title-hardcode {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.center{
    display:table;
    margin: 0 auto;
}
#text-2{
    background-image: linear-gradient(45deg, #83c6ea, #59db82); /* #144058 */
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
  /* max-width:100vw;  */
  /* display:flex; */
  justify-content: space-around;
  flex-wrap: wrap;
  padding:0;
}
.card{
  position:relative;
  min-height:350px;
  background-color:#222;
  border-radius:30px;
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
  /* left:365px; */
  left:90%;
  top:calc(50% - 75px);
}
@media (max-width:600px) {
.card:hover .imgbox{
  width:150px;
  height:150px;
  left:-75px;
  top:calc(50% - 75px);
}
}
.card .content{
  padding-left:80px;
  padding-right:40px;
  padding-top:20px;
  padding-bottom:20px;
}
#angular{
    background-image: linear-gradient(45deg, #7dc0e4, #50cf78); /* #144058 */
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card .content a{
  /* display:inline-block; */
  font-size:0.9em;
  /* margin-top:10px; */
  border-radius:5px;
  padding: 10px 20px;
  text-decoration: none;
  font-weight:400;
  color:#fff;
  background:linear-gradient(90deg, #f403d4, #f44141, #ddca1b, #f403d4);
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