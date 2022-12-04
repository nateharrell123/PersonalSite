<template>
<div>
  <BobaHeader/>
  <BobaNavButtons/>
  <BobaMission/>
</div>
</template>

<script>
import BobaHeader from "../components/Boba/BobaHeader.vue"
import BobaNavButtons from "../components/Boba/BobaNavButtons.vue"
import BobaMission from "../components/Boba/BobaMission.vue"

export default {
    name: "BobaView",
    components: {
      BobaHeader,
      BobaNavButtons,
      BobaMission
    }
}
</script>

<style scoped>

</style>