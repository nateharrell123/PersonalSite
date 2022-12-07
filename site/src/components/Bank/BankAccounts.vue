<template>
<div>
    <v-row class="font mt-12 ml-12">
        <v-col cols="8">
            <span class="accounts">Accounts:</span>
        </v-col>
        <v-col>
            <v-icon class="cog">mdi-cog-outline</v-icon>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8" class="ml-16">
        <v-card class="card"> <!--f7f7fa-->
            <v-row>
                <v-col class="ml-3 check">
                    Checkings & Savings
                </v-col>
                <v-col align="end" class="mr-3 check">
                    $224.44
                </v-col>
            </v-row>
            <v-row>
                <v-col class="inner-col">
                    hi
                </v-col>
            </v-row>
        </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    name: "BankAccounts",
}
</script>

<style scoped>

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
    border-bottom: .5px solid grey;
}
.card{
}
.inner-col{
    
}
.accounts{
    font-size:22px;
}
</style>