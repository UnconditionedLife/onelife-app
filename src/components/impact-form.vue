<template>
  <div class="impact-form">
    <label>Impact name: </label>
    <input type="text" placeholder="Type your impact name" v-model="name" required />
    <label>Impact purpose: </label>
    <input type="text" placeholder="Type your impact purpose" v-model="impact" required />
    <button type="button" @click="handleSubmit">
      Add impact
    </button>
  </div>
</template>

<script>
import uuid from 'uuid/v1';

export default {
  data() {
    return {
      name: '',
      impact: '',
    };
  },
  methods: {
    resetForm() {
      this.name = '';
      this.impact = '';
    },
    handleSubmit() {
      const impact = {
        name: this.name,
        impact: this.impact,
        id: uuid(),
      };

      this.$store.commit('addImpact', impact);
      this.resetForm();
    },
  },
};
</script>

<style lang="scss">
  .impact-form {
    margin: $spacer-4;
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: $spacer-1;
    }

    input {
      margin-bottom: $spacer-2;
      padding: $spacer-1;
      @include font(body-small);
    }
  }
</style>
