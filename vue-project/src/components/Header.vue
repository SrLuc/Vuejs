<template>
    <header>
        <h1>Hello {{ name }} </h1>
    </header>
</template>


<style scoped>
header {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
}

h1 {
    margin: 0;
}
</style>


<script setup>
const name = "ruan"
</script>