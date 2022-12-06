<template>
<v-menu
      open-on-hover
      bottom
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>

      <v-card color="blue" width="500">
        <div class="card-item"
          v-for="(item, index) in items"
          :key="index"
        >
        {{item.title}}
        </div>
      </v-card>
    </v-menu>    
</template>

<script>
export default {
    name: "BankMenuItem",
    data(){
        return{
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
        }
    }
}
</script>

<style scoped>
.card-item{
    cursor:pointer;
}
.card-item:hover{
    color: red;
    transition: background .2s;
}
</style>