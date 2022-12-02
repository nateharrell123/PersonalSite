<template>
<div>
  <BobaHeader/>
  <BobaNavButtons/>
</div>
</template>

<script>
import BobaHeader from "../components/Boba/BobaHeader.vue"
import BobaNavButtons from "../components/Boba/BobaNavButtons.vue"

export default {
    name: "BobaView",
    components: {
      BobaHeader,
      BobaNavButtons,
    }
}
</script>

<style scoped>

</style>