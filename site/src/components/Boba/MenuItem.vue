<template>
    <v-row class="menu-row">
        <v-col cols="4">
            <v-avatar size="140px" v-show="$vuetify.breakpoint.lg">
            <v-img :src="Picture" alt="nate"
                class="nate">
            </v-img>
            </v-avatar>
        </v-col>
        <v-col cols="8" align="left">
            <div class="menu-item-title">
                {{Title}}
                <span class="price"> ${{Price}} </span>
            </div>
            <div class="menu-desc">
                {{Desc}}
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        Title: String,
        Price: Number,
        Picture: String,
        Desc: String,
    }    
}
</script>

<style scoped>
.menu-desc{
    margin-top:10px;
    color: #dc6f56;
    font-style: italic;
}
.price{
    float:right;
}
.menu-item-title{
    font-size:22px;
    font-weight:bold;
    margin-top:20px;
    border-bottom: 1px solid black;
    border-bottom-style:dashed;
}
</style>