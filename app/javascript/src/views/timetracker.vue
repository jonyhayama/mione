<template>
  <div>
    <h2>Time Tracker</h2>
    <div v-for="log in logs" :key="log.id">
      Log {{ log.id }}
    </div>
  </div>
</template>

<script>
  import store from '../vuex';
  import { mapActions, mapGetters } from "vuex";
  export default {
    created () {
      store.dispatch('TimeTracker/loadLogs');
    },
    computed: {
      ...mapGetters("TimeTracker", ["logs"])
    },
  }
</script>

<style lang="scss" scoped>
  
</style>