<script setup>
import { ref } from 'vue';

const valor = ref("usando o v-bind unidirecional")
const novovalor = ref("usando o v-model bidirecional")

</script>

<template>
  <div>
    <input type="text" :value="valor">
    <p> {{ valor }} </p>
  </div>
  <div>
    <input type="text" v-model="novovalor">
    <p> {{ novovalor }} </p>
  </div>
</template>

<style scoped>
div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
}
</style>  