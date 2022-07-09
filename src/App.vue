<template>
  <v-app>
    <Title/>
    <Pedals/>
  </v-app>
</template>

<script>
import Title from "@/components/Title.vue"
import Pedals from "@/components/Pedals.vue"
export default {
  name: "App",

  data: () => ({
    //
  }),
  components:{
    Title,
    Pedals
  }
};
</script>
