<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/reactives">Reactives</router-link></li>
      <li><router-link to="/biding">Biding</router-link></li>
      <li><router-link to="/props">Props</router-link></li>
      <li><router-link to="/reciveE">ReciveE</router-link></li>
      <li><router-link to="/effect">Effect</router-link></li>
      <li><router-link to="/ifelse">IfElse</router-link></li>
      <li><router-link to="/list">List</router-link></li>
      <li><router-link to="/children">Children</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #333;
  padding: 10px;
}
ul {
  display: flex;
  list-style: none;
  padding: 0;
}
li {
  margin-right: 15px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
