<template>
<div>
    <BankHeader/>
    <BankAccounts/>
    <BankFooter/>
</div>
</template>

<script>
import BankHeader from "../components/Bank/BankHeader.vue"
import BankAccounts from "../components/Bank/BankAccounts.vue"
import BankFooter from "../components/Bank/BankFooter.vue"

export default {
    name: "Bankview",
    components: {
        BankHeader,
        BankAccounts,
        BankFooter
    },
    // mounted(){
    //     this.$forceUpdate();
    // },
}
</script>