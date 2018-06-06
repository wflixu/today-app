import Vue from 'vue';
import 'mint-ui/lib/style.css';
import './assets/main.css';
import store from './store/index'
import App from './App';
import router from './router';
import 'babel-polyfill';



Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
