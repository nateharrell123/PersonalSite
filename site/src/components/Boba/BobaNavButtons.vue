<template>
    <div>
        <v-row id="fade-in">
            <v-col align="center">
                <v-btn @click="homeClick"
                :style="{
                    backgroundColor : isHome ? '#edce7f !important' : '#dc6f56',
                }"
                color="#dc6f56" rounded class="nav-buttons">
                    <span class="button-text-color">Home</span>
                </v-btn>
                <v-btn @click="menuClick" 
                :style="{
                    backgroundColor : isMenu ? '#edce7f !important' : '#dc6f56',
                }"
                color="#dc6f56" rounded class="nav-buttons">
                    <span class="button-text-color">Menu</span>
                </v-btn>
                <v-btn @click="aboutClick"
                :style="{
                    backgroundColor : isAbout ? '#edce7f !important' : '#dc6f56',
                }"
                color="#dc6f56" rounded class="nav-buttons">
                    <span class="button-text-color">About</span>
                </v-btn>
            </v-col>
        </v-row>
        <BobaCarousel :screen="model"/>
    </div>
</template>

<script>
import BobaCarousel from "@/components/Boba/BobaCarousel.vue"

export default {
    name: "BobaNavButtons",
    data(){
        return{
            isHome: false,
            isMenu: false,
            isAbout: false,
            model: 0,
        }
    },
    components: {
        BobaCarousel,
    },
    methods: {
        menuClick(){
            this.isMenu = !this.isMenu;
            this.model = 1;

            this.isHome = false;
            this.isAbout = false;
        },
        aboutClick(){
            this.isAbout = !this.isAbout;
            this.model = 2;

            this.isHome = false;
            this.isMenu = false;
        },
        homeClick(){
            this.isHome = !this.isHome;
            this.model = 0;

            this.isMenu = false;
            this.isAbout = false;
        }
    }
}
</script>

<style scoped>
.v-btn:active{
    color:blue;
}
.button-text-color{
    /* color: #4f3f30; */
    color:white;
    font-weight:700;
    font-size:16px;
}
#fade-in{
    animation: 1s ease 0s normal forwards 1 fadein;
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