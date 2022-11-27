import { createDecorator } from 'pinia-class-component'
import { createExcludeFilter } from '@/shared/utils/filter'
import type { FilterType } from '@/shared/utils/filter'
export { Store, Pinia } from 'pinia-class-component'

/**
 *  持久化装饰器
 */
interface PersistOptions {
  name?: string
}

export const Persist = (_options: PersistOptions) => {
  return createDecorator(
    (options, key) => {
      return (options.persist ||= {
        enabled: true,
        strategies: [
          {
            key: `pinia-persist-${_options.name}`,
            storage: {
              getItem: key => uni.getStorageSync(key),
              setItem: (key, data) => uni.setStorage({ key, data }),
              removeItem: key => uni.removeStorage({ key }),
            },
            paths: [],
          },
        ],
      }) && options.persist.strategies[0].paths.push(key)
    },
  )
}

interface PersistAllOptions {
  exclude?: FilterType[]
  name?: string
}

export const PersistAll = (options?: PersistAllOptions) => {
  return function <T extends { new (...args: any[]): {} }>(target: T) {
    return class extends target {
      constructor(...props) {
        super(...props)

        for (const key of Object.keys(this)) {
          const filter = createExcludeFilter(options?.exclude || [])(key)
          if (filter) {
            Persist({ name: target.name })(this, key)
          }
        }
      }
    }
  }
}
