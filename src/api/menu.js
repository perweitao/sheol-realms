import request from '@/utils/request'

export function getRouters(data) {
  return request({
    url: '/menu/getRouters',
    method: 'get',
    data
  })
}