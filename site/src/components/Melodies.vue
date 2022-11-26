<template>
<v-card color="#32363b" id="melody-card">
    <v-row class="ma-0 pa-0">
      <v-col class="pa-0">
        <span class="center" @click="toMelodies" id="text-2">Melodies.to </span>
      </v-col>
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
  cursor: pointer;
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  background-size: 100%;
  font-size:21px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>