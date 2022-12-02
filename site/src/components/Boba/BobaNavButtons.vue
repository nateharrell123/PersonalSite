<template>
    <div>
        <v-row class="nav-buttons">
            <v-col align="center">
                <v-btn color="#dc6f56" rounded>
                    <span class="button-text-color">Home</span>
                </v-btn>
            </v-col>
            <v-col align="center">
                <v-btn color="#dc6f56" rounded>
                    <span class="button-text-color">Home</span>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "BobaNavButtons",
}
</script>

<style scoped>
.button-text-color{
    color: #4f3f30;
    font-weight:700;
    font-size:16px;
}
.nav-buttons{
}
</style>