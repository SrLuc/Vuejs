<script  setup>
import { ref } from 'vue'
import { reactive } from 'vue';

const age = ref(0)

const years = reactive({
    "year": 2024
})

const pairNumbers = ref(0)

function fazeraniversario() {
    age.value++
}

function updateYear() {
    years.year += 1
}

function atualizarNumeroPar() {
    pairNumbers.value += 2
}

</script>

<template>
    <div>
        <p>Idade Atual: {{ age }} </p>
        <button @click="fazeraniversario">Fazer Anivesário</button>
    </div>
    <div>
        <p>Ano Atual : {{ years.year }} </p>
        <button @click="updateYear">Atualizar Ano</button>
    </div>
    <div>
        <p>Numeros Pares: {{ pairNumbers }} </p>
        <button @click="atualizarNumeroPar">Atualizar numero par</button>
    </div>
</template>

<style scoped>
div {
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}

button {
    background-color: #f9f9f9;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px;
}

p {
    margin: 0;
}
</style>