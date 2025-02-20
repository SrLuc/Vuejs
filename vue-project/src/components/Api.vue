<script setup>
import { ref, onMounted } from "vue";
const chars = ref([]);
const loading = ref(true);
import axios from "axios";

async function fetchChars() {
  try {
    loading.value = true;
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    chars.value = response.data.results;
    console.log(chars);
  } catch (error) {
    loading.value = false;
  }
}

onMounted(fetchChars);
</script>

<template>
  <div>
    <h1>Calling API</h1>
    <p v-if="!loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <section class="characters">
      <li v-for="char in chars" :key="char.id" class="character-card">
        <img :src="char.image" :alt="char.name" class="character-image" />
        <h3>{{ char.name }}</h3>
        <p>Status: {{ char.status }}</p>
        <p>Gender: {{ char.gender }}</p>
      </li>
    </section>
  </div>
</template>

<style scoped>
section {
  display: flex;
}

h1 {
  color: #333;
  text-align: center;
  font-family: "Comic Sans MS", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.characters {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}


.character-card {
  width: 200px;
  border: 3px solid #fff;
  margin: 10px;
  overflow: hidden;
  background-color: #1e1e1e;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.character-card:hover {
  transform: scale(1.05);
}

.character-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid #fff;
}

.character-card h3 {
  color: #f1f1f1;
  margin: 15px 0 10px;
  font-size: 1.2em;
}

.character-card p {
  color: #f1f1f1;
  margin: 5px 0;
  font-size: 1em;
}

.loading {
  font-size: 1.2em;
  text-align: center;
  color: #888;
}

.error {
  color: red;
  font-size: 1.2em;
  text-align: center;
}
</style>
