<template>
<div class="container">
  <v-card color="#1eb88f" class="card">
    <div class="imgbox" onclick="">
    <div class="title-hardcode">WEBANK</div>
      <v-img src="@/assets/bank/circle-icon.png" alt="nate" class="boba-img"
      max-width="80"
      >
      </v-img>
    </div>

    <v-row class="ma-0 pa-0">
      <v-col cols="2"/>
      <v-col>
        <div class="content">
          <h3 id="angular">
            WeBank (Concept website)
          </h3>
          <p id="desc">WeBank is a concept website 
            for all your digital banking needs. This is just a simple dashboard showing account balances
            and other typical bank-ey stuff. 
            <br/>
            <br/>
            This, like the next project, is a Vue project built inside of this Vue project! :O
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"/>
      <v-col>
          <v-btn @click="toBank" class="btn">
            Visit
          </v-btn>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>
export default {
    name: "BankCard",
    methods: {
        toBank(){
            this.$router.push('Bank');
        }
    }
}
</script>
<style scoped>
@media (max-width:600px) {
  .btn{
    position:absolute;
    bottom:50px !important;
  }
}
.center{
    display:table;
    margin: 0 auto;
}
#desc{
  color:white;
}
.desc{
    text-align: center;
}
#melody-card{
  border-radius:20px;
}
.title-hardcode{
  position:absolute;
  top:20px;
  font-size:24px;
  text-transform: uppercase;
  color:white;

  font-weight:bold;
  transition: opacity 0.5s ease-in-out;
}
.card:hover .title-hardcode {
  opacity: 0;
  transition: opacity 0.5s ease-out;
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
  left:-75px;
  top:calc(50% - 75px);
}
.card .content{
  margin-top:20px;
  margin-left:20px;
}
#angular{
  /* background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-clip: text;
  -webkit-text-fill-color: transparent; */
  color:white;
}
.card .content #angular{
  color:white;
  text-transform:uppercase;
}
.btn{
  margin-left:27px;
  position: relative;
  bottom:38px;
}
.boba-img{
  filter:invert(1);
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