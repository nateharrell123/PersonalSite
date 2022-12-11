<template>
    <div class="content-container" id="fade-in">
        <v-card class="content-card">
        <v-row>
            <v-col>
                <div class="title">
                    About Me:
                </div>           
            </v-col>
        </v-row>
            <v-row>
                <v-col class="nate">
                    <v-img src="@/assets/nate.jpg">
                    </v-img> 
                </v-col>
                <v-col>
                    <span class="body">
                        I am a software developer based in Kansas City, MO, and
                        graduated from Kansas State University with a bachelor's degree
                        in Computer Science. I currently work full time as 
                        an associate developer at <span @click="toCommerce" class="commerce"> Commerce Bank. </span>
                        Beyond software engineering, I am an avid musician! If you're curious, check out my
                        <span @click="toYouTube" class="youTube"> YouTube.</span> 
                        ツ
                    </span>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                <div class="title">
                    My Tech Stack:
                </div>  
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    Vue
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "AboutContent",
        methods: {
            toCommerce(){
                window.open('https://www.commercebank.com/');
            },
            toYouTube() {
                window.open('https://youtube.com/c/nateharrell');
            }
        }
    }
</script>

<style scoped>
.content-container{
    margin-left:15%;
    margin-top:5%;
    margin-right:15%;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
.content-card{
    padding:20px;
}
.youTube{
    color:red;
    cursor: pointer;
}
.commerce{
    color:green;
    cursor:pointer;
}
.body{
    font-weight:200;
    font-size:18px;
    letter-spacing: 1px;
}
.title{
    font-size:32px !important;
    font-weight:500;
    white-space: nowrap;
    margin-top:5%;
}
.nate{
    max-height:250px;
    max-width:250px;
}
.test{
    background-color:red;
    height:100%;
    width:100%;
}
</style>