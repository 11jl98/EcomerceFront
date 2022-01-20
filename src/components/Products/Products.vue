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
            v-model="estoque"
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
              >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
            ></b-button>
            <b-button variant="light"
              >Limpar
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

export default {
  props: {
    readOrEditProducts: {
      type: Object,
    },
  },
  data() {
    return {
      dataProducts: {},
      estoque: 0,
    };
  },

  methods: {
    saveOrUpdateProducts() {
      console.log(this.dataProducts.id);
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
        return this.$toast.open({
          message: "Não foi possível editar os dados",
          type: "warning",
        });
      }
    },

    async SaveProducts() {
      try {
        const { data } = await api.post("/products", {
          ...this.dataProducts,
          estoque: this.estoque,
        });
        console.log(data);
        return this.$toast.open({
          message: "Produto Salvo com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error.response);
        return this.$toast.open({
          message: "Não foi possível salvar os dados",
          type: "warning",
        });
      }
    },
  },
  watch: {
    readOrEditProducts() {
      console.log(this.readOrEditProducts);

      this.dataProducts = this.readOrEditProducts;
    },
  },
};
</script>
<style scoped>
</style>