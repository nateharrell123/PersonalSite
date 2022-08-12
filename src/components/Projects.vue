<template>
    <v-row id="fade-in">
        <v-col cols="3"/> <!-- left -->
        <v-col cols="2">
            <Project/>
        </v-col>
        <v-col cols="2">
            <Project/>
        </v-col>
        <v-col cols="2">
            <Project/>
        </v-col>
        
        <v-col cols="3"/> <!-- right -->

    </v-row>
    
</template>

<script>
import Project from "./Project.vue"
export default {
    name: "Projects",
    data(){
        return{

        }
    },
    components: {
        Project
    }

}
</script>

<style scoped>
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
#fade-in{
    animation: 3s ease 0s normal forwards 1 fadein;
}
</style>