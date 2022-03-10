<template>
  <div id="app">
    <div v-if="this.$route.path != '/'">
      <NavigationBar />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/Navigation/Index-Navigation.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style>
*::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

*::-webkit-scrollbar-track {
  background: rgb(29, 169, 253);
  background: linear-gradient(
    0deg,
    rgba(29, 169, 253, 1) 9%,
    rgba(73, 116, 231, 1) 43%,
    rgba(58, 91, 180, 1) 82%
  );
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.788);
  border-radius: 20px;
}

body {
  background: #102558 !important;

  margin: 0;
  padding: 0;
  height: auto;
}
</style>
