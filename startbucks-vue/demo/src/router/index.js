import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/view/Login'
import Home from '@/components/view/Home'
import Detail from '@/components/view/Detail'
import Form from '@/components/view/Form';

Vue.use(Router)

var router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '*',
      redirect:"/home"
    }
  ]
})


//添加全局路由守卫
//每一次路由跳转  都会执行
router.beforeEach((to,from,next)=>{

  //取出token,判断是否登陆
  var token = localStorage.getItem('token');
  if(token)//已登陆
  {
    if (to.path == "/login"){
      console.log(from.path)
      next(from.path);//如果登陆了还要去登陆页  停留在当前页;
    }else{
      next(); //保证路由可以继续执行
    }
  }else{ //未登录
    if(to.path == "/login"){
      next();
    }else{
      next('/login') 
    }
  }
})

export default router;