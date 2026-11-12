import router from '../router';
import firebaseApp from './firebase';
import { createPinia } from 'pinia';
/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Types
import type { App } from 'vue'

// Plugins
import vuetify from './vuetify'

export function registerPlugins (app: App) {
 app.use(vuetify)
 app.use(createPinia());
 app.use(firebaseApp);
 app.use(router);
}