<template>
  <div>
    <div>
      <b-card no-body>
        <h2>Pedido de venda</h2>
        <hr />
        <b-row class="d-flex justify-content-between">
          <div class="col-sm-6">
            <b-form-group
              id="input-group-1"
              label="Data da venda"
              label-for="input-1"
              class="col-sm-5"
              size="sm"
            >
              <b-form-input
                value-field="id"
                text-field="nome"
                disabled
                :options="dataCustomers"
                type="date"
                v-model="dataSale.dataVenda"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="col-sm-3 d-flex">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-radio
                :aria-describedby="ariaDescribedby"
                value="Venda"
                name="checado"
                v-model="dataSale.status"
                class="mr-5 mt-3"
                >Vendas</b-form-radio
              >
            </b-form-group>

            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-radio
                :aria-describedby="ariaDescribedby"
                name="checado"
                value="Orçamento"
                class="mt-3 testeDois"
                v-model="dataSale.status"
                >Orçamento</b-form-radio
              >
            </b-form-group>
          </div>
        </b-row>
        <b-tabs card>
          <b-tab title="Clientes">
            <b-card-text
              ><div class="mt-4">
                <b-row class="d-flex justify-content-between">
                  <b-form-input hidden class="col-sm-1"></b-form-input>
                  <b-form-group
                    id="input-group-1"
                    label="Nome Cliente"
                    label-for="input-1"
                    class="col-sm-4"
                    size="sm"
                  >
                    <b-form-select
                      value-field="id"
                      text-field="nome"
                      :options="dataCustomers"
                      v-model="dataSale.idCliente"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group
                    id="input-group-1"
                    label="Funcionario"
                    label-for="input-1"
                    class="col-sm-4"
                    size="sm"
                  >
                    <b-form-select
                      :options="dataEmployee"
                      value-field="id"
                      text-field="nomeFuncionario"
                      v-model="dataSale.idFuncionario"
                      @change="readComissao(dataEmployee[0])"
                    >
                    </b-form-select>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Comissão ( % )"
                    label-for="input-1"
                    class="col-sm-3"
                    size="sm"
                  >
                    <b-form-input
                      v-model="comissao"
                      placeholder="Comissão"
                    ></b-form-input>
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
                      v-model="dataSale.dadosAdicionais"
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
                        @click="saveOrUpdateSale"
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
import api from "../../services/axios";
import moment from "moment";
export default {
  data() {
    return {
      dataCustomers: [],
      dataEmployee: [],
      dataSale: {
        id: "",
        idCliente: "",
        idFuncionario: "",
        dataVenda: moment().format("YYYY-MM-DD"),
        dadosAdicionais: "",
        status: "",
      },
      comissao: "",
    };
  },
  methods: {
    async saveOrUpdateSale() {
      if (this.dataSale.id !== "") return this.UpdateSale();
      this.saveSale();
    },

    async saveSale() {
      try {
        const { data } = await api.post(`/sales`, this.dataSale);
        this.dataSale.id = data.id;
        return this.$toast.open({
          message: "Venda salva com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error.response);
      }
    },

    async UpdateSale() {
      try {
        const { data } = await api.put(`/sales/${this.dataSale.id}`);
        this.data.id = data.id;
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async listCustomersSelectBox() {
      try {
        const { data } = await api.get("/customers/combobox");
        this.dataCustomers = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async listEmployeesSelectBox() {
      try {
        const { data } = await api.get("/employees/combobox/fill");
        this.dataEmployee = data.data;
      } catch (error) {
        console.log(error.response);
      }
    },

    readComissao(dataEmployee) {
      this.comissao = dataEmployee.comissao;
    },
  },
  mounted() {
    this.listCustomersSelectBox();
    this.listEmployeesSelectBox();
  },
};
</script>

<style>
</style>
