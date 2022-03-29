<template>
  <b-navbar toggleable class="cardDadosContasReceber">
    <b-navbar-toggle
      target="navbar-toggle-collapseReceber"
      id="dadosContasStyle"
      class="tamanhoCardsContasReceber"
    >
      <template #default="{ expanded }">
        <div class="tamanhoBotaoOpenCardContas">
          <div>
            <b-icon v-if="expanded" icon="dash-square-fill"></b-icon>
            <b-icon v-else icon="plus-square-fill"></b-icon>
          </div>
          <div style="margin-left: 10px">CONTAS A RECEBER</div>
        </div>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapseReceber" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-card
          class="
            mt-2
            col-md-12 col-sm-12 col-lg-12 col-xl-12
            cardDadosContasBorda
          "
        >
          <div class="mt-4">
            <b-row class="d-flex">
              <b-form-input
                hidden
                class="col-sm-1"
                v-model="dataBillReceive.id"
              ></b-form-input>

              <b-form-group
                id="input-group-1"
                label="Tipo"
                label-for="input-1"
                class="col-sm-12 col-md-6 col-lg-5 col-xl-3"
                size="sm"
              >
                <b-form-input
                  disabled
                  v-model="dataBillReceive.tipo"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Cliente"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-7 col-xl-7"
                size="sm"
              >
                <b-form-select
                  :options="listCustomersSelectBox"
                  text-field="nome"
                  value-field="id"
                  v-model="dataBillReceive.idCliente"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Funcionario"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-12 col-xl-6"
                size="sm"
              >
                <b-form-select
                  :options="listEmployeeSelectBox"
                  text-field="nomeFuncionario"
                  value-field="id"
                  v-model="dataBillReceive.idFuncionario"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-7 col-xl-6"
                size="sm"
              >
                <div class="iconFormaPagamentoReceber">
                  <div>
                    <label for="input-1">Forma de pagamento</label>
                  </div>

                  <div
                    class="btnFormaPagamentoReceber mr-1"
                    @click="openModalFormaPagamento"
                  >
                    <b-icon-plus-square-fill
                      scale="1.5"
                      size="sm"
                    ></b-icon-plus-square-fill>
                  </div>
                </div>

                <b-form-select
                  :options="listTypesPaymentsSelectBox"
                  value-field="id"
                  text-field="tipo"
                  v-model="dataBillReceive.idFormaPagamento"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Vl. Pago"
                label-for="input-1"
                class="col-sm-12 col-md-6 col-lg-5 col-xl-4"
                size="sm"
              >
                <b-form-input
                  v-model="dataBillReceive.valorPago"
                  type="number"
                  @keyup="changeValueUsingKeyUpEvent"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Vl. Total"
                label-for="input-1"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                size="sm"
              >
                <b-form-input
                  v-model="dataBillReceive.valorTotal"
                  type="number"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="VL. Restante"
                label-for="input-1"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                size="sm"
              >
                <b-form-input
                  v-model="dataBillReceive.valorRestante"
                  type="number"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Data vencimento"
                label-for="input-1"
                class="col-sm-6"
                size="sm"
              >
                <b-form-input
                  type="date"
                  v-model="dataBillReceive.data"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Data Pagamento"
                label-for="input-1"
                class="col-sm-6"
                size="sm"
              >
                <b-form-input
                  type="date"
                  v-model="dataBillReceive.dataPagamento"
                  disabled
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
                  rows="5"
                  max-rows="6"
                  v-model="dataBillReceive.descricao"
                ></b-form-textarea>
              </b-form-group>
            </b-row>

            <div class="mt-5">
              <div class="d-flex justify-content-end">
                <div>
                  <b-button
                    class="mr-4"
                    size="sm"
                    style="border: none; background-color: #56aafe !important"
                    @click="saveAndUpdateBill"
                    >Salvar
                    <b-icon-person-check class="ml-1"></b-icon-person-check
                  ></b-button>

                  <b-button
                    class="mr-4"
                    size="sm"
                    style="border: none"
                    @click="clearDataBillReceive"
                    variant="light"
                    >Novo
                    <b-icon-person-check class="ml-1"></b-icon-person-check
                  ></b-button>
                </div>
              </div>
            </div>
            <FormaPagamento />
          </div>
        </b-card>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import api from "../../services/axios";
