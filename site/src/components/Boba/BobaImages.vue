<template>
    <v-row class="images">
        <v-col cols="1" v-show="$vuetify.breakpoint.lg"/>
        <v-col align="center">
      <v-img src="https://picsum.photos/id/225/3600/3600" alt="nate"
        class="img">
      </v-img>
            <div class="tea-title">Tea Item #1 </div>
        </v-col>
        <v-col align="center">
      <v-img src="https://picsum.photos/id/365/3600/3600" alt="nate"
        class="img">
      </v-img>
        <div class="tea-title">Tea Item #2 </div>
        </v-col>
        <v-col align="center">
      <v-img src="https://picsum.photos/id/312/3600/3600" alt="nate"
        class="img">
      </v-img>
      <div class="tea-title">Tea Item #3 </div>
        </v-col>
        <v-col cols="1" v-show="$vuetify.breakpoint.lg"/>
    </v-row>
</template>

<script>
export default {
    name: "BobaImages",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.img{
    background-size:100%;
    height:421px;
    width:274px;
}
.images{
    margin-top:200px;
}
.tea-title{
    font-size:20px;
    font-weight:bold;
    margin-top:20px;
}
</style>