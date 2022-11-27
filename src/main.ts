import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'

import { appPlugin } from './app/index'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(appPlugin)
  app.use(VueQueryPlugin)
  return { app, Pinia }
}
