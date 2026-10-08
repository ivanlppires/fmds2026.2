/**
 * router/index.ts
 *
 * Automatic routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useAppStore } from '../stores/app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/* proteger rotas privadas redirecionando para login */
// Usando o beforeEach para verificar se o usuário está logado antes de acessar rotas privadas
router.beforeEach( (to, from, next) => {
  const appStore = useAppStore()

  console.log('appStore.isLoggedIn:', appStore.isLoggedIn)
  console.log('to.path:', to.path)

  if(!appStore.isLoggedIn && to.path !== '/' && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }

} );

export default router
