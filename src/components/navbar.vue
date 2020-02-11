<template>
  <div class="navbar">
    <h1>OneLife Network</h1>
    <p>{{ $store.state.globalImpacts.length }} IMPACTS</p>
  </div>
</template>

<script>
export default {
  created() {

  },
};
</script>

<style lang="scss">
  .navbar{
    padding: $spacer-2 $spacer-4;
    text-align: center;
    @include background(background-secondary);

    > h1 {
      margin: $spacer-2 0;
    }
  }
</style>
