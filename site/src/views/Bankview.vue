<template>
<div>
    <BankHeader/>
    <BankAccounts/>
</div>
</template>

<script>
import BankHeader from "../components/Bank/BankHeader.vue"
import BankAccounts from "../components/Bank/BankAccounts.vue"

export default {
    name: "Bankview",
    components: {
        BankHeader,
        BankAccounts
    }
}
</script>