<template>
  <div class="d-flex home">
    <SidBar />
    <Dashaboard />
  </div>
</template>

<script>
import Dashaboard from "../../components/Dashboard/Index-Dashboard.vue";
import SidBar from "../../components/Navigation/Side-Bar.vue";

export default {
  components: {
    SidBar,
    Dashaboard,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
/* .home{
    width: 80%;
 
} */
</style>