<template>
    <v-row>
        <v-col cols="12" md="6"
        v-for="aluno in alunos" :key="aluno.id">
            <v-card>
                <v-card-title>{{ aluno.nome }}</v-card-title>
                <v-card-subtitle>{{ aluno.email }}</v-card-subtitle>
                <v-card-text>{{ aluno.telefone }}</v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="warning">Alterar</v-btn>
                    <v-btn color="error">Excluir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const alunos = ref([]);
const buscarAlunos = async () => {
    try {
        const result = await fetch('http://localhost:3001/alunos');
        const data = await result.json();
        alunos.value = data;
        console.log(alunos.value);
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    buscarAlunos();
})
</script>