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
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <label class="label">
                Message:
            </label>
            <v-textarea :maxlength="charLimit" v-if="!sent" v-model="message" class="textarea" background-color="#f3f4f6" rows="2">
            </v-textarea>
            <div v-else style="padding-bottom:60px;">
                Thank you &#128513;! Your message has been sent, and I'll get back to you ASAP.
            </div>
            <div class="char-count" v-if="!sent">
                {{charCount}}
            </div>
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
            charLimit: 250,
        }
    },
    methods: {
        send(){
            this.sent = !this.sent;
        }
    },
    computed: {
        charCount(){
            return `${this.message.length}/${this.charLimit}`;
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
.char-count{
    position:relative;
    bottom:15px;
    float:right;
    color: #595959;
}
.send{
    margin-bottom:20px;
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