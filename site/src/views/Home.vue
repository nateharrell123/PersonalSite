<template>
<div>
    <Header/>
    <Greeting/>
    <Projects/>
    <!-- <ContactMe/> -->
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

export default {
  name: "Home",
  components: {
    Header,
    Greeting,
    Projects,
    // ContactMe,
    ProjectFooter
  }
};
</script>
