<template>
    <div class="container">
        <v-row class="mission-container">
            <v-col cols="2"/>
            <v-col cols="3" class="ml-2"  v-show="$vuetify.breakpoint.lg">
            <v-img width="311" height="482" src="https://picsum.photos/id/225/2400/2400" alt="nate"
                class="nate">
            </v-img>
            </v-col>
            <v-col cols="5" class="message-cont">
                <div class="title">Our Story</div>
                <v-col class="message">
                    Here at Boba Cafe, we strive to deliver the<strong> best </strong>tasting boba milk tea around.
                    <br/>
                    <br/>
                    We started out as a small local business, but have grown thanks to all our customers support.
                    We appreciate each and every one of you taking the time to check out our tea, and we
                    hope you absolutely <strong> love </strong> it!
                </v-col>
                <v-col>
                <v-btn @click="aboutClick" x-large
                color="#dc6f56" rounded class="nav-buttons">
                    <span class="button-text-color">About</span>
                </v-btn>
                </v-col>
            </v-col>
            <v-col cols="2"/>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "BobaMission",
    data(){
        return{
            model: 0,
        }
    },
    methods: {
        aboutClick(){
            this.model = 2;
        }
    }
}
</script>

<style scoped>
.mission-container{
    margin-top:100px;
}
.nate{
    background-size:100%;
}
.nav-buttons{
    margin-top:30px;
}
.button-text-color{
    color:white;
    font-weight:700;
    font-size:22px;
}
.message-cont{
    margin-left:20px;
}
.title{
    font-size:48px !important;
    margin-top:30px;
    text-align: left;
    margin-left:3px;
    line-height:1;
}
.message{
    text-align:left;
    margin-top:40px;
    font-weight:400;
    font-size:17px;
}
</style>