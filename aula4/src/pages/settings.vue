<template>
  <v-container fluid>
    Configurar recebimento de notificações
    <v-divider class="my-4"></v-divider>
    <p>{{ people }}</p>
    <v-switch
      v-model="people"
      color="primary"
      label="John"
      value="John"
      hide-details
    ></v-switch>
    <v-switch
      v-model="people"
      color="primary"
      label="Jacob"
      value="Jacob"
      hide-details
    ></v-switch>
  </v-container>
</template>
<script setup>
  import { ref } from 'vue'

  const people = ref(['John'])
</script>