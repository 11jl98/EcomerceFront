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
          <b-tab title="Pedido de venda">
            <b-card-text>
              <Sale />
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>
              <Search />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import Sale from "../Sale/Sale.vue";
import Search from "../Sale/Search.vue";
import { mapState } from "vuex";
export default {
  components: {
    Sale,
    Search,
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
  margin-left: -20px !important;
}

.container-components {
  transition: all 0.4s linear;
}
</style>