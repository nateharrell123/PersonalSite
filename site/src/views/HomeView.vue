<template>
<div>
  <TopBar />
  <HomePage />
  <Amp />
</div>
</template>

<script>
import HomePage from "../components/HomePage";
import TopBar from "../components/TopBar"
import Amp from "../components/Amp"
export default {
  name: "Home",

  components: {
    HomePage,
    TopBar,
    Amp
  },
};
</script>