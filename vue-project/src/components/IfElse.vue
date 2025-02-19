<script setup>
import { ref } from "vue";

const doglist = [
  { name: "Não há cachorro", age: "0" },
  { name: "Bulldog", age: 3 },
  { name: "Poodle", age: 2 },
  { name: "Pug", age: 4 },
  { name: "Beagle", age: 1 },
];

const qnt = ref(0);
</script>

<template>
  <div>
    <h3>Quantidade de Cachorros: {{ qnt }}</h3>
    <p v-show="qnt === 0">Lista de cachorros: {{ qnt }}</p>
    <p v-if="doglist[qnt]">
      Dog Breed: <strong>{{ doglist[qnt]?.name }}</strong> | Dog Age:
      <strong>{{ doglist[qnt]?.age }}</strong>
    </p>
    <p v-if="qnt > doglist.length - 1">Não há mais cachorros para exibir</p>
    <input type="number" v-model="qnt" />
  </div>
</template>

<style scoped>
div {
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
}
</style>
