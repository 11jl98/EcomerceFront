<template>
  <b-card class="shadow">
    <h3>Dados Cadastrais</h3>
    <hr />
    <div class="mt-4">
      <b-row class="d-flex justify-content-around">
        <b-form-input hidden class="col-sm-1"></b-form-input>

        <b-form-group
          id="input-group-1"
          label="Nome Produto"
          label-for="input-1"
          class="col-sm-5"
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
          class="col-sm-3"
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
          label="Valor de venda"
          label-for="input-1"
          class="col-sm-3"
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
      </b-row>
      <b-row class="d-flex justify-content-around">
        <b-form-group
          id="input-group-1"
          label="Unidade"
          label-for="input-1"
          class="col-sm-3"
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
          label="Código de barras"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Código de barras"
            v-model="dataProducts.codBarras"
            size="sm"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Código de referencia"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Código de referencia"
            v-model="dataProducts.codReferencia"
            size="sm"
            required
          ></b-form-input>
        </b-form-group>
      </b-row>

      <b-row class="d-flex justify-content-around">
        <b-form-group
          id="input-group-1"
          label="Estoque"
          label-for="input-1"
          class="col-sm-2"
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
          label="Estoque mínimo"
          label-for="input-1"
          class="col-sm-2"
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
          class="col-sm-7"
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

      <b-row class="d-flex justify-content-around"> </b-row>
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
  </b-card>
</template>

<script>
import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";

export default {
  props: {
    readOrEditProducts: {
      type: Object,
    },
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
        estoque: "0",
        estoqueMin: "0",
      },
    };
  },

  methods: {
    saveOrUpdateProducts() {
      if (this.dataProducts.id == "" || this.dataProducts.id == null)
        return this.SaveProducts();

      this.updateProducts();
    },

    async updateProducts() {
      try {
        await api.put("/products/" + this.dataProducts.id, this.dataProducts);
        return this.$toast.open({
          message: "Produto Editado com Sucesso",
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

    async SaveProducts() {
      try {
        const { data } = await api.post("/products", this.dataProducts);
        console.log(data);
        this.dataProducts.id = data.id;
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
  },
  watch: {
    readOrEditProducts() {
      this.dataProducts = this.readOrEditProducts;
    },
  },
};
</script>
<style scoped></style>
