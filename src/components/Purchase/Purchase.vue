<template>
  <b-card class="shadow">
    <h3>Compra de mercadorias</h3>

    <hr />

    <div class="mt-4">
      <b-row class="col-sm-12 d-flex">
        <b-form-input
          hidden
          v-model="dataPurchase.id"
          class="col-sm-1"
        ></b-form-input>
        <b-form-group
          id="input-group-1"
          label="Data Compra"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            required
            size="sm"
            type="date"
            v-model="dataPurchase.dataCompra"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Nº NF-e"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Nº NF-e"
            required
            size="sm"
            type="number"
            v-model="dataPurchase.numeroNfe"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Modelo"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Ex: 55"
            required
            size="sm"
            type="number"
            v-model="dataPurchase.modeloNfe"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Serie NF"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Serie"
            required
            size="sm"
            type="number"
            v-model="dataPurchase.serieNfe"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Fornecedor"
          label-for="input-1"
          class="col-sm-3"
          size="sm"
        >
          <b-form-select
            text-field="razaoSocial"
            value-field="id"
            v-model="dataPurchase.idFornecedor"
            size="sm"
            :options="supplierForSelectBox"
          ></b-form-select>
        </b-form-group>
      </b-row>

      <b-row>
        <b-col class="col-sm-6">
          <b-row class="col-sm-12">
            <b-form-group
              id="input-group-1"
              label="Produtos"
              label-for="input-1"
              class="col-sm-6"
              size="sm"
            >
              <b-form-select
                text-field="nome"
                value-field="id"
                v-model="idProductForSelectBox"
                size="sm"
                :options="productsForSelectBox"
                @change="onChange(idProductForSelectBox)"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Quantidade"
              label-for="input-1"
              class="col-sm-4"
            >
              <b-form-input
                id="input-1"
                type="number"
                size="sm"
                required
                v-model="dataPurchase.quantidade"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Valor unitario"
              label-for="input-1"
              class="col-sm-5"
            >
              <b-form-input
                id="input-1"
                placeholder="Valor unitario"
                size="sm"
                type="number"
                v-model="dataPurchase.valorUnitario"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Estoque"
              label-for="input-1"
              class="col-sm-5"
            >
              <b-form-input
                id="input-1"
                placeholder="Estoque"
                required
                disabled
                size="sm"
                type="number"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Descrição"
              label-for="input-1"
              class="col-sm-12"
            >
              <b-form-textarea
                id="textarea"
                rows="3"
                max-rows="6"
                size="sm"
                v-model="dataPurchase.dadosAdicionais"
              ></b-form-textarea>
              <b-button
                variant="info"
                size="sm"
                @click="addProduct"
                class="mt-3"
              >
                Adicionar Produto <b-icon-plus class="ml-1"></b-icon-plus
              ></b-button>
            </b-form-group>
          </b-row>
        </b-col>

        <b-col class="col-sm-6">
          <b-row class="col-sm-12 tableSearchPurchase">
            <table class="table table-sm">
              <thead>
                <tr style="background-color: #56aafe; color: white">
                  <th>Produto</th>
                  <th>Qnt</th>
                  <th>Vl. und</th>
                  <th>Vl. total</th>
                  <th>Ações</th>
                </tr>
                <tr v-for="item in productsListGrid" :key="item.id">
                  <td class="tdSearchPurchase">
                    {{ item.nome }}
                  </td>
                  <td class="tdSearchPurchase">
                    {{ item.quantidade }}
                  </td>
                  <td class="tdSearchPurchase">
                    {{ item.valorUnitario }}
                  </td>
                  <td class="tdSearchPurchase">
                    {{ item.valorUnitario * item.quantidade }}
                  </td>
                  <td>
                    <b-button
                      class="mr-4"
                      style="align"
                      size="sm"
                      variant="secondary"
                      @click="deletPurchase(item.id)"
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
          </b-row>
        </b-col>
      </b-row>

      <div>
        <div class="d-flex justify-content-end">
          <div class="mr-4">
            <b-dropdown
              id="dropdown-1"
              text="Salvar / Importar XML"
              class="m-md-2 mr-4"
              variant="info"
              size="sm"
            >
              <b-dropdown-item @click="saveAndUpdate">Salvar</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="openModalImportXml"
                >Importar XML</b-dropdown-item
              >
            </b-dropdown>
          </div>
          <b-button variant="light" size="sm" @click="clearInputs"
            >Novo <b-icon-arrow-clockwise class="ml-1"></b-icon-arrow-clockwise
          ></b-button>
        </div>
        <ModalImportXml
          @idSupplierForSelectBox="idSupplier = $event"
          @idProductsForSelectBox="idProduct = $event"
          @modalIdForPurchase="modalIdForPurchase = $event"
        />
      </div>
    </div>
  </b-card>
</template>

<script>
import ModalImportXml from "./Modal-Import-Xml.vue";
import ServiceSupplier from "../../services/serviceSupplier";
import ServiceProducts from "../../services/serviceProducts";
import ServicePurchase from "../../services/servicePurchase";
import ServiceProductsPurchase from "../../services/serviceProductsPurchase";
import servicePurchase from "../../services/servicePurchase";

