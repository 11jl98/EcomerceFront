<template>
  <div class="d-flex justify-content-end w-100 container-geral-financeiro">
    <div
      class="container-components-financeiro"
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
.container-geral-financeiro {
  width: 100% !important;
}

.container-components-financeiro {
  transition: all 0.4s linear;
}
</style>