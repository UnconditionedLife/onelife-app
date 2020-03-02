<template>
  <div class="home">
    <Navbar />
    <ImpactForm />
    <ImpactList />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue';
import ImpactList from '@/components/impact-list.vue';
import ImpactForm from '@/components/impact-form.vue';

export default {
  components: {
    Navbar,
    ImpactList,
    ImpactForm,
  },
};
</script>
