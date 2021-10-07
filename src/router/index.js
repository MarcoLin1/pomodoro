import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'todo-list',
    component: () => import('./../views/Todo.vue')
  },
  {
    path: '/trendtable',
    name: 'trend-table',
    component: () => import('./../views/TrendTable.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('./../views/Setting.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
