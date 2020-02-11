import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CreateBox from './utils/3boxAuth';

Vue.config.productionTip = false;

console.log('in Impact Context Provider');
console.log('in async call');
// hard coding only for demo
const account = '0xaA1B8189DAbC2d55FbABBe3A0C99e4dA6969a2fD';
CreateBox(account, window.ethereum, ['OneLife']);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
