<template>
  <div class="impact">
    {{ id }}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  created() {

  },
};
</script>

<style lang="scss">
</style>
