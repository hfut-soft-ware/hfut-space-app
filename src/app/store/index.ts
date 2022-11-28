import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'
import * as Module from './modules'

export default function (vueApp) {
  const pinia = createPinia()

  pinia.use((context) => {
    if ((context.options.persist?.enabled as boolean) === false) {
      return
    }
    context.options.persist = {
      enabled: true,
      H5Storage: localStorage,
    }

    return {
      $options: context.options,
    }
  })
  pinia.use(piniaPersist)

  vueApp.use(pinia)
  Object.keys(Module).forEach(k => (app[k] = new Module[k]()))
}

type ModuleType = {
  [K in keyof typeof Module]: InstanceType<typeof Module[K]>
}

declare global {
  interface App extends ModuleType {}
}
