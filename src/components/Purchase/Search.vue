<template>
  <div>
    <b-collapse
      visible
      id="accordion-search"
      accordion="my-accordion"
      role="tabpanel"
      class="mt-2"
    >
      <b-card class="shadow">
        <div class="d-flex align-items-center">
          <b-row class="col-sm-12">
            <b-form-group
              id="input-group-1"
              label="Pesquisa"
              label-for="input-1"
              class="col-sm-4"
            >
              <b-form-input
                id="input-1"
                type="email"
                size="sm"
                required
              ></b-form-input>
            </b-form-group>
            <div style="margin: 16px">
              <b-button variant="primary" class="mt-3 mb-3" size="sm">
                <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
                Pesquisar</b-button
              >
            </div>
          </b-row>
        </div>
        <div class="tableSearchPurchase">
          <table class="table table-sm">
            <thead>
              <tr style="background-color: #56aafe; color: white">
                <th>Nome Produto</th>
                <th>Descrição</th>
                <th>Valor de venda</th>
                <th>estoque</th>
                <th>Ações</th>
              </tr>
              <tr>
                <td class="tdSearchPurchase">TESTE</td>
                <td class="tdSearchPurchase">TESTE</td>
                <td class="tdSearchPurchase">TESTE</td>
                <td class="tdSearchPurchase">TESTE</td>
                <td>
                  <b-button
                    size="sm"
                    class="mr-2"
                    variant="info"
                    v-b-popover.hover.left="{
                      variant: 'info',
                      content: 'Editar',
                    }"
                  >
                    <b-icon-check scale="2"></b-icon-check>
                  </b-button>
                  <b-button
                    size="sm"
                    variant="secondary"
                    v-b-popover.hover.right="{
                      variant: 'secondary',
                      content: 'Excluir',
                    }"
                  >
                    <b-icon-trash scale="1.3"></b-icon-trash
                  ></b-button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <hr />
        <b-button
          size="sm"
          class="buttonPagePrevious"
          @click="previousPage"
          :disabled="this.page === 1 ? true : false"
        >
          <b-icon-arrow-left-square-fill
            class="ml-2"
            scale="1.5"
            style="cursor: pointer"
            variant="info"
          ></b-icon-arrow-left-square-fill
        ></b-button>

        <b-button
          size="sm"
          class="buttonPageNext"
          @click="nextPage"
          :disabled="this.dataLength === 0 ? true : false"
        >
          <b-icon-arrow-right-square-fill
            scale="1.5"
            variant="info"
            style="cursor: pointer"
          ></b-icon-arrow-right-square-fill>
        </b-button>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
// import api from "../../services/axios";
export default {
  data() {
    return {
      dataProducts: {},
      productsTable: [],
      textPesquisa: "",
      tabIndex: 0,
      page: 1,
      dataLength: 0,
    };
  },
  methods: {
    nextPage() {
      this.readPurchase((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.readPurchase((this.page -= 1));
      }
    },
  },
};
</script>
<style scoped>
.tableSearchPurchase {
  margin-top: 31px;
  overflow-x: auto !important;
}

.tdSearchPurchase {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 80px;
}

.buttonPagePrevious {
  background-color: transparent !important;
  border: none !important;
  padding-left: 0px !important;
}

.buttonPageNext {
  background-color: transparent !important;
  border: none !important;
}
</style>
