<template>
  <b-card class="shadow">
    <h3>Compra de mercadorias</h3>
    <div>
      <b-row class="col-sm-12 d-flex justify-content-end">
        <div>
          <div>
            <b-button
              class="mr-4"
              style="
                border: none !important;
                background-color: black !important;
              "
              size="sm"
              @click="openModalImportXml"
              >Importar XML
              <b-icon-file-earmark-arrow-down
                class="ml-1"
              ></b-icon-file-earmark-arrow-down
            ></b-button>
          </div>
        </div>
      </b-row>
    </div>
    <hr />

    <div class="mt-4">
      <b-row class="col-sm-12 d-flex">
        <b-form-input hidden class="col-sm-1"></b-form-input>
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
            v-model="idSupplierForSelectBox"
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
              ></b-form-textarea>
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
          </b-row>
        </b-col>
      </b-row>

      <div>
        <div class="d-flex justify-content-end">
          <div>
            <b-button
              class="mr-4"
              style="
                border: none !important;
                background-color: #56aafe !important;
              "
              size="sm"
              >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
            ></b-button>
            <b-button variant="light" size="sm"
              >Novo
              <b-icon-arrow-clockwise class="ml-1"></b-icon-arrow-clockwise
            ></b-button>
          </div>
        </div>
        <ModalImportXml
          @idSupplierForSelectBox="idSupplier = $event"
          @idProductsForSelectBox="idProduct = $event"
        />
      </div>
    </div>
  </b-card>
</template>

<script>
import api from "../../services/axios";
import ModalImportXml from "./Modal-Import-Xml.vue";
export default {
  data() {
    return {
      idSupplier: "",
      idSupplierForSelectBox: "",
      productsForSelectBox: [],
      supplierForSelectBox: [],
      idProductForSelectBox: "",
      idProduct: "",
    };
  },

  components: {
    ModalImportXml,
  },

  methods: {
    onChange(idProductForSelectBox) {
      console.log(idProductForSelectBox);
    },

    async getProductsForSelectBox() {
      try {
        const { data } = await api.get("/products");
        this.productsForSelectBox = data.data;
      } catch (error) {
        return this.$toast.open({
          message: "Ocorreu um erro ao listar os produtos!",
          type: "success",
        });
      }
    },

    async getSuppliersForSelectBox() {
      try {
        const { data } = await api.get("/providers/fill/combobox");
        this.supplierForSelectBox = data;
      } catch (error) {
        return this.$toast.open({
          message: "Ocorreu um erro ao listar os Fornecedores!",
          type: "success",
        });
      }
    },
    openModalImportXml() {
      this.$bvModal.show("modalImportXml");
    },
  },

  mounted() {
    this.getProductsForSelectBox();
    this.getSuppliersForSelectBox();
  },

  watch: {
    idSupplier() {
      this.getSuppliersForSelectBox();
      this.idSupplierForSelectBox = this.idSupplier;
    },
    idProduct() {
      this.getProductsForSelectBox();
      this.idProductForSelectBox = this.idProduct;
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
