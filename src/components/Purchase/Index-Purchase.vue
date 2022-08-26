<template>
  <div class="d-flex justify-content-end w-100 container-geral-purchase">
    <div
      class="container-components mt-5"
      id="receita"
      role="tablist"
      :style="{ width: width }"
    >
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <b-tab title="Nota de compra">
            <b-card-text>
              <Purchase :dataEditPurchase="dataPurchase" />
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>
              <Search
                @editPurchase="dataPurchase = $event"
                @alterTabIndex="tabIndex = $event"
            /></b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import Purchase from "./Purchase.vue";
import Search from "./Search.vue";
import { mapState } from "vuex";

export default {
  components: {
    Purchase,
    Search,
  },
  data() {
    return {
      readOrEditCustomers: {},
      tabIndex: 1,
      dataPurchase: {},
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
.container-geral-purchase {
  width: 100% !important;
  margin-left: -20px !important;
}

.container-components {
  transition: all 0.4s linear;
}
</style>