export default {
  data() {
    return {
      dataPurchase: {
        id: "",
        idFornecedor: "",
        dataCompra: "",
        numeroNfe: "",
        modeloNfe: "",
        serieNfe: "",
        dadosAdicionais: null,
        quantidade: "",
        valorUnitario: "",
      },
      idSupplier: "",
      idSupplierForSelectBox: "",
      productsForSelectBox: [],
      supplierForSelectBox: [],
      idProductForSelectBox: "",
      idProduct: "",
      modalIdForPurchase: "",

      addProdutos: {
        id: "",
        idEmpresa: "",
        idProduto: "",
        nomeProduto: "",
        idCompra: "",
        quantidade: "",
        valorUnitario: "",
      },
      productsListGrid: [],
    };
  },

  components: {
    ModalImportXml,
  },

  methods: {
    onChange(idProductForSelectBox) {
      console.log(idProductForSelectBox);
    },

    async saveAndUpdate() {
      this.dataPurchase.id !== "" ? this.updatePurchase() : this.savePurchase();
    },

    async savePurchase() {
      try {
        const { id } = await ServicePurchase.savePurchase(this.dataPurchase);
        this.dataPurchase.id = id;
        return this.$toast.open({
          message: "Salvo com sucesso!",
          type: "success",
        });
      } catch (error) {
        console.log("aaaooieo");
        return this.$toast.open({
          message: `${error.response}`,
          type: "error",
        });
      }
    },

    async updatePurchase() {
      try {
        const { data } = await servicePurchase.updatePurchase(
          this.dataPurchase.id,
          this.dataPurchase
        );
        console.log(this.dataPurchase.id, "123123");

        this.$toast.open({
          message: "Atualizado com sucesso!",
          type: "info",
        });
        console.log("nesse lugar");
        return data;
      } catch (error) {
        console.log(error.response.data.message);
        return this.$toast.open({
          message: `${error.response.data.message}`,
          type: "warning",
        });
      }
    },

    async getProductsForSelectBox() {
      try {
        const products = await ServiceProducts.getProductsForSelectBox();
        this.productsForSelectBox = products.data;
      } catch (error) {
        return this.$toast.open({
          message: "Ocorreu um erro ao listar os produtos!",
          type: "error",
        });
      }
    },

    async getSuppliersForSelectBox() {
      try {
        const suppliers = await ServiceSupplier.getSuppliersForSelectBox();
        this.supplierForSelectBox = suppliers;
      } catch (error) {
        return this.$toast.open({
          message: "Ocorreu um erro ao listar os Fornecedores!",
          type: "error",
        });
      }
    },
    openModalImportXml() {
      this.$bvModal.show("modalImportXml");
    },

    clearInputs() {
      this.dataPurchase.id = "";
      this.dataPurchase.idFornecedor = "";
      this.dataPurchase.dataCompra = "";
      this.dataPurchase.numeroNfe = "";
      this.dataPurchase.modeloNfe = "";
      this.dataPurchase.serieNfe = "";

      this.idProductForSelectBox = "";
      this.dataPurchase.quantidade = "";
      this.dataPurchase.valorUnitario = "";

      this.dataPurchase.dadosAdicionais = "";

      this.productsListGrid = "";
    },

    clearProducts() {
      this.idProductForSelectBox = "";
      this.dataPurchase.valorUnitario = "";
      this.dataPurchase.quantidade = "";
      this.dataPurchase.dadosAdicionais = "";
    },

    async addProduct() {
      try {
        this.addProdutos.idCompra = this.dataPurchase.id;
        this.addProdutos.idProduto = this.idProductForSelectBox;
        this.addProdutos.valorUnitario = this.dataPurchase.valorUnitario;
        this.addProdutos.quantidade = this.dataPurchase.quantidade;

        if (this.dataPurchase.id == "") {
          return this.$toast.open({
            message: "Salve a compra antes de adicionar o produto",
            type: "error",
          });
        } else {
          await ServiceProductsPurchase.save(this.addProdutos);
          await this.getProductsForGrid();
          this.clearProducts();
        }
        this.clearProducts();
      } catch (error) {
        return this.$toast.open({
          message: "Opa, deu erro!",
          type: "error",
        });
      }
    },

    async getProductsForGrid() {
      this.productsListGrid = await servicePurchase.getProductsForGrid(
        this.dataPurchase.id
      );
    },

    async deletPurchase(id) {
    console.log(id, '99')

      // await servicePurchase.delete(id);
      // this.getProductsForGrid();
    },
  },

  mounted() {
    this.getProductsForSelectBox();
    this.getSuppliersForSelectBox();
  },

  watch: {
    idSupplier() {
      this.getSuppliersForSelectBox();
      this.dataPurchase.idFornecedor = this.idSupplier;
    },

    idProduct() {
      this.getProductsForSelectBox();
    },

    modalIdForPurchase() {
      this.dataPurchase.id = this.modalIdForPurchase.id;
    },
  },
};
</script>
<style scoped>
.tableSearchPurchase {
  margin-top: 31px;
  overflow: auto !important;
  max-height: 300px;
}

.tdSearchPurchase {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 80px;
}
</style>
