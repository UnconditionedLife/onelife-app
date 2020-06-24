<template>
  <div class="impact-view">
    <Navbar />
    <Impact :id="id" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue';
import Impact from '@/components/impact.vue';

export default {
  components: {
    Navbar,
    Impact,
  },
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
