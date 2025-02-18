<script setup>
import { ref } from "vue";
import EmitE from "./EmitE.vue";

const total = ref(0);

function updatecarvalue(p) {
  const valortotal = total.value + p;
  total.value = +valortotal;
}
</script>

<template>
  <div>
    <h1>Carrinho</h1>
    <p>Valor do Carrinho R$:{{ total }}</p>
    <EmitE produto="Caneta" :preco="2.5" @updatevalue="updatecarvalue" />
    <EmitE produto="Caderno" :preco="10.5" @updatevalue="updatecarvalue" />
    <EmitE produto="Bolsa" :preco="20.5" @updatevalue="updatecarvalue" />
  </div>
</template>

<style scoped>
div {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
}
</style>
