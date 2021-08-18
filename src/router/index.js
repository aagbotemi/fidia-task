import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
