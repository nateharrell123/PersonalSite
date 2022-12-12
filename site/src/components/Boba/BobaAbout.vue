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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione minima modi aspernatur aut. Reprehenderit quae nam quidem suscipit necessitatibus quo.
                <br/>
                <br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non, saepe mollitia fuga commodi fugit labore impedit asperiores cum culpa adipisci facere ea velit, vero tenetur placeat. Perspiciatis, necessitatibus excepturi!
                <br/>
                <br/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet ut accusamus itaque laborum non quas iste incidunt labore? Fuga tempora corporis delectus cumque a vel doloremque veniam saepe modi sint atque, quam maxime inventore.
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
    font-family: 'Passion One' serif;
    text-shadow: rgb(0 0 0 / 40%) 0px 8px 5px;
}
.desc{
    font-family: 'Passion One' serif;
    color:white;
    font-size:22px;
    text-shadow: rgb(0 0 0 / 40%) 0px 8px 5px;
}
</style>