<template>
  <div class="d-flex home">
    <NavBar />
    <SidBar />
    <Dashaboard />
  </div>
</template>

<script>
import Dashaboard from "../../components/Dashboard/Index-Dashboard.vue";
import SidBar from "../../components/Navigation/Side-Bar.vue";
import NavBar from "../../components/Navigation/Nav-Bar.vue";

export default {
  components: {
    NavBar,
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