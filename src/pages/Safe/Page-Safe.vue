<template>
  <div class="d-flex justify-content-end w-100 container-geral">
    <div
      class="container-components mt-5"
      id="receita"
      role="tablist"
      :style="{ width: width }"
    >
      <b-card no-body>
        <b-tabs v-model="tabIndex" card>
          <b-tab title="Cadastro de funcionários">
            <FormSafe />
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text> </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import FormSafe from "../../components/Safe/Form-safe.vue";

export default {
  components: {
    FormSafe,
  },
  data() {
    return {
      dataEmployee: {},
      tabIndex: 1,
    };
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
  margin-top: -20px !important;
  margin-right: 100px !important;
}

.container-components {
  transition: all 0.4s linear;
}
</style>