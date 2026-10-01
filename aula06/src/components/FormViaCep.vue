<template>
    <v-text-field label="CEP" v-model="cep" />
    <v-text-field :loading="carregando" label="Logradouro" v-model="endereco.logradouro" />
    <v-text-field :loading="carregando" label="Bairro" v-model="endereco.bairro" />
    <v-text-field :loading="carregando" label="Localidade" v-model="endereco.localidade" />
    <v-text-field :loading="carregando" label="UF" v-model="endereco.uf" />
</template>
<script setup>
import { ref, watch } from 'vue'
const cep = ref('')
const endereco = ref({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
})
const carregando = ref(false)
watch(cep, async () => {
    const cepFormatado = cep.value.replace(/\D/g, '');
    if (cepFormatado.length === 8) {
        carregando.value = true;
        const resultado = await fetch(`https://viacep.com.br/ws/${cepFormatado}/json/`)
        const dados = await resultado.json()
        endereco.value = { ...dados }
        carregando.value = false;

    } else {
        endereco.value = {
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: ''
        }
    }

});
</script>