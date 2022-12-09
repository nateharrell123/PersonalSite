<template>
<div>
    <div class="top-row">
    <v-row class="font">
        <v-col lg="8">
            <div class="accounts">Accounts:
            <v-icon style="float:right;" class="cog">mdi-cog-outline</v-icon>
            </div>

   <div class="accounts-container">
        <v-row>
            <v-col class="mt-0 pt-0">
        <v-card class="card">
            <v-row class="ma-0 pa-0">
                <v-col class="check">
                    Checkings & Savings
                </v-col>
                <v-col align="end" class="check">
                    $221.44
                </v-col>
            </v-row>
            <div class="inner-container">
                <v-card class="inner-card">
                    <v-row>
                        <v-col>
                            <span class="account-title">Checking...4992</span>
                        </v-col>
                        <v-col align="right" cols="4">
                            $24.44
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="inner-card">
                    <v-row>
                        <v-col cols="8">
                            <span class="account-title">Savings...3315</span>
                        </v-col>
                        <v-col align="right" cols="4">
                            $197.00
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                </v-card>
                <v-row class="ma-0 pa-0">
                    <v-col class="inside-check">
                    Credit cards
                    </v-col>
                <v-col align="end" class="inside-check">
                    $2000.00
                </v-col>
                </v-row>
                <v-card class="inner-card">
                    <v-row>
                        <v-col cols="8">
                            <span class="account-title">Credit Card...8807</span>
                            <br/>
                            <span class="available-credit">Available credit $2,000.00</span>
                        </v-col>
                        <v-col align="right" cols="4">
                            $0.00
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </v-card>
            </v-col>
        </v-row>
    </div>

        </v-col>
     <v-col class="contact-us">
                <v-col class="contact-title pl-0" style="margin-bottom:1px;">
                    Contact us:
                </v-col>
                    <v-card>
                        <v-row>
                            <v-col class="pl-8 pr-8">
                                <label>
                                    First Name:
                                </label>
                                <v-text-field class="mt-0 pt-1">
                                    Ho
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="pl-8 pr-8">
                                <label>
                                    Last Name:
                                </label>
                                <v-text-field class="mt-0 pt-1">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="pl-8 pr-8">
                                <label>
                                    Message:
                                </label>
                                <v-textarea class="mt-0 pt-1 msg" color="#1eb88f"> <!--background-color="#1eb88f"-->
                                </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="pl-8 pr-8">
                                <v-btn height="40" background-color="#d3d3d3" class="mt-0 pt-1 send-message">
                                    Send Message:
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
    </v-row>
    </div>
</div>
</template>

<script>
export default {
    name: "BankAccounts",
}
</script>

<style scoped>
@media (max-width:600px){
    .contact-title{
        position:relative;
        left:15px;
    }
    .contact-us{
        margin-left:5%;
    }

}

.contact-title{
    font-size:22px;
}
.contact-us{
    margin-right: 5%;
}
.inner-container{
    border-top: 1px solid black;
    background-color:#d3d3d3;
    padding-bottom:30px;
}
.available-credit{
    font-size:14px;
    color:grey;
}
.inner-card{
    border-radius:15px;
    margin:3%;
    padding:20px;
}
.send-message{
    width:100%;
}
.account-title{
    font-size:16px;
    color: #4978fb;
    font-weight: bold;
}
.card{
    border-radius:25px;
}

.top-row{
    margin-top:40px;
}
.accounts-container{
    margin-left:5%;
    margin-top:20px;
}

.font{
  font-family: 'Montserrat', sans-serif;
}
.cog{
    position:relative;
    top:10px;
    right:5px;
    cursor:pointer;
}
.check{
    /* margin:1%; */
    background-color:white;
}
.inside-check{
    /* margin:1%; */
    background-color:white;
    border-top: 1px solid black;
    border-bottom:1px solid black;
}
.accounts{
    margin-left:5%;
    font-size:22px;
}
</style>