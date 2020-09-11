import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home/car"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children:[{
        path: '/home/list',
        name: 'List',
        component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
      },{
        path: '/home/car',
        name: 'Car',
        component: () => import(/* webpackChunkName: "car" */ '../views/Car.vue')
      },{
        path: '/home/my',
        name: 'My',
        component: () => import(/* webpackChunkName: "my" */ '../views/My.vue')
      }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
