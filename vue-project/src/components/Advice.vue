<script setup>
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";

const advice = ref("");

async function callAdvice() {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    advice.value = response.data.slip.advice;
  } catch (error) {}
}

onMounted(callAdvice);
</script>

<template>
  <div>
    <h1>Advices:</h1>
    <p>
      {{ advice }}
    </p>
    <button @click="callAdvice">Call Other Advice</button>
  </div>
</template>

<style scoped>
h1 {
  color: #333;
}

p {
  color: #666;
}

button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #396b44;
}

button:active {
  background-color: #1a3321;
}

div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}
</style>
