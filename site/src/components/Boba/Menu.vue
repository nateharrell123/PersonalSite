<template>
    <div>
        <v-row>
            <v-col align="center">
                <span class="menu-title">MENU</span>
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col cols="5" class="menu-container ml-auto">
                <MenuItem :Picture="'https://picsum.photos/id/225/1280/1280'" 
                :Price="8"
                :Title="'Tea Item #1'"
                :Desc="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
                />
                <MenuItem :Picture="'https://picsum.photos/id/312/1280/1280'" 
                :Price="7.95"
                :Title="'Tea Item #2'"
                :Desc="'Debitis aliquam voluptate repellendus fugiat. Velit accusantium doloremque neque.'"
                />
            </v-col>
            <v-col cols="1"/>
            <v-col cols="5" class="menu-container mr-auto">
                <MenuItem :Picture="'https://picsum.photos/id/326/1280/1280'" 
                :Price="12"
                :Desc="'Incidunt dignissimos modi ducimus non, maxime eligendi error quidem repellendus, ipsam earum soluta.'"
                :Title="'Tea Item #3'"/>
                <MenuItem :Picture="'https://picsum.photos/id/365/1280/1280'" 
                :Price="6"
                :Desc="'Maxime eligendi error quidem repellendus, ipsam earum soluta.'"
                :Title="'Tea Item #4'"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import MenuItem from "../Boba/MenuItem.vue"
export default {
    name: "Menu",    
    components: {
        MenuItem
    }
}
</script>

<style scoped>
.menu-title{
    font-size:50px;
    font-weight:400;
}
.menu-container{
    border:4px solid #dc6f56;
    border-radius:35px;
}
</style>