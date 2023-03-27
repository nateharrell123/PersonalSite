<template>
    <div class="projects-container">
        <v-container>
            <v-row class="ma-0 pa-0">
                <v-col>
                    <p class="title">Check out my projects:</p>
                </v-col>
            </v-row>
            <v-row id="projects">
                <v-col>
                    <BobaCard/>
                </v-col>
                <v-col>
                    <Melodies/>
                </v-col>
            </v-row>
            <v-row class="shrink" id="projects">
                <v-col>
                    <BankCard/>
                </v-col>
                <v-col>
                    <Clarity/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Melodies from "./Projects/Melodies.vue"
import BobaCard from "./Projects/BobaCard.vue"
import BankCard from "./Projects/BankCard.vue"
import Clarity from "./Projects/Clarity.vue"

export default {
    name: "Projects",
    components: {
        Melodies,
        BobaCard,
        BankCard,
        Clarity
    }
}
</script>

<style scoped>
.projects-container{
    margin-bottom:10%;
}
.title{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-weight: 800;
    font-size:28px !important;
    letter-spacing: 1px;
    padding-top:40px;
    animation: 3s ease 0s normal forwards 1 fadein;
}
#projects{
    animation: 3s ease 0s normal forwards 1 fadein;
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