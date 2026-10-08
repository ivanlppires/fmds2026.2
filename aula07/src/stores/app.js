import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {

  // estado
  const logado = ref(false);
  const usuario = ref(null);

  const login = (email, senha) => {
    if (email === 'luiz@gmail.com' && senha === '123456') {
      usuario.value = email;
      logado.value = true;
    } else {
      logado.value = false;
    }
  }

  const logout = () => {
    logado.value = false;
    usuario.value = null;
  }

  const isLoggedIn = computed(() => logado.value);

  const getUsuario = computed(() => usuario.value);

  return { login, logout, isLoggedIn, getUsuario }
});

