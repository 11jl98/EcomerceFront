<template>
  <div>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Clientes">
            <b-card-text
              ><div class="mt-4">
                <b-row class="d-flex">
                  <b-form-input hidden class="col-sm-1"></b-form-input>
                  <b-form-group
                    id="input-group-1"
                    label="Nome Cliente"
                    label-for="input-1"
                    class="col-sm-5"
                    size="sm"
                  >
                    <b-form-select
                      v-model="selected"
                      :options="dataCustomers"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Funcionario"
                    label-for="input-1"
                    class="col-sm-5"
                    size="sm"
                  >
                    <b-form-select
                      v-model="selected"
                      :options="dataEmployee"
                    ></b-form-select>
                  </b-form-group>
                </b-row>

                <b-row class="d-flex justify-content-around">
                  <b-form-group
                    id="input-group-1"
                    label="Descrição"
                    label-for="input-1"
                    class="col-sm-12"
                  >
                    <b-form-textarea
                      id="textarea"
                      rows="5"
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
                        @click="saveOrUpdateProducts"
                        >Salvar
                        <b-icon-person-check class="ml-1"></b-icon-person-check
                      ></b-button>
                      <b-button variant="light"
                        >Limpar
                        <b-icon-arrow-clockwise
                          class="ml-1"
                        ></b-icon-arrow-clockwise
                      ></b-button>
                    </div>
                  </div>
                </div></div
            ></b-card-text>
          </b-tab>
          <b-tab title="Produtos">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
          <b-tab title="Financeiro">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataCustomers: [
        {
          value: "cliente",
          text: "CLIENTE TESTE",
        },
      ],
      dataEmployee: [
        {
          value: "funcionario",
          text: "FUNCIONARIO TESTE",
        },
      ],
    };
  },
};
</script>

<style></style>
