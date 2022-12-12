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
                    <span class="body-text">
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
                <v-card class="tech-card">
                    <v-row align="center">
                        <v-col cols="6" lg="1">
                            <v-img src="@/assets/logo.svg"
                            height="50"
                            width="50"
                            >
                            </v-img>
                        </v-col>
                        <v-col>
                        <button @click="toVue" class="contact">Vue.js + Vuetify</button>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="6" lg="1">
                            <v-img src="@/assets/CSharp.png"
                            height="50"
                            width="50"
                            >
                            </v-img>
                        </v-col>
                        <v-col>
                        <button @click="toCSharp" class="contact">C# + ASP.NET</button>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col cols="6" lg="1">
                            <v-img src="@/assets/SQL.png"
                            height="50"
                            width="50"
                            class="sql"
                            >
                            </v-img>
                        </v-col>
                        <v-col>
                        <button @click="toSQL" class="contact">SQL + SSMS</button>
                        </v-col>
                    </v-row>
                </v-card>
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
            },
            toVue() {
                window.open('https://vuetifyjs.com/en/');
            },
            toCSharp() {
                window.open('https://learn.microsoft.com/en-us/dotnet/csharp/');
            },
            toSQL() {
                window.open('https://www.microsoft.com/en-us/sql-server/');
            }
        }
    }
</script>

<style scoped>
.content-container{
    margin-left:15%;
    margin-top:5%;
    margin-right:15%;
    margin-bottom:15%;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif !important;
}
.content-card{
    padding:20px;
}
.tech-card{
    padding:20px;
    margin-top:20px;
}
.youTube{
    color:red;
    cursor: pointer;
}
.commerce{
    color:green;
    cursor:pointer;
}
.body-text{
    font-weight:200;
    font-size:18px;
    letter-spacing: 1px;
}
.tech-title{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif !important;
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
.contact{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight:180;
  letter-spacing: 2px;
  font-size:20px;
  background: none;
  outline: none;
  border:none;
}
.contact:hover{
  color:#206abe;
}
.contact::after{
  content:'';
  height:1px;
  width:0%;
  background-color: #206abe;
  display:block;
  transition:.2s ease-in-out;
}
.contact:hover::after{
  content:'';
  height:1px;
  width:100%;
  background-color:#206abe;
  display: block;
}
</style>