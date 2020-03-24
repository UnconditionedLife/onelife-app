import Vue from 'vue';
import LocalStorageHandler from '@/utils/localStorageHandler';
import BoxHandler from '@/utils/BoxHandler';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false;

/*
 * Local storage handling
 */
window.localStorageHandler = new LocalStorageHandler(28800);

store.state.appName = 'OneLife';

window.boxHandler = new BoxHandler(store.state.appName);

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  window.localStorageHandler.setItem('onlife-store', JSON.stringify(state));
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit('initializeStore');
  },
}).$mount('#app');
