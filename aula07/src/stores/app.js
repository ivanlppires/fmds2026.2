import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {

  // estado
  const logado = ref(false);

  const login = (email, senha) => {
    if (email === 'ivan@unemat.br' && senha === '123456') {
      logado.value = true;
    } else {
      logado.value = false;
    }
  }

  const logout = () => {
    logado.value = false;
  }

  const isLoggedIn = computed(() => logado.value);

  return { login, logout, isLoggedIn }
});

