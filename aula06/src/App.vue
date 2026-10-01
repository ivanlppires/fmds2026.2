<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Estudando o Fetch</v-card-title>
          <v-card-subtitle>Exemplo de cidades e estado do IBGE e CEP do viacep</v-card-subtitle>
          <v-card-text>
            O estado selecionado é: {{ selectEstados }}
            <v-select label="Estado (UF)"
               v-model="selectEstados" 
               :items="estados"
               item-title="nome"
               item-value="id"              
               >
            </v-select>
            <v-select label="Cidades"
              v-model="selectCidades"
              :items="cidades"
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
import { ref, watch } from 'vue'
// exemplo usando o axios para fazer o fetch
import axios from 'axios'

const selectEstados = ref(null)
const selectCidades = ref(null)
const estados = ref([])
const cidades = ref([])

// fetch dos estados do IBGE
// https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderby=nome

const getEstados = async () => {
  const resultado = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderby=nome')
  let dados = await resultado.json();
  dados = dados.map( estado => {
    return {
      id: estado.id,
      nome: estado.nome + ' (' + estado.sigla + ')'
    };
  });
  console.log(dados);
  estados.value = dados;
}

const getEstadosAxios = async () => {
  const resultado = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderby=nome')
  estados.value = resultado.data;
}

const getCidades = async (idEstado) => {
  const resultado = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
  const dados = await resultado.json()
  cidades.value = dados;
};

getEstados();

watch(selectEstados, () => {
  if(selectEstados.value) {
    getCidades(selectEstados.value)
  }
});


</script>
