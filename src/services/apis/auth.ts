import ajax from 'uni-ajax'

export function loginRequest(data) {
  return ajax({
    url: 'https://www.hfut-space.top:1145/v2/login',
    method: 'POST',
    data,
  })
}
