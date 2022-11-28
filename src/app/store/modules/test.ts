import { defineStore } from 'pinia'

export const useTest = defineStore('storeUser', {
  state: () => {
    return {
      name: 'usesr',
      firstName: 'allen',
      lastName: 'ttk',
      accessToken: 'xxxxxxxxxxxxx',
    }
  },
  actions: {
    setToken(value: string) {
      this.accessToken = value
    },
    setName(value: string) {
      console.log(value)

      this.name = value
    },
  },
})
