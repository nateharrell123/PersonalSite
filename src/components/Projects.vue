<template>
    <v-row id="fade-in">
        <v-col cols="3"/> <!-- left -->
        <v-col cols="2">
            <v-card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime ab, nesciunt ipsum sunt, perspiciatis voluptatibus quo quae ipsam ut quis aliquid. Officiis, nam tempore cupiditate vel error officia voluptatibus.
            </v-card>
        </v-col>
        <v-col cols="2">
            <v-card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime ab, nesciunt ipsum sunt, perspiciatis voluptatibus quo quae ipsam ut quis aliquid. Officiis, nam tempore cupiditate vel error officia voluptatibus.
            </v-card>
        </v-col>
        <v-col cols="2">
            <v-card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime ab, nesciunt ipsum sunt, perspiciatis voluptatibus quo quae ipsam ut quis aliquid. Officiis, nam tempore cupiditate vel error officia voluptatibus.
            </v-card>
        </v-col>
        
        <v-col cols="3"/> <!-- right -->

    </v-row>
    
</template>

<script>
export default {
    name: "Projects",
    data(){
        return{

        }
    },

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