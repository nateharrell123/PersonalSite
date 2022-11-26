<template>
<v-card color="#32363b" id="melody-card">
    <v-row class="ma-0 pa-0">
      <v-col>
        <span class="center" id="text-2">Melodies.to </span>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
        <p class="desc" id="text">A web app that that creates AI generated Melodies.</p>
    </v-row>
</v-card>
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
  background-size: 100%;
  font-weight:600;
  font-size:26px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#text{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-size: 100%;
  font-weight:300;
  font-size:22px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.desc{
    text-align: center;
}
</style>