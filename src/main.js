import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import './assets/main.scss';

window.app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
