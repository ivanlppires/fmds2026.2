<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Estudando o Fetch</v-card-title>
          <v-card-subtitle>Exemplo de cidades e estado do IBGE e CEP do viacep</v-card-subtitle>
          <v-card-text>
            <v-select label="Estado (UF)"
               v-model="selectEstados" 
               :items="estados"
               item-title="nome"
               item-value="id">
            </v-select>
            <v-select label="Cidades"
              v-model="selectCidades"
              :item="cidades"
              item-title="nome"
              item-value="id">
            </v-select>
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
const selectEstados = ref(null)
const estados = ref([])
estados.value.push({ id: 1, nome: 'Acre' })
estados.value.push({ id: 2, nome: 'Alagoas' })
</script>
