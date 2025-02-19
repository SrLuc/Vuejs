<script setup></script>

<template>
  <div>
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px;
  margin: 20px;
}
</style>
