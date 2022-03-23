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
          <b-tab title="Cadastro de fornecedores">
            <b-card-text>
              <Supplier :dataSupplier="dataSupplier" />
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>
              <Search
                @readOrEditSupplier="dataSupplier = $event"
                @alterTabIndex="tabIndex = $event"
              />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import Supplier from "./Supplier.vue";
import Search from "./Search.vue";
import { mapState } from "vuex";

export default {
  components: {
    Supplier,
    Search,
  },
  data() {
    return {
      dataSupplier: {},
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
  margin-right: 20px !important;
}

.container-components {
  transition: all 0.4s linear;
}
</style>