<template>
    <div>
        <v-row>
            <v-col>
                <p class="title">Check out my projects:</p>
            </v-col>
        </v-row>
        <v-row class="ma-0 pa-0" id="projects">
            <v-col cols="2"/>
            <v-col>
            <Melodies/>
            </v-col>
            <v-col>
            <Melodies/>
            </v-col>
            <v-col>
            <Melodies/>
            </v-col>
            <v-col cols="2"/>
        </v-row>
    </div>
</template>

<script>
import Melodies from "./Melodies.vue"
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
    padding-top:50px;
    margin-left:24.5%;
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