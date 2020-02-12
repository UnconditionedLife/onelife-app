<template>
  <div class="home">
    <Navbar />
    <ImpactList />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue';
import ImpactList from '@/components/impact-list.vue';

export default {
  components: {
    Navbar,
    ImpactList,
  },
};
</script>
