<template>
    <div>
        <v-row class="ma-0 pa-0">
            <v-col cols="2"/>
            <v-col cols="8">
                <p class="title">Check out my projects:</p>
            </v-col>
            <v-col cols="2"/>
        </v-row>
        <v-row class="ma-0 pa-0" id="projects" align-self="center">
            <v-col cols="2"/>
            <v-col>
            <Melodies/>
            </v-col>
            <v-col cols="1"/>
            <v-col>
            <Melodies/>
            </v-col>
            <v-col cols="1"/>
            <v-col cols="3"/>
        </v-row>
    </div>
</template>

<script>
import Melodies from "./Projects/Melodies.vue"
export default {
    name: "Projects",
    components: {
        Melodies,
    }
}
</script>

<style scoped>
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