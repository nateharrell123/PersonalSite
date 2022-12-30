<template>
    <div class="container">
        <v-row>
            <v-col align="center">
                <span class="menu-title">MENU</span>
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col cols="5" class="menu-container ml-auto">
                <MenuItem :Picture="'https://picsum.photos/id/225/1280/1280'" 
                :Price="8"
                :Title="'Hibiscus Tea'"
                :Desc="'Hot Hibiscus tea, freshly made in house.'"
                />
                <MenuItem :Picture="'https://picsum.photos/id/312/1280/1280'" 
                :Price="7.95"
                :Title="'Honey tea'"
                :Desc="'Our famous Honey Tea, served hot. Perfect for a rainy day.'"
                />
            </v-col>
            <v-col cols="1"/>
            <v-col cols="5" class="menu-container mr-auto">
                <MenuItem :Picture="'https://picsum.photos/id/326/1280/1280'" 
                :Price="12"
                :Desc="'Fresh squeezed lemon tea, served hot or cold.'"
                :Title="'Lemon Tea'"/>
                <MenuItem :Picture="'https://picsum.photos/id/365/1280/1280'" 
                :Price="6"
                :Desc="'Fresh lavender tea made with simple syrup.'"
                :Title="'Lavender Tea'"/>
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
.container{
    margin-bottom:5%;
}
.menu-title{
    font-size:50px;
    font-weight:400;
}
.menu-container{
    border:4px solid #dc6f56;
    border-radius:35px;
}
</style>