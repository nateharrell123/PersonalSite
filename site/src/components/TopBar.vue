<template>
    <div>
        <v-app-bar class="bar" color="#32363b">
            <v-row class="row">
                <v-col cols="6"> Left Side </v-col>
                <v-col cols="2"> Col 3 </v-col>
                <v-col cols="2"> Col 4 </v-col>
                <v-col cols="2">
                    <button @click="toContact" class="hover">
                        Contact
                    </button>
                </v-col>
            </v-row>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "TopBar",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.row {
    text-align: center;
    font-size:25px;
}
.bar {
    background-color:#222;
}
.hover{
  color: #9AAAAA;
  background:none;
  outline:none;
  border:none;
}
.hover:hover{
  color:#9DDDDD;
}
.hover::after{
  content:'';
  height:2px;
  width:0%;
  background-color: #1AAAAA;
  display:block;
  transition: .2s ease-in-out;
}
.hover:hover::after{
  content:'';
  height:2px;
  width:100%;
  background-color: #1AAAAA;
  display:block;
}
</style>