<template>
<div>
    <Header/>
    <Greeting/>
    <Projects/>
    <ContactMe/>
</div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue"
import Greeting from "../components/Greeting.vue"
import Projects from "../components/Projects.vue"
import ContactMe from "../components/ContactMe.vue"

export default {
  name: "Home",
  components: {
    Header,
    Greeting,
    Projects,
    ContactMe
  }
};
</script>
