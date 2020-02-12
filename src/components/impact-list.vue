<template>
  <div class="impact-list">
    <ul class="impact-list-list" v-if="$store.state.globalImpacts.length > 0">
      <li class="impact-list-impact" v-for="impact in $store.state.globalImpacts"
        :key="`impact-list-impact-${impact.id}`"
        @click="$store.commit('removeImpact', impact)">
          <div class="impact-list-impact-name"> {{ impact.name }} </div>
          <div class="impact-list-impact-purpose"> {{ impact.purpose }} </div>
      </li>
    </ul>
    <div v-else class="empty">No impacts</div>
  </div>
</template>

<script>
export default {
  created() {

  },
};
</script>

<style lang="scss">
  .impact-list{
    margin: $spacer-4;

    .impact-list-list {
      padding: 0;
      list-style-type: none;

      .impact-list-impact {
        background: #6d3d6d;
        border-radius: $spacer-1;
        padding: $spacer-2;
        cursor: pointer;
        margin: $spacer-2 0;

        &:hover {
          opacity: 0.7;
          text-decoration: line-through;
        }

        .impact-list-impact-name {
          font-weight: bold;
          color: #fff;
          font-size: 1.2em;
        }

        .impact-list-impact-purpose {
          font-size: 0.9em;
          color: #ddd;
        }
      }
    }
  }
</style>
