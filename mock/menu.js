
const asyncRoutes = [
  
]



export default [
  // get getRouters
  {
    url: '/menu/getRouters',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: asyncRoutes
      }
    }
  },
]
