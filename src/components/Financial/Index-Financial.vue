<template>
  <div class="d-flex justify-content-end w-100 container-geral">
    <div
      class="container-components mt-5"
      id="receita"
      role="tablist"
      :style="{ width: width }"
    >
      <Financial />
    </div>
  </div>
</template>

<script>
import Financial from "../Financial/Financial.vue";
import { mapState } from "vuex";
export default {
  components: {
    Financial,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      width: (state) => state.widthCards,
    }),
  },
};
</script>
<style scoped>
.container-geral {
  width: 100% !important;
}

.container-components {
  transition: all 0.4s linear;
}
</style>