<template>
  <div>
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
              v-model="txtPesquisa"
              required
              size="sm"
            ></b-form-input>
          </b-form-group>
          <div style="margin: 16px">
            <b-button
              variant="primary"
              class="mt-3 mb-3"
              @click="readSupplier"
              size="sm"
            >
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>

      <div class="tableSearchSupplier">
        <table class="table table-sm">
          <thead>
            <tr style="background-color: #56aafe; color: white">
              <th scope="col">Nome Fantasia</th>
              <th scope="col">Razão Social</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Celular</th>
              <th scope="col">Ações</th>
            </tr>
            <tr v-for="supplier in dataSuppliers" :key="supplier.id">
              <td class="tdSearchSupplier">{{ supplier.nomeFantasia }}</td>
              <td class="tdSearchSupplier">{{ supplier.razaoSocial }}</td>
              <td class="tdSearchSupplier">{{ supplier.cpfCnpj }}</td>
              <td class="tdSearchSupplier">{{ supplier.celular }}</td>
              <td>
                <b-button
                  size="sm"
                  class="mr-2"
                  variant="info"
                  @click="editSupplier(supplier)"
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
                  @click="destroySupplier(supplier.id)"
                  v-b-popover.hover.right="{
                    variant: 'secondary',
                    content: 'Excluir',
                  }"
                >
                  <b-icon-trash scale="1"></b-icon-trash
                ></b-button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <hr />
    </b-card>
  </div>
</template>

<script>
import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";
export default {
  components: {},
  data() {
    return {
      dataSuppliers: [],
      txtPesquisa: "",
      tabIndex: 0,
    };
  },
  methods: {
    async readSupplier() {
      try {
        const { data } = await api.get(`/providers?q=${this.txtPesquisa}`);
        this.dataSuppliers = data.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async editSupplier(Supplier) {
      this.$emit("readOrEditSupplier", Supplier);
      this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais");
      this.$emit("alterTabIndex", this.tabIndex);
    },
    async destroySupplier(idSupplier) {
      try {
        await api.delete(`/Providers/${idSupplier}`);
        this.readSupplier();
        return this.$toast.open({
          message: "Fornecedor deletado com sucesso",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateMessage(error, this.$toast);
      }
    },
  },
};
</script>
<style scoped>
.tableSearchSupplier {
  margin-top: 31px;
  overflow-x: auto !important;
}

.tdSearchSupplier {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px;
}
</style>
