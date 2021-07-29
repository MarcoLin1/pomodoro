import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clock',
    name: 'Clock',
    component: () => import('./../components/Clock.vue')
  },
  {
    path: '/list',
    name: 'todo-list',
    component: () => import('./../views/Todo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
