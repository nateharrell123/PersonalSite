<template>
<div class="contact-container">
    <v-row>
        <v-col>
            <span class="contact-title">Let's get in touch! ツ</span>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <label class="label">
                Name:
            </label>
            <v-text-field>
                asdjkl
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <label class="label">
                Message:
            </label>
            <v-textarea v-if="!sent" v-model="message" class="textarea" background-color="#d3d3d3" rows="2">
            </v-textarea>
            <div v-else>
                Thank you! Your message has been sent.
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-btn class="send" @click="send" v-if="message.length > 0 && !sent">
                Send
            </v-btn>
        </v-col>
    </v-row>
</div>    
</template>

<script>
// import { required } from "vuelidate/lib/validators";

export default {
    name: "ContactMe",
    data(){
        return{
            feedbackSubmitted: false,
            message: "",
            sent: false,
        }
    },
    methods: {
        send(){
            this.sent = !this.sent;
        }
    }
}
</script>

<style scoped>
.contact-container{
    margin-left:18%;
    margin-right:18%;
    margin-top:5%;
}
.send{
    margin-bottom:20px;
}
.textarea{

}
.label{
    font-size:18px;
    font-weight:500;
}
.contact-title{
    font-size:32px;
    font-weight:500;
}
</style>