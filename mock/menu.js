const asyncRoutes = [
  {
    path: '/PlaceHolder',
    name: 'PlaceHolder',
    component: 'Layout',
    children: [
      {
        path: 'PlaceHolder',
        component: 'placeHolder/index',
        name: '占位页面',
        meta: { title: '占位页面', icon: 'form' }
      }
    ]
  },
]

export default [
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
