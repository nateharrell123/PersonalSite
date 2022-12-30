<template>
    <div>
        <v-row>
            <v-col class="header">
                OUR MISSION
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2"/>
            <v-col cols="8" class="desc">
                Here at Boba Cafe, we strive to make the best tea possible for our customers.
                <br/>
                <br/>
                <br/>
                We treat every drink as a special experience for our customers to enjoy, and we hope that our tea will help you get through whatever life throws at you.
                <br/>
                <br/>
                We use only the best ingredients, for the best customers. Everything is made in-house to ensure the best quality for you.
            </v-col>
            <v-col cols="2"/>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "BobaAbout"    
}
</script>

<style scoped>
.header{
    font-size:48px;
    letter-spacing: 2px;
    font-weight:800;
    margin-top:40px;
    color:white;
    text-align: center; /* ???? */
    float:right;
    text-shadow: rgb(0 0 0 / 40%) 0px 8px 5px;
}
.desc{
    color:white;
    font-size:22px;
    text-shadow: rgb(0 0 0 / 40%) 0px 8px 5px;
}
</style>