<template>
<div>
  <BobaHeader/>
  <BobaNavButtons/>
  <BobaMission/>
  <BobaImages/>
</div>
</template>

<script>
import BobaHeader from "../components/Boba/BobaHeader.vue"
import BobaNavButtons from "../components/Boba/BobaNavButtons.vue"
import BobaMission from "../components/Boba/BobaMission.vue"
import BobaImages from "../components/Boba/BobaImages.vue"

export default {
    name: "BobaView",
    components: {
      BobaHeader,
      BobaNavButtons,
      BobaMission,
      BobaImages
    }
}
</script>

<style scoped>

</style>