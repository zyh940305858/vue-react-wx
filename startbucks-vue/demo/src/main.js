// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入min-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'mint-ui/lib/index.js';
Vue.use(Mint);


//全局引入axios
import axios from 'axios';
Vue.prototype.axios = axios;

//解决移动端延迟300ms
import FastClick from 'fastclick';
FastClick.attach(document.body);

//框架
import './assets/css/reset.css';


//自适应rem
import './assets/js/font';

//icon
import './assets/js/font';
import './assets/css/iconfont.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
