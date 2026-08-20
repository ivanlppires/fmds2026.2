<template>
  <!-- v-bind (:) = liga as propriedades do script com o template -->
  <!-- v-on (@) = A partir d template chama o método do script  -->
  <!-- v-model (two-way data-bind) = liga o valor de um input com uma variável do script -->
  <!-- interpolação {{  }} = Exibe o valor de uma variável do script no template -->
  
  <h1>{{ nome }}</h1>
  <p :style="{ color: cor }">{{  nome  }}</p>

  <input type="button" :value="cor" @click="mudacor" />

</template>

<script setup>
  import { ref } from 'vue';
  const nome = "João";
  const cor = ref('orange');

  const mudacor = () => {
    window.alert("Mudando a cor");
    cor.value = cor.value === 'orange' ? 'blue' : 'orange';
  }

</script>

<style scoped>
</style>