<template>
<v-app>
    <Header/>
    <div class="content">
      <Greeting/>
      <Projects/>
      <!-- <ContactMe/> -->
      <AboutContent id="fade-in"/>
    </div>
    <ProjectFooter/>
</v-app>
</template>

<script>
import Header from "../components/Header.vue"
import Greeting from "../components/Greeting.vue"
import Projects from "../components/Projects.vue"
// import ContactMe from "../components/ContactMe.vue"
import ProjectFooter from "../components/ProjectFooter.vue"
import AboutContent from "../components/About/AboutContent.vue"

export default {
  name: "Home",
  components: {
    Header,
    Greeting,
    Projects,
    // ContactMe,
    ProjectFooter,
    AboutContent,
  }
};
</script>

<style scoped>
.content{
  padding-left:15%;
  padding-right:15%;
}
</style>