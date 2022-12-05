<template>
<div class="black">
    <v-row>
        <v-col class="header">
            Copyright © 2022 all rights reserved.
        </v-col>
    </v-row>
    <v-row>
        <v-col class="ml-8">
            <BobaAddress
            :Address="'711-2880 Nulla St. Mankato Mississippi 96522'"
            :Hours="'M-F, 10:30am - 8pm'"
            :Phone="'(257) 563-7401'"
            :Email="'BobaTea@mail.com'"
            />
        </v-col>
    </v-row>
</div>
</template>

<script>
import BobaAddress from "../Boba/BobaAddress.vue"
export default {
    name : "BobaFooter",
    methods : {
    },
    components: {
        BobaAddress
    }
}
</script>

<style>
.black{
    background: #222;
    margin-top:80px;
    height:353px;
}
.body{
    color:white;
    font-size:14px;
    letter-spacing:.5px;
}
.header{
    color:white;
    text-align:center;
    font-family: 'Passion One' serif;
    font-size:12px;
}
</style>