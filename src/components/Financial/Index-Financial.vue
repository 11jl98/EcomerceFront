<template>
  <div>
    <Financial />
  </div>
</template>

<script>
import Financial from "../Financial/Financial.vue";
export default {
  components: {
    Financial,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.container-home {
  width: 20% !important;
  height: 60vh;
  margin: 1vh;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.911);
}
.button-menu {
  width: 90%;
  color: #fff;
  margin: 5px;
  margin-bottom: 10px;
}
.nav-button {
  border-radius: 10px;
  background-color: #56aafe !important;
  color: #fff;
  border: none;
}
.container-components {
  width: 73% !important;
}
</style>