<template>
<div>
  <TopBar />
  <HomePage />
</div>
</template>

<script>
import HomePage from "../components/HomePage";
import TopBar from "../components/TopBar"
export default {
  name: "Home",

  components: {
    HomePage,
    TopBar
  },
};
</script>