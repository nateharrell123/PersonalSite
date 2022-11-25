<template>
<div>
    <Header/>
    <Greeting/>
    <Projects/>
</div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue"
import Greeting from "../components/Greeting.vue"
import Projects from "../components/Projects.vue"

export default {
  name: "Home",
  components: {
    Header,
    Greeting,
    Projects
  }
};
</script>
