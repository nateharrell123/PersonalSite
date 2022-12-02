<template>
  <div class="container">
    <v-row class="ma-0 pa-0">
      <v-col align="center" class="pb-0">
        <v-img
          src="@/assets/tea.png"
          alt="nate"
          class="boba-img"
          max-width="60"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row class="ma-0 pt-0">
      <v-col align="center" class="pa-0">
        <span id="title">Boba Cafe</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BobaHeader",
};
</script>

<style scoped>
#title {
  font-size: 38px;
  font-family: "Comfortaa", sans-serif;
  font-weight: 900;
  background-image: linear-gradient(45deg, #dc6f56, #dca417);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.boba-img {
  filter: invert(63%) sepia(91%) saturate(2715%) hue-rotate(326deg)
    brightness(94%) contrast(82%);
}
.container{
}
</style>