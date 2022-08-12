<template>
    <v-row class="footer" id="fade-in">
        <v-col>
            Footer
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Footer",
    data(){
        return{
            hide: false
        }
    },
    mounted(){
    this.activate()
  },
  methods: {
    activate(){
      setTimeout(() => this.hide = true, 2030)
    },
  }    
}
</script>

<style scoped>
.footer{
background-color: #32363b;
}
#fade-in{
    animation: 3s ease 0s normal forwards 1 fadein;
}
</style>