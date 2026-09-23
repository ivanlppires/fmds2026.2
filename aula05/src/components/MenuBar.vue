<template>
    <v-navigation-drawer v-model="drawer">
        <v-sheet class="pa-4 text-center" color="blue-darken-4" dark>
            MEU SISTEMA 1.0
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
            <v-list-item v-for="[icon, text] in links" :key="icon" :prepend-icon="icon" :title="text"
                link></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(null)
const links = [
    ['mdi-home', 'Página Inicial'],
    ['mdi-account-search', 'Busca Clientes'],
    ['mdi-account-plus', 'Gerenciar Clientes']
]
</script>