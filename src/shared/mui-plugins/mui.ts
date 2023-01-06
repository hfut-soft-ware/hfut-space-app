import type { InjectionKey, Plugin } from 'vue'
import type { Theme } from '@/shared/mui-plugins/theme'

export const ThemeKey = Symbol('Mui') as InjectionKey<Theme>

const MuiPlugin: Plugin = {
  install(app) {
    app.provide(ThemeKey)
  },
}

export default MuiPlugin
