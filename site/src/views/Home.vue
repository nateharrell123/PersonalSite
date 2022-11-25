<template>
<div>
    <Header/>
    <Greeting/>
</div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue"
import Greeting from "../components/Greeting.vue"

export default {
  name: "Home",
  components: {
    Header,
    Greeting,
  }
};
</script>
