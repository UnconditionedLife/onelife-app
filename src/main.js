import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CreateBox from './utils/3boxAuth';

Vue.config.productionTip = false;

// hard coding only for demo
const account = '0xaA1B8189DAbC2d55FbABBe3A0C99e4dA6969a2fD';
CreateBox(account, window.ethereum, ['OneLife']);

// Subscribe to store updates
store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit('initializeStore');
  },
}).$mount('#app');
