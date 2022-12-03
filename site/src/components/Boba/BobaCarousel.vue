<template>
  <!-- <v-row> -->
    <!-- <v-col align="center" class="ma-0 pa-0"> -->
      <v-carousel hide-delimiters class="carousel">
        <v-carousel-item src="https://picsum.photos/id/42/3600/3600">
        <!-- <div class="container">
            <div class="greeting">
              THE BEST TEA AROUND.
            </div>
            <div>
              <v-btn id="fade-in" width="250" height="70" rounded class="nav-buttons">
                  <span class="button-text-color">ORDER NOW</span>
              </v-btn>
            </div>
        </div> -->
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
             <span class="greeting"> THE BEST TEA AROUND.</span>
             <div style="padding-bottom:120px;"/>
            <div class="under" style="text-align:center;">
              <v-btn id="fade-in" width="250" height="70" rounded class="nav-buttons">
                  <span class="button-text-color">ORDER NOW</span>
              </v-btn>
            </div>
            </div>
          </v-row>

        </v-carousel-item>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    <!-- </v-col> -->
  <!-- </v-row> -->
</template>

<script>
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
    };
  },
};
</script>

<style scoped>
.carousel {
  margin-top: 30px;
}
.inner{
  position:relative;
}
.container{
  text-align: center;
}
#fade-in{
    animation: 3s ease 0s normal forwards 1 fadein;
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
    font-weight:800;
    color:white;
    text-align: center; /* ???? */
    float:right;
    text-shadow: rgb(0 0 0 / 40%) 0px 2px 5px;
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