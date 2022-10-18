<template>
  <div id="app">
    <div>
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
  width: 10px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: rgb(29, 169, 253);
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #e8e8e8;
  border-radius: 2px;
}

body {
  /* background: #102558 !important; */
  background-color: rgb(194, 193, 193) !important;
  margin: 0;
  padding: 0;
  height: auto;
}
</style>
