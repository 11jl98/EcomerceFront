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
          <b-tab title="Movimentações de caixa">
            <b-card-text>
              <Safe :searchDataForTheForm="searchDataForTheForm" />
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>
              <Search
                @searchDataForTheForm="searchDataForTheForm = $event"
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
import Safe from "./Form-safe.vue";
import Search from "./Search.vue";
import { mapState } from "vuex";

export default {
  components: {
    Safe,
    Search,
  },
  data() {
    return {
      tabIndex: 1,
      searchDataForTheForm: {},
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