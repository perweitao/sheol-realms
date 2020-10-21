import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },



  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect:'/Home',
    children: [
      {
        path: 'Home',
        component: () => import('@/views/home/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/PlaceHolder',
    name: 'PlaceHolder',
    component: Layout,
    redirect:'/PlaceHolder',
    children: [
      {
        path: 'PlaceHolder',
        component: () => import('@/views/placeHolder/index'),
        name: '占位页面',
        meta: { title: '占位页面', icon: 'form' }
      }
    ]
  },
  {
    name: "System",
    path: "/System",
    hidden: false,
    component: Layout,
    alwaysShow: true,
    meta: { title: "系统管理", icon: "system" },
    children: [
      {
        name: "Role",
        path: "role",
        hidden: false,
        component: () => import('@/views/role/index'),
        meta: { title: "角色管理", icon: "peoples" }
      },
      {
        name: "Menu",
        path: "menu",
        hidden: false,
        component: () => import('@/views/menu/index'),
        meta: { title: "菜单管理", icon: "tree-table" }
      }
    ]
  },

  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人信息', icon: 'user', noCache: true }
      }
    ]
  }
]
export const asyncRoutes = [
  
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
