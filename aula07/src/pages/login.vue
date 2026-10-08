<template>
    <v-container class="fill-height d-flex align-center justify-center">        
        <v-card class="pa-6" width="100%" max-width="400" v-if="!appStore.isLoggedIn">
            <v-card-title class="text-h5 text-center justify-center">
                Login
            </v-card-title>
            <v-card-text>
                <v-text-field v-model="email" label="E-mail" type="email" variant="outlined" />
                <v-text-field v-model="senha" label="Senha" type="password" variant="outlined" />
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue-darken-4" variant="elevated" block @click="login">Entrar</v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="pa-6" width="100%" max-width="400" v-else>
            <v-card-title class="text-h5 text-center justify-center">
                Bem-vindo {{ appStore.getUsuario }}
            </v-card-title>
            <v-card-text>
                Você está logado com sucesso.
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue-darken-4" variant="elevated" block @click="logout">Sair</v-btn>
            </v-card-actions>
        </v-card>   
    </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { useAppStore } from '../stores/app'

const appStore = useAppStore()
const email = ref('')
const senha = ref('')

const login = () => {
    appStore.login(email.value, senha.value)
}

const logout = () => {
    appStore.logout()
}

</script>