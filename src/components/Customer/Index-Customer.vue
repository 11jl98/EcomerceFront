<template>
  <div class="d-flex justify-content-end w-100 container-geral">
    <div
      class="container-components mt-5"
      id="receita"
      role="tablist"
      :style="{ width: width }"
    >
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <b-tab title="Cadastro de clientes">
            <b-card-text>
              <Customer :readOrEditCustomers="readOrEditCustomers" />
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>
              <Search
                @readOrEditCustomers="readOrEditCustomers = $event"
                @alterTabIndex="tabIndex = $event"
            /></b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import Customer from "./Customer.vue";
import Search from "./Search.vue";
import { mapState } from "vuex";

export default {
  components: {
    Customer,
    Search,
  },
  data() {
    return {
      readOrEditCustomers: {},
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
  margin-right: 20px !important;
}

.container-components {
  transition: all 0.4s linear;
}
</style>