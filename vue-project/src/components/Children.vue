<script setup></script>

<template>
  <div class="container">
    <slot name="icon"></slot>
    <slot name="text"></slot>
    <slot name="home"></slot>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  gap: 8px;
}
</style>
