<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import CreateBox from '@/utils/3boxAuth';

export default {
  async created() {
    if (this.$store.state.globalImpacts.length === 0) {
      const account = '0xaA1B8189DAbC2d55FbABBe3A0C99e4dA6969a2fD';
      const globalImpacts = await CreateBox(account, window.ethereum, ['OneLife']);
      this.$store.commit('updateImpacts', globalImpacts);
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
