import { isRegExp } from 'lodash'

export type FilterType = string | RegExp

export const createExcludeFilter = (filter: FilterType[]) => {
  return (key: string) => {
    return filter.every(item => isRegExp(item) ? !item.test(key) : item !== key)
  }
}
