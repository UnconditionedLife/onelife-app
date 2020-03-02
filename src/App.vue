<template>
  <div v-show="$store.state.account" id="app">
    <RouterView />
  </div>
</template>

<script>
export default {
  async created() {
    // when app started let's check metamask
    if (typeof window.ethereum !== 'undefined') {
      try {
        // let's connect metamaks with the app
        const ethAccount = await window.ethereum.enable();
        this.$store.commit('updateAccount', ethAccount[0]);
        console.log(ethAccount);

        if (this.$store.state.globalImpacts.length === 0) {
          // fetch global impacts from IPFS
          const globalImpacts = await window.boxHandler.CreateBox(this.$store.state.account,
            window.ethereum, [this.$store.state.appName]);
          this.$store.commit('updateImpacts', globalImpacts);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style lang="scss">
  #app {
    @include background(background-primary);
    margin: $spacer-4 auto;
    width: 100%;
    max-width: 700px;
    color: #eee;
  }
</style>
