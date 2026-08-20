<template>
  <!-- v-bind (:) = liga as propriedades do script com o template -->
  <!-- v-on (@) = A partir d template chama o método do script  -->
  <!-- v-model (two-way data-bind) = liga o valor de um input com uma variável do script -->
  <!-- interpolação {{  }} = Exibe o valor de uma variável do script no template -->
  
  <h1>Cadastro de usuário</h1>
  <input type="text" placeholder="Nome" /><br>
  <input type="number" placeholder="Idade" /><br>
  <input type="email" placeholder="Email" /><br>
 
  <button>Resetar</button>
  <hr>
  <p><b>Preenchimento de dados</b></p>
  <p>Nome: {{ nome }}</p>
  <p>Idade: {{ idade }}</p>
  <p>Email: {{ email }}</p>
</template>

<script setup>  

</script>

<style scoped>
</style>