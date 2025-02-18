<script setup>
import { defineProps } from 'vue';

defineProps({
    title: String,
    subtitle: String,
    content: String,
    price: Number,
})
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <p>{{ content }}</p>
        <p>{{ price }}</p>
    </div>
</template>

<style scoped>
div {
    background-color: #f0f0f0;
    padding: 1rem;
    margin: 1rem;
}

h1 {
    color: #333;
}

h2 {
    color: #666;
}

p {
    color: #999;
}</style>                