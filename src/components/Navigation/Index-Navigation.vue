<template>
  <div v-if="this.$route.path != '/'">
    <Sidebar/>
    <Navbar/>
  </div>
</template>

<script>
import Sidebar from "./Side-Bar.vue";
import Navbar from "./Nav-Bar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Navbar
  },
};
</script>

<style>

</style>
