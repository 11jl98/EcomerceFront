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
                v-model="textPesquisa"
                size="sm"
                required
              ></b-form-input>
            </b-form-group>
            <div style="margin: 16px">
              <b-button
                variant="primary"
                class="mt-3 mb-3"
                @click="SearchProducts"
                size="sm"
              >
                <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
                Pesquisar</b-button
              >
            </div>
          </b-row>
        </div>
        <div class="tableSearchProducts">
          <table class="table table-sm">
            <thead>
              <tr style="background-color: #56aafe; color: white">
                <th>Nome Produto</th>
                <th>Descrição</th>
                <th>Valor de venda</th>
                <th>estoque</th>
                <th>Ações</th>
              </tr>
              <tr v-for="products in dataProducts" :key="products.id">
                <td class="tdSearchProducts">
                  {{ products.nome }}
                </td>
                <td class="tdSearchProducts">
                  {{ products.descricao }}
                </td>
                <td class="tdSearchProducts">{{ products.valorVenda }}</td>
                <td class="tdSearchProducts">{{ products.estoque }}</td>
                <td>
                  <b-button
                    size="sm"
                    class="mr-2"
                    variant="info"
                    @click="editproducts(products)"
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
                    @click="destroyproducts(products.id)"
                    v-b-popover.hover.right="{
                      variant: 'secondary',
                      content: 'Excluir',
                    }"
                  >
                    <b-icon-trash scale="0.7"></b-icon-trash
                  ></b-button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <hr />
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import api from "../../services/axios";
export default {
  data() {
    return {
      dataProducts: {},
      productsTable: [],
      textPesquisa: "",
      tabIndex: 0,
    };
  },
  methods: {
    async SearchProducts() {
      try {
        const { data } = await api.get(
          `/products/filter/products?q=${this.textPesquisa}`
        );
        this.dataProducts = data.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async editproducts(products) {
      try {
        this.$emit("dataProducts", products);
        this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais");
        this.$emit("alterTabIndex", this.tabIndex);
      } catch (error) {
        console.log(error);
      }
    },
    async destroyproducts(idProducts) {
      try {
        await api.delete("/products/" + idProducts);
        this.SearchProducts();
        return this.$toast.open({
          message: "Produto deletado com sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error.response.data);
        return this.$toast.open({
          message: `${error.response.data.message}`,
          type: "error",
        });
      }
    },
  },
};
</script>
<style scoped>
.textoGrande {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px !important;
}

.tableSearchProducts {
  margin-top: 31px;
  overflow-x: auto !important;
}

.tdSearchProducts {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 80px;
}
</style>
