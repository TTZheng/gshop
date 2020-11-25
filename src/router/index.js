// 路由器对象模块
import Vue from 'vue'
import Router from 'vue-router'

const MSite = () => import('../pages/MSite/MSite')
const Order = () => import('../pages/Order/Order')
const Search = () => import('../pages/Search/Search')
const Profile = () => import('../pages/Profile/Profile')
const Login = () => import('../pages/Login/Login')

// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
// 所有路由
const routes = [
  {
    path:'',
    redirect: '/msite'
  },
  {
    path:'/msite',
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/login',
    component: Login
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

// 3.导出router
export default router