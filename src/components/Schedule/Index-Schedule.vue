<template>
  <div class="d-flex flex-column container-schedule">
      <h2 class="mt-3 mb-5" style="color: #fff">Utilize a Agenda para eventos importantes!</h2>
    <Schedule />
  </div>
</template>
<script>
import Schedule from "./Schedule.vue";

export default {
  components: {
    Schedule,
  },
  data() {
    return {};
  },
};
</script>
 <style scoped>
.container-schedule {
  text-align: center;
}
</style>