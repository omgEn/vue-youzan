import Vue from 'vue';
import App from './App.vue';

import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import router from './router.js';
import store from './stores/store.js';
import http from './utils/api';

// 把掉接口的api 全局定义为$http
Vue.prototype.$http = http;
Vue.prototype.$set = Vue.set;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
