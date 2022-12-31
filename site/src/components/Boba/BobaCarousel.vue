<template>
  <!-- <v-row> -->
    <!-- <v-col align="center" class="ma-0 pa-0"> -->
      <v-carousel hide-delimiters class="carousel" :show-arrows="false" v-model="model">
        <div class="title-container">
          <v-carousel-item src="https://picsum.photos/id/42/2560/1600">
            <v-row
              class="mb-5 text"
              align="center"
              justify="center"
            >
            <v-col>
              <div class="text-h2">
              <div id="fade-in" class="greeting"> THE BEST TEA AROUND.</div>
              <!-- <div style="padding-bottom:120px;"/> -->
              <div class="order">
                <v-btn id="fade-in" width="250" height="70" rounded class="nav-buttons">
                    <span class="button-text-color">ORDER NOW</span>
                </v-btn>
              </div>
              </div>
            </v-col>
            </v-row>

          </v-carousel-item>
        </div>
        <v-carousel-item>
          <Menu/>
        </v-carousel-item>
        <v-carousel-item src="https://picsum.photos/id/63/2560/1600">
          <BobaAbout/>
        </v-carousel-item>
      </v-carousel>
    <!-- </v-col> -->
  <!-- </v-row> -->
</template>

<script>
import Menu from "../Boba/Menu.vue"
import BobaAbout from "../Boba/BobaAbout.vue"

export default {
  name: "BobaCarousel",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://picsum.photos/id/237/2400/2400",
        },
      ],
    model: 0
    };
  },
  components: {
    Menu,
    BobaAbout,
  },
  props: ['screen'],
  watch: {
    screen(newVal){
      this.model = newVal;
    }
  }
};
</script>

<style scoped>
.carousel {
  margin-top: 30px;
  /* border: px solid black; */
  box-shadow:0 5px 15px rgba(0,0,0, 0.5);
}
.text{
  margin-top:7%;
}
.order{
  text-align: center;
}
.title-container{
}
.inner{
  position:relative;
}
.container{
  text-align: center;
}
#fade-in{
    animation: 1s ease 0s normal forwards 1 fadein;
}
.button-text-color{
    /* color: #4f3f30; */
    color:white;
    font-weight:700;
    font-size:24px;
}
.nav-buttons{
    transition: background .5s;
    background-color: #dc6f56 !important;
}
.nav-buttons:hover{
    background-color:white !important;
}
.nav-buttons:hover .button-text-color{
    color:#dc6f56 !important;
}
.greeting{
    font-size:48px;
    letter-spacing: 2px;
    font-weight:800;
    padding-bottom:90px;
    color:white;
    text-align: center;
    text-shadow: rgb(0 0 0 / 40%) 0px 2px 5px;
}
@media (max-width:600px) {
  .carousel{
    
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
</style>