<template>
  <div class="d-flex justify-content-end container-geral">
    <div
      class="container-components mt-5"
      id="receita"
      role="tablist"
      :style="{ width: width }"
    >
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <b-tab title="Nota fiscal">
            <b-card-text>
              <NotaFiscal :propsIdNota="idNota" />
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>
              <Search
                @alterTabIndex="tabIndex = $event"
                @idNota="idNota = $event"
              />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import NotaFiscal from "./NotaFiscal.vue";
import Search from "./Search.vue";
import { mapState } from "vuex";

export default {
  components: {
    NotaFiscal,
    Search,
  },
  data() {
    return {
      tabIndex: 1,
      idNota: "",
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
  margin-right: 20px !important;
}

.container-components {
  transition: all 0.4s linear;
}
</style>