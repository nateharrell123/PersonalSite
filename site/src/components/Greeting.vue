<template>
    <div>
        <v-row class="row">
            <v-col cols="2"/>
            <v-col cols="8">
                <p class="text">{{greeting}}</p>
            </v-col>
            <v-col cols="2"/>
        </v-row>
        <v-row class="ma-0 pa-0">
            <v-col cols="2"/>
            <v-col cols="8" class="intro">
                <v-row class="ma-0 pa-0">
                    I'm a Software Developer &#129489;&#8205;&#128187;,
                </v-row>
                <v-row class="ma-0 pa-0">
                    Musician &#127925;,
                </v-row>
                <v-row class="ma-0 pa-0">
                    And lover of tech &#129299;.
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Greeting",
    data(){
        return{
            greeting: '',
        }
    },
    mounted(){
        var randomNumber = Math.floor(Math.random() * 5);
        switch (randomNumber) {
            case 1:
                this.greeting = `Hey there, I'm Nate!`;
                break;
            case 2:
                this.greeting = `Hello, I'm Nate!`
                break;
            case 3:
                this.greeting = `Welcome, I'm Nate!`;
                break;
            case 4:
                this.greeting = `Howdy, I'm Nate!`;
                break;
            default:
                this.greeting = `Hello there, I'm Nate!`;
                break;
        }
    }
}
</script>

<style scoped>
.row{
    padding-top:5%;
    padding-left:8%;
}
.text{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size:40px;
    font-weight: 800;
    letter-spacing: 1px;
	padding: 0;
	margin: 0;
	margin-left: 34%;
	transform: translateX(-200%);
	opacity: 0;
	animation: slide-in-anim 1.5s ease-out forwards;
}
.intro{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size:18px;
    font-weight: 500;
    padding-top:0px;
    margin-left: 23.5%;
    animation: 3s ease 0s normal forwards 1 fadein;
}
.title{
    padding-top:0px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size:22px;
    font-weight: 800;
}

@keyframes slide-in-anim {
	20% {
		opacity: 0;
	}
	60% {
		transform: translateX(-45%);
	}
	75% {
		transform: translateX(-52%);
	}
	100% {
		opacity: 1;
		transform: translateX(-50%);
	}
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>