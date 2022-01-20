<template>
  <div class="d-flex justify-content-end w-100 container-geral">
    <div
      class="container-components mt-5"
      id="receita"
      role="tablist"
      :style="{ width: width }"
    >
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Cadastro de funcionários">
            <b-card-text>
              <Employee :dataEmployee="dataEmployee" />
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>
              <Search @readOrEditEmployees="dataEmployee = $event" />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import Employee from "./Employee.vue";
import Search from "./Search.vue";
import { mapState } from "vuex";
export default {
  components: {
    Employee,
    Search,
  },
  data() {
    return {
      dataEmployee: {},
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
  margin-right: 20px !important;
}

.container-components {
  transition: all 0.4s linear;
}
</style>