<script setup>
import { ref } from "vue";

const qnt = ref(0);
</script>

<template>
  <div>
    <h3>Quantidade de Cachorros: {{ qnt }}</h3>
    <p v-if="qnt === 0">Não tem nenhum cachorro</p>
    <p v-else-if="qnt === 1">Tem um Cachorro</p>
    <p v-if="qnt > 1">Tem varios Cachorros</p>
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
