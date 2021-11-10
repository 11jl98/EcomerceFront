<template>
  <div id="app">
    <NavigationBar />
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
body {
  background: rgb(29,169,253);
background: linear-gradient(0deg, rgba(29,169,253,1) 9%, rgba(73,116,231,1) 43%, rgba(58,91,180,1) 82%)fixed;
  margin:0;
  padding: 0;
  height: auto;
}
</style>
