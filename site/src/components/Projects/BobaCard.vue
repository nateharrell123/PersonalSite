<template>
<div class="container">
  <v-card color="#edce7f" class="card">
    <div class="imgbox">
      <v-img src="@/assets/tea.png" alt="nate" class="boba-img"
      max-width="80"
      >
      </v-img>
    </div>

    <v-row class="ma-0 pa-0">
      <v-col cols="2"/>
      <v-col>
        <div class="content">
          <h3 id="angular">
            Boba Cafe (Concept website)
          </h3>
          <p id="text-2">Boba Cafe is a milk tea shop, 
            specializing in yummy "Boba" tea.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"/>
      <v-col>
          <v-btn @click="toBoba" class="btn">
            Visit
          </v-btn>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>
export default {
    name: "BobaCard",
    methods: {
        toBoba(){
            this.$router.push('Boba');
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
  color:#4f3f30;
}
.btn{
  margin-left:27px;
  position: relative;
  bottom:38px;
}
@media (max-width:980px){
.btn{
        margin-left:27px;
        position:relative;
        bottom:49px;
    }
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
  height:200px; 
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
  left:-75px;
  top:calc(50% - 75px);
}
.card .content{
  margin-top:20px;
  margin-left:20px;
}
#angular{
  color:#dc6f56;
}
.card .content a:hover{
  animation: animate 8s linear infinite;
}
.boba-img{
filter: invert(63%) sepia(91%) saturate(2715%) hue-rotate(326deg) brightness(94%) contrast(82%);
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