<template>
  <b-collapse
    visible
    id="accordion-dadosCadastrais"
    accordion="my-accordion"
    role="tabpanel"
    class="mt-2"
  >
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
            ></b-form-input>
          </b-form-group>
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
            ></b-form-input>
          </b-form-group>
        </b-row>

        <b-row class="d-flex justify-content-around">
          <b-form-group
            id="input-group-1"
            label="Código de barras"
            label-for="input-1"
            class="col-sm-4"
          >
            <b-form-input
              id="input-1"
              placeholder="Código de barras"
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
              required
            ></b-form-input>
          </b-form-group>
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
            ></b-form-input>
          </b-form-group>
        </b-row>

        <b-row class="d-flex justify-content-around">
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
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="Descrição"
            label-for="input-1"
            class="col-sm-8"
          >
            <b-form-textarea
              id="textarea"
              rows="3"
              max-rows="6"
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
  </b-collapse>
</template>

<script>
// import api from "../../services/axios";

export default {
  props: {
    readOrEditCustomers: {
      type: Object,
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
</style>