import FormaPagamento from "../Sale/Modal-Forma-Pagamento.vue";
import moment from "moment";
import toastAlertErros from "../../utils/toastAlertErros";
export default {
  components: {
    FormaPagamento,
  },
  props: {
    searchAccountsReceive: {
      type: Object,
    },
  },
  data() {
    return {
      dataBillReceive: {
        id: "",
        tipo: "entrada",
        idCliente: "",
        idFuncionario: "",
        idFormaPagamento: "",
        idVenda: "",
        valorTotal: "0.00",
        valorPago: "0.00",
        valorRestante: "0.00",
        data: "",
        dataPagamento: null,
        descricao: "",
      },
      listTypesPaymentsSelectBox: [],
      listCustomersSelectBox: [],
      listEmployeeSelectBox: [],
    };
  },
  methods: {
    openModalFormaPagamento() {
      this.$bvModal.show("modalFormaPagamento");
    },

    Bill() {
      this.dataBillReceive = {
        id: "",
        tipo: "",
        idCliente: "",
        idFuncionario: "",
        idFormaPagamento: "",
        idVenda: "",
        valorTotal: "0.00",
        valorPago: "0.00",
        valorRestante: "0.00",
        data: "",
        dataPagamento: null,
        descricao: "",
      };
    },

    clearDataBillReceive() {
      this.dataBillReceive.id = "";
      this.dataBillReceive.tipo = "entrada";
      this.dataBillReceive.idCliente = "";
      this.dataBillReceive.idFuncionario = "";
      this.dataBillReceive.idFormaPagamento = "";
      this.dataBillReceive.idVenda = "";
      this.dataBillReceive.valorTotal = "0.00";
      this.dataBillReceive.valorPago = "0.00";
      this.dataBillReceive.valorRestante = "0.00";
      this.dataBillReceive.data = "";
      this.dataBillReceive.descricao = "";
    },

    saveAndUpdateBill() {
      this.dataBillReceive.id !== "" ? this.updateBill() : this.saveBill();
    },

    async saveBill() {
      try {
        const { data } = await api.post("/bills", this.dataBillReceive);
        this.dataBillReceive.id = data.id;
        return this.$toast.open({
          message: "Conta resgistrada!",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateErro(error, this.$toast);
      }
    },

    async updateBill() {
      try {
        const { data } = await api.put(
          `/bills/${this.dataBillReceive.id}`,
          this.dataBillReceive
        );
        console.log(data, "Dados atualizados com sucesso");
      } catch (error) {
        console.log(error.response);
      }
    },

    async getCustomersForSelectBox() {
      try {
        const { data } = await api.get("/customers/combobox");
        this.listCustomersSelectBox = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getEmployeesForSelectBox() {
      const { data } = await api.get("/employees/combobox/fill");
      this.listEmployeeSelectBox = data.data;
    },

    async getTypesPaymentsSelectBox() {
      try {
        const { data } = await api.get("/payments/combobox");
        this.listTypesPaymentsSelectBox = data;
      } catch (error) {
        console.log(error);
      }
    },

    formatDate() {
      this.searchAccountsReceive.data = moment(
        this.searchAccountsReceive.data
      ).format("YYYY-MM-DD");

      if (this.searchAccountsReceive.dataPagamento !== null)
        this.searchAccountsReceive.dataPagamento = moment(
          this.searchAccountsReceive.dataPagamento
        ).format("YYYY-MM-DD");
      else return;
    },

    changeValueUsingKeyUpEvent() {
      const changedValue =
        this.dataBillReceive.valorTotal - this.dataBillReceive.valorPago;

      this.dataBillReceive.valorRestante = changedValue;
    },
  },

  mounted() {
    this.getCustomersForSelectBox();
    this.getTypesPaymentsSelectBox();
    this.getEmployeesForSelectBox();
  },
  watch: {
    searchAccountsReceive() {
      if (this.searchAccountsReceive.tipo === "entrada") {
        this.formatDate();
        Object.assign(this.dataBillReceive, this.searchAccountsReceive);
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
#dadosContasStyle {
  border: none !important;
}

.iconFormaPagamentoReceber {
  display: flex;
  justify-content: space-between;
}

.btnFormaPagamentoReceber {
  cursor: pointer;
}

.tamanhoCardsContasReceber {
  width: 100% !important;
  display: flex;
  background-color: rgba(0, 179, 0, 0.76) !important;
}

.tamanhoBotaoOpenCardContas {
  color: white;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
}

.cardDadosContasBorda {
  margin-top: 25px !important;
  margin-bottom: 20px;
  background-color: rgba(0, 179, 0, 0.76) !important;
  color: white;
  border: none !important;
}

.cardDadosContasReceber {
  width: 100% !important;
  background-color: #ffffff !important;
  border-radius: 5px;
}
</style>
