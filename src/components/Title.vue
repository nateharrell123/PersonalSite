<template>
<v-row>
  <!-- left side -->
  <v-col cols="3" id="fade-in">
    Left
  </v-col>
    <v-col cols="6">
    <header>
      <div class="title" id="fade-out" v-if="!hide"> 
        <span id="text">Hey there :)</span>
      </div>
      <div class="title" id="fade-in">
        <span id="text">my portfolio</span>
      </div>
    </header>
    </v-col>
    <!-- right side -->
  <v-col cols="3" id="fade-in">
    Right
  </v-col>
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
  /* font-family: "Montserrat"; */
  text-align: center;
  font-size: 75px;
  text-transform: uppercase;
  transition: transform 1s;
}
#text {

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