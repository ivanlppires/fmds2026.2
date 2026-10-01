<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Estudando o Fetch</v-card-title>
          <v-card-subtitle>Exemplo de cidades e estado do IBGE e CEP do viacep</v-card-subtitle>
          <v-card-text>
            <v-tabs v-model="tab" color="primary">
              <v-tab value="ibge">Dados do IBGE</v-tab>
              <v-tab value="viacep">Dados do ViaCEP</v-tab>
            </v-tabs>
            <v-divider></v-divider>
            <v-container>
              <v-tabs-window v-model="tab">
                <v-tabs-window-item value="ibge">
                  <!-- formulário dados que vem do ibge -->
                  <FormIbge />
                </v-tabs-window-item>
                <v-tabs-window-item value="viacep">
                  <!-- formulário dados que vem do viacep -->
                  <FormViaCep />
                </v-tabs-window-item>
              </v-tabs-window>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" variant="elevated">Salvar</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import FormIbge from './components/FormIbge.vue'
import FormViaCep from './components/FormViaCep.vue'
const tab = ref('ibge')

</script>
