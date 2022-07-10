<template>
  <v-app>
    <Title/>
    <!-- <Pedals/> -->
    <Projects/>
    <Footer/>
  </v-app>
</template>

<script>
import Title from "@/components/Title.vue"
//import Pedals from "@/components/Pedals.vue"
import Projects from "@/components/Projects.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: "App",

  data: () => ({
    //
  }),
  components:{
    Title,
    //Pedals,
    Projects,
    Footer
  }
};
</script>
