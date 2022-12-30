<template>
<div>
    <Header/>
    <Greeting/>
    <Projects/>
    <!-- <ContactMe/> -->
    <AboutContent id="fade-in"/>
    <ProjectFooter/>
</div>
</template>

<script>
// @ is an alias to /src
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
