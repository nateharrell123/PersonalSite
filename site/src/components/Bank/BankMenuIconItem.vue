<template>
    <v-col class="pad pa-1">
    <div class="icon-item">
    <v-icon size="33" color="#1eb88f">{{IconName}}</v-icon>
    <span> {{Title}} </span>
    </div>
    </v-col>
</template>

<script>
export default {
    name: "BankMenuIconItem",
    props: {
        Title: String,
        IconName: String,
    }
}
</script>

<style scoped>
.pad{
}
.icon-item{
  margin-left:30px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight:700;
}
.icon-item:hover{
  color:#4978fb;
  transition:0.2s ease;
  cursor:pointer;
}

</style>