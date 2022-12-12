<template>
    <div class="almighty-container">
        <div class="header-container">
            <v-row class="ma-0 pa-0">
                <v-col class="title pl-0">
                    <v-btn icon @click="back" style="float:left;">
                    <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <span class="hotfix">About</span>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutHeader",
        methods: {
            back() {
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>

.header-container{
    border-bottom: .02rem rgb(197, 194, 194) solid;
}
.hotfix{
    position:relative;
    right:14px;
}
.title{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    letter-spacing: 2px;
    font-weight:180;
    font-size:28px !important;
    text-align: center;
}
</style>