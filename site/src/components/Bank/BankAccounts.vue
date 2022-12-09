<template>
<div>
    <div class="top-row">
    <v-row class="font">
        <v-col>
            <span class="accounts">Accounts:</span>
        </v-col>
        <div style="margin-right:29%">
        <v-col>
            <v-icon class="cog">mdi-cog-outline</v-icon>
        </v-col>
        </div>
    </v-row>
    </div>
    <div class="accounts-container">
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
                        <v-col align="right">
                            $24.44
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="inner-card">
                    <v-row>
                        <v-col>
                            <span class="account-title">Savings...3315</span>
                        </v-col>
                        <v-col align="right">
                            $197.00
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                </v-card>
                <v-row class="ma-0 pa-0">
                    <v-col class="inside-check">
                    Credit cards
                    </v-col>
                </v-row>
                <v-card class="inner-card">
                    <v-row>
                        <v-col>
                            <span class="account-title">Credit Card...8807</span>
                            <br/>
                            <span style="color:grey;">Available credit $2,000.00</span>
                        </v-col>
                        <v-col align="right">
                            $0.00
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </v-card>
    </div>
</div>
</template>

<script>
export default {
    name: "BankAccounts",
}
</script>

<style scoped>
.inner-container{
    border-top: 1px solid black;
    background-color:lightgrey;
    padding-bottom:30px;
}
.inner-card{
    border-radius:15px;
    margin:3%;
    padding:20px;
}
.account-title{
    font-size:18px;
    color: #4978fb;
    font-weight: bold;
}
.card{
    border-radius:25px;
}

.top-row{
    margin-left:10%;
    margin-top:40px;
}
.accounts-container{
    margin-left:10%;
    margin-right:27%;
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
    font-size:22px;
}
</style>