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
    addImpact(state, impact) {
      state.globalImpacts.push(impact);
    },
    removeImpact(state, impact) {
      state.globalImpacts = state.globalImpacts.filter((i) => i.id !== impact.id);
    },
  },
  actions: {
  },
  modules: {
  },
});
