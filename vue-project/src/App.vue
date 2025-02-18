<script setup>
import Header from "./components/Header.vue";
import Reactives from "./components/Reactives.vue";
import Biding from "./components/Biding.vue";
import Props from "./components/Props.vue";
import ReciveE from "./components/ReciveE.vue";
</script>

<template>
  <Header />
  <main>
    <ReciveE />
    <Reactives />
    <Biding />
    <Props
      title="Title"
      subtitle="Subtitle"
      content="Content goes here"
      :price="2.5"
    />
  </main>
</template>

<style scoped></style>
