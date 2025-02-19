<script setup>
const doglist = [
  { name: "Bulldog", age: 3 },
  { name: "Poodle", age: 2 },
  { name: "Pug", age: 4 },
  { name: "Beagle", age: 1 },
];
</script>

<template>
  <div>
    <h1>Dog List</h1>
    <ul>
      <li v-for="dog in doglist">name {{ dog.name }} | age : {{ dog.age }}</li>
    </ul>
  </div>
</template>

<style scoped>
div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
ul {
  list-style-type: none;
}
li {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
