<script setup>
import Children from "../components/Children.vue";
</script>

<template>
  <Children>
    <template #icon>
      <img
        src="https://i1.sndcdn.com/avatars-hIG628uGMMELmu1y-3raqMQ-t500x500.jpg"
        alt="Vue.js"
        width="150"
      />
    </template>
    <template #text>
      <h2>Children</h2>
    </template>
  </Children>
</template>

<style scoped></style>
