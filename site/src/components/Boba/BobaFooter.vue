<template>
<div class="base">
    <v-row>
        <v-col class="header">
            Copyright © 2022 all rights reserved.
        </v-col>
    </v-row>
    <v-row>
        <v-col class="ml-8">
            <BobaAddress
            :Location="'Mankato'"
            :Address="'711-2880 Nulla St. Mankato Mississippi 96522'"
            :Hours="'M-F, 10:30am - 8pm'"
            :Phone="'(257) 563-7401'"
            :Email="'BobaTea@mail.com'"
            />
        </v-col>
        <v-col class="ml-8">
            <BobaAddress
            :Location="'Roseville'"
            :Address="'606-3727 Ullamcorper. Street Roseville NH 11523'"
            :Hours="'M-F, 10:30am - 8pm'"
            :Phone="'(786) 713-8616'"
            :Email="'BobaTea@mail.com'"
            />
        </v-col>
        <v-col class="ml-8">
            <BobaAddress
            :Location="'San Antonio'"
            :Address="'7292 Dictum Av. San Antonio MI 47096'"
            :Hours="'M-F, 10:30am - 8pm'"
            :Phone="'(651) 233-3601'"
            :Email="'BobaTea@mail.com'"
            />
        </v-col>
        <v-col class="ml-8">
            <BobaAddress
            :Location="'Chelsea'"
            :Address="'511-5762 At Rd. Chelsea MI 67708'"
            :Hours="'M-F, 10:30am - 8pm'"
            :Phone="'(128) 427-2631'"
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
.base{
    /* background: #222; */
    background: #dc6f56;
    margin-top:80px;
    height:370px;
}
@media (max-width:600px){
    .base{
        height:810px;
    }
}
.body{
    color:white;
    font-size:14px !important;
    text-shadow: rgb(0 0 0 / 40%) 0px .1px 5px;
    letter-spacing:.5px;
}
.header{
    color:white;
    text-align:center;
    font-family: 'Passion One' serif;
    /* text-shadow: rgb(0 0 0 / 40%) 0px 2px 5px; */
    font-size:14px;
}
</style>