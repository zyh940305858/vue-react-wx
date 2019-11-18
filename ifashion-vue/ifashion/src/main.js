// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

//axios
//方法一：
import axios from 'axios';
Vue.prototype.axios = axios;
//方法二
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios,axios)

//解决移动端点击事件延迟300毫秒
import FastClick from 'fastclick'
FastClick.attach(document.body);

//rem自适应
import './assets/js/font'; 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
