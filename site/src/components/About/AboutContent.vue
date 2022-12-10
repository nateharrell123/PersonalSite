<template>
    <div class="content-container" id="fade-in">
        <v-row>
            <v-col>
                <div class="title">
                    About me:
                </div>           
            </v-col>
            <v-row>
                <v-col>
                    <v-img src="@/assets/nate.jpg"
                        class="nate">
                    </v-img> 
                </v-col>
                <v-col>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis laborum aut reiciendis, laboriosam itaque atque culpa architecto voluptate repellat ut.
                </v-col>
            </v-row>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "AboutContent"
    }
</script>

<style scoped>
.content-container{
    margin-left:15%;
    margin-top:5%;
    margin-right:15%;
}
.title{
    font-size:32px !important;
    font-weight:500;
    white-space: nowrap;
    margin-bottom:6.9%; /* nice */
}
.nate{
    max-height:250px;
    max-width:250px;
}
</style>