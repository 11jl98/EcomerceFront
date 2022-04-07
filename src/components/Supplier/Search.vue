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
              v-model="textPesquisa"
              required
              size="sm"
            ></b-form-input>
          </b-form-group>
          <div style="margin: 16px">
            <b-button
              variant="primary"
              class="mt-3 mb-3"
              @click="readSupplier(page)"
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
            <tr v-for="supplier in readSuppliers" :key="supplier.id">
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
  </div>
</template>

<script>
import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";
export default {
  components: {},
  data() {
    return {
      readSuppliers: [],
      textPesquisa: "",
      tabIndex: 0,
      page: 1,
      dataLength: 0,
    };
  },
  methods: {
    async readSupplier(page) {
      try {
        if (this.textPesquisa !== "") {
          const { data } = await api.get(
            `/providers?q=${this.textPesquisa}&page=${page}`
          );
          this.dataLength = data.data.length;
          this.readSuppliers = data.data;
        } else {
          return;
        }
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível listar os clientes",
          type: "warning",
        });
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

    nextPage() {
      this.readSupplier((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.readSupplier((this.page -= 1));
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
