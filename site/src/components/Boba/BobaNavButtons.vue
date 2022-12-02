<template>
    <div>
        <v-row id="fade-in">
            <v-col align="center">
                <v-btn color="#dc6f56" rounded class="nav-buttons">
                    <span class="button-text-color">Home</span>
                </v-btn>
                <v-btn color="#dc6f56" rounded class="nav-buttons">
                    <span class="button-text-color">Menu</span>
                </v-btn>
                <v-btn color="#dc6f56" rounded class="nav-buttons">
                    <span class="button-text-color">About</span>
                </v-btn>
            </v-col>
        </v-row>
        <BobaCarousel/>
    </div>
</template>

<script>
import BobaCarousel from "@/components/Boba/BobaCarousel.vue"

export default {
    name: "BobaNavButtons",
    components: {
        BobaCarousel,
    }
}
</script>

<style scoped>
.button-text-color{
    /* color: #4f3f30; */
    color:white;
    font-weight:700;
    font-size:16px;
}
#fade-in{
    animation: 3s ease 0s normal forwards 1 fadein;
}
.nav-buttons{
    margin-right:10px;
    margin-left:10px;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>