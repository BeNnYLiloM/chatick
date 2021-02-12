import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main'
import Login from '@/views/Login'
import Registration from '@/views/Registration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
