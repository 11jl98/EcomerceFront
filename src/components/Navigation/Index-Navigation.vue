<template>
  <div v-if="this.$route.path != '/'">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "./Side-Bar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
</style>
