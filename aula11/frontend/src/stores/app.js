// Utilities
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import firebaseApp from '@/plugins/firebase'
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export const useAppStore = defineStore('app', () => {
  const user = ref(null)
  const token = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  function init () {
    onAuthStateChanged(auth, async currentUser => {
      user.value = currentUser
      token.value = currentUser ? await currentUser.getIdToken() : null
    })
  }

  async function loginWithGoogle () {
    loading.value = true
    error.value = null
    try {
      const result = await signInWithPopup(auth, provider)
      user.value = result.user
      token.value = await result.user.getIdToken()
    } catch (e) {
      error.value = e.message ?? 'Erro ao autenticar'
    } finally {
      loading.value = false
    }
  }

  async function logout () {
    await signOut(auth)
    user.value = null
    token.value = null
  }

  return { user, token, loading, error, isAuthenticated, init, loginWithGoogle, logout }
})
