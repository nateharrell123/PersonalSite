<template>
  <v-row>
    <v-col align="center" class="ma-0 pa-0">
      <v-carousel hide-delimiters class="carousel">
        <v-carousel-item src="https://picsum.photos/id/42/3600/3600">
        <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
        <v-btn width="250" height="70" rounded class="nav-buttons">
            <span class="button-text-color">ORDER NOW</span>
        </v-btn>
          </v-row>
        </v-carousel-item>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
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
</style>