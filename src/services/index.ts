import type { AjaxRequestConfig } from 'uni-ajax'
import ajax from 'uni-ajax'

const instance = ajax.create({
  baseURL: 'https://hfut-space.top:1145',
})

class RequestContext {
  private headers: AjaxRequestConfig['header'] = app.User

  constructor() {
    console.log(this.headers)

    this.initRequestInterceptor()
  }

  initRequestInterceptor() {
    instance.interceptors.request.use((config) => {
      config.header = {
        ...config.header,
      }

      return config
    })
  }

  request() {

  }
}

export const context = new RequestContext()
