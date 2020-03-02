import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: '',
    account: '',
    globalImpacts: [],
  },
  mutations: {
    async initializeStore(state) {
      // Check if the ID exists
      if (window.localStorageHandler.getItem('onlife-store') !== null) {
      // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(window.localStorageHandler.getItem('onlife-store'))),
        );
      }
    },
    updateAppName(state, appName) {
      state.appName = appName;
    },
    updateAccount(state, account) {
      state.account = account;
    },
    updateImpacts(state, globalImpacts) {
      state.globalImpacts = globalImpacts;
    },
    async addImpact(state, impact) {
      state.globalImpacts.push(impact);
      await window.boxHandler.updatePublicSpace(state.globalImpacts);
    },
    async removeImpact(state, impact) {
      state.globalImpacts = state.globalImpacts.filter((i) => i.id !== impact.id);
      await window.boxHandler.updatePublicSpace(state.globalImpacts);
    },
  },
  actions: {
  },
  modules: {
  },
});
