<script setup>
import { ref, watchEffect } from "vue";

const age = ref(0);
const anodenascimento = ref(0);
const anoAtual = ref(0);

watchEffect(() => {
  age.value = anoAtual.value - anodenascimento.value;
});
</script>

<template>
  <div>
    <p>
      Idade Atual: <strong>{{ age }}</strong>
    </p>
    <input
      min="2000"
      type="number"
      placeholder="ano de nascimento"
      v-model="anodenascimento"
    />
    <input
      max="2100"
      type="number"
      placeholder="ano de atual"
      v-model="anoAtual"
    />
  </div>
</template>

<style scoped>
div {
  padding: 20px;
  display: flex;
  justify-content: left;
  align-content: center;
  gap: 1rem;
  border: 1px solid black;
  margin: 10px;
}
input {
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  text-align: center;
}
</style>
