<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <MenuList />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>SIGAA 2.0</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!appStore.isAuthenticated" @click="login">Login</v-btn>
      <v-btn v-else @click="logout">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import MenuList from './components/MenuList.vue'
import { useAppStore } from './stores/app'
const appStore = useAppStore()
const drawer = ref(null)

const login = () => {
  const appStore = useAppStore()
  appStore.loginWithGoogle()
}
const logout = () => {
  const appStore = useAppStore()
  appStore.logout()
}
</script>