import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Detail from '@/view/Detail';
import Collect from '@/view/Collect'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:index',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path:"/",
      redirect:"/home"
    }
  ]
})
