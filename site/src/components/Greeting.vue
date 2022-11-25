<template>
    <div>
        <v-row class="row">
            <v-col cols="2"/>
            <v-col cols="8">
                <span class="greeting" id="slide">Greeting</span>
            </v-col>
            <v-col cols="2"/>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Greeting",    
}
</script>

<style scoped>
.greeting{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size:36px;
    font-weight: 600;
}
.row{
    padding-top:5%;
    padding-left:8%;
}
.greeting:hover #slide{
    transition:1s;
    left:0;
}
</style>