<script setup>
import { defineProps } from "vue";
import { ref, defineEmits } from "vue";

const props = defineProps({
  produto: String,
  preco: Number,
});

const emit = defineEmits(["updatevalue"]);

function addtocart() {
  emit("updatevalue", props.preco);
}
</script>

<template>
  <div>
    <p>Produto:{{ props.produto }} | Preco:{{ props.preco }}</p>
    <button @click="addtocart">Add to cart</button>
  </div>
</template>

<style scoped>
div {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  display: flex;
  gap: 10px;
}
</style>
