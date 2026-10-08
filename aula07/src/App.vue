<template>
  <v-app>
    <v-main>
      <v-toolbar color="blue-darken-4" dark>
        <v-spacer />
        <v-btn class="mr-2" variant="elevated" text to="/">Home</v-btn>
        <v-btn class="mr-2" variant="elevated" text to="/login">Login</v-btn>
        <v-btn class="mr-2" variant="elevated" text to="/dashboard" v-if="appStore.isLoggedIn">Dashboard</v-btn>
        <v-btn variant="elevated" text to="/cadastro" v-if="appStore.isLoggedIn">Cadastro</v-btn>
        <v-spacer />
      </v-toolbar>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from './stores/app'
const appStore = useAppStore()

</script>
