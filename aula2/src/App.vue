<template>
  <!-- v-bind (:) = liga as propriedades do script com o template -->
  <!-- v-on (@) = A partir d template chama o método do script  -->
  <!-- v-model (two-way data-bind) = liga o valor de um input com uma variável do script -->
  <!-- interpolação {{  }} = Exibe o valor de uma variável do script no template -->
  
  <h1>Cadastro de usuário</h1>
  <input type="text" placeholder="Nome" v-model="nome" /><br>
  <input type="number" placeholder="Idade" v-model="idade" /><br>
  <input type="email" placeholder="Email" v-model="email" /><br>
 
  <button @click="resetar">Resetar</button>
  <hr>
  <p><b>Preenchimento de dados</b></p>
  <p>Nome: {{ nome }}</p>
  <p>Idade: {{ idade }}</p>
  <p>Email: {{ email }}</p>
</template>

<script setup>  
import { ref } from 'vue'
const nome = ref('')
const idade = ref(0)
const email = ref('')

const resetar = () => {
  nome.value = ''
  idade.value = 0
  email.value = '' 
}

</script>

<style scoped>
</style>