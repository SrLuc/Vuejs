<script setup>
import Header from "./components/Header.vue";
import Reactives from "./components/Reactives.vue";
import Biding from "./components/Biding.vue";
import Props from "./components/Props.vue";
import ReciveE from "./components/ReciveE.vue";
import Effect from "./components/Effect.vue";
import IfElse from "./components/IfElse.vue";
import List from "./components/List.vue";
import Children from "./components/Children.vue";
</script>

<template>
  <Header />
  <main>
    <Children>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        width="24"
        height="24"
        stroke-width="2"
      >
        <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"></path>
        <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2"></path>
        <path d="M8 12h8"></path>
        <path d="M7 19v2"></path>
        <path d="M17 19v2"></path>
      </svg>
      <h1>Home</h1>
    </Children>
    <List />
    <IfElse />
    <Effect />
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
