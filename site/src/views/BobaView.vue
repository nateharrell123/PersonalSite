<template>
<div>
  <BobaHeader/>
  <BobaNavButtons/>
  <BobaMission/>
  <BobaImages/>
  <BobaFooter/>
</div>
</template>

<script>
import BobaHeader from "../components/Boba/BobaHeader.vue"
import BobaNavButtons from "../components/Boba/BobaNavButtons.vue"
import BobaMission from "../components/Boba/BobaMission.vue"
import BobaImages from "../components/Boba/BobaImages.vue"
import BobaFooter from "../components/Boba/BobaFooter.vue"

export default {
    name: "BobaView",
    components: {
      BobaHeader,
      BobaNavButtons,
      BobaMission,
      BobaImages,
      BobaFooter
    }
}
</script>

<style scoped>

</style>