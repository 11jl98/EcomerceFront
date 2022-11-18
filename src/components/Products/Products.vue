<template>
  <b-card class="shadow">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h3>Dados Cadastrais</h3>
      </div>

      <div>
        <b-button
          class="mr-4"
          style="border: none !important; background-color: #56aafe !important"
          size="sm"
          @click="openModalTaxInformation"
          >Infor. Fiscal <b-icon-stickies class="ml-1"></b-icon-stickies
        ></b-button>
      </div>
    </div>
    <hr />
    <div class="mt-4">
      <b-row>
        <b-form-input hidden></b-form-input>

        <b-form-group
          id="input-group-1"
          label="Nome Produto"
          label-for="input-1"
          class="col-sm-12 col-md-6 col-lg-5 col-xl-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Nome"
            required
            v-model="dataProducts.nome"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Valor"
          label-for="input-1"
          class="col-sm-4 col-md-3 col-lg-2 col-xl-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Valor"
            required
            v-model="dataProducts.valor"
            size="sm"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Vl. venda"
          label-for="input-1"
          class="col-sm-4 col-md-3 col-lg-2 col-xl-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Valor de venda"
            required
            v-model="dataProducts.valorVenda"
            size="sm"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Unidade"
          label-for="input-1"
          class="col-sm-4 col-md-3 col-lg-3 col-xl-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Unidade"
            required
            v-model="dataProducts.unidade"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Cód. barras"
          label-for="input-1"
          class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Cód. barras"
            v-model="dataProducts.codBarras"
            size="sm"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Cód. referencia"
          label-for="input-1"
          class="col-sm-6 col-md-5 col-lg-4 col-xl-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Cód. referencia"
            v-model="dataProducts.codReferencia"
            size="sm"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Estoque"
          label-for="input-1"
          class="col-sm-6 col-md-2 col-lg-2 col-xl-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Estoque"
            required
            disabled
            v-model="dataProducts.estoque"
            size="sm"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Estoque mín"
          label-for="input-1"
          class="col-sm-6 col-md-3 col-lg-2 col-xl-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Estoque mínimo"
            required
            type="number"
            v-model="dataProducts.estoqueMin"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Descrição"
          label-for="input-1"
          class="col-sm-12 col-md-7 col-lg-12 col-xl-5"
        >
          <b-form-textarea
            id="textarea"
            rows="3"
            max-rows="6"
            v-model="dataProducts.descricao"
            size="sm"
          ></b-form-textarea>
        </b-form-group>
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
              @click="saveOrUpdateProducts"
              size="sm"
              >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
            ></b-button>
            <b-button variant="light" size="sm" @click="clear"
              >Novo
              <b-icon-arrow-clockwise class="ml-1"></b-icon-arrow-clockwise
            ></b-button>
          </div>
        </div>
      </div>
    </div>
    <ModalTaxInformation />
  </b-card>
</template>

<script>
import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";
import ServiceProducts from "../../services/serviceProducts";
import ModalTaxInformation from "../ModalTaxInformation/Index-TaxInformation.vue";

export default {
  props: {
    readOrEditProducts: {
      type: Object,
    },
  },
  components: {
    ModalTaxInformation,
  },
  data() {
    return {
      dataProducts: {
        id: "",
        nome: "",
        valor: 0.0,
        valorVenda: 0.0,
        unidade: "",
        descricao: "",
        codBarras: "",
        codReferencia: "",
        estoque: 0,
        estoqueMin: 0,
      },
    };
  },
  methods: {
    saveOrUpdateProducts() {
      this.dataProducts.id === "" || this.dataProducts.id === null
        ? this.saveProducts()
        : this.updateProducts();
    },

    async updateProducts() {
      try {
        await api.put("/products/" + this.dataProducts.id, this.dataProducts);
        return this.$toast.open({
          message: "Produto Atualizado com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        return toastAlertErros.validateErroDoesNotContainFor(
          error,
          this.$toast
        );
      }
    },

    async saveProducts() {
      try {
        const id = await ServiceProducts.saveProducts(this.dataProducts);
        this.dataProducts.id = id;
        return this.$toast.open({
          message: "Produto Salvo com Sucesso",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateErroDoesNotContainFor(
          error,
          this.$toast
        );
      }
    },

    clear() {
      this.dataProducts = {
        id: "",
        nome: "",
        valor: 0.0,
        valorVenda: 0.0,
        unidade: "",
        descricao: "",
        codBarras: "",
        codReferencia: "",
        estoque: 0,
        estoqueMin: 0,
      };
    },

    openModalTaxInformation() {
      this.$bvModal.show("modalTaxInformation");
    },
  },
  watch: {
    readOrEditProducts() {
      this.dataProducts = this.readOrEditProducts;
    },
  },
};
</script>
<style scoped></style>
