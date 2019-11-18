import Vue from 'vue'
import Router from 'vue-router'
import Shoplist from '@/components/Shoplist'
import Shopcar from '@/components/Shopcar'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: 'shoplist'
    },
    {
      path:'/shoplist',
      name:'Shoplist',
      component: Shoplist
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
  ]
})
