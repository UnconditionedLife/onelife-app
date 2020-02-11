import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalImpacts: [],
  },
  mutations: {
    initializeStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
      // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store'))),
        );
      }
    },
    updateImpacts(state, globalImpacts) {
      state.globalImpacts = globalImpacts;
    },
  },
  actions: {
  },
  modules: {
  },
});
