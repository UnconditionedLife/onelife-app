import Vue from 'vue';
import LocalStorageHandler from '@/utils/localStorageHandler';
import App from './App.vue';
import router from './router';
import store from './store';
import CreateBox from './utils/3boxAuth';

Vue.config.productionTip = false;

/*
 * Local storage handling
 */
window.localStorageHandler = new LocalStorageHandler(28800);

CreateBox(window.ethereum.selectedAddress, window.ethereum, ['OneLife'], {
  consentCallback: () => {
    // Subscribe to store updates
    store.subscribe((mutation, state) => {
      // Store the state object as a JSON string
      window.localStorageHandler.setItem('store', JSON.stringify(state));
    });

    new Vue({
      router,
      store,
      render: (h) => h(App),
      beforeCreate() {
        this.$store.commit('initializeStore');
      },
    }).$mount('#app');
  },
});
