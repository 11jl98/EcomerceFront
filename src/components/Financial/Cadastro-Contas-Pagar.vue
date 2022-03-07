<template>
  <b-navbar toggleable class="cardDadosContasPagar">
    <b-navbar-toggle
      target="navbar-toggle-collapsePagar"
      id="dadosContasPagarStyle"
      class="tamanhoCardsContasPagar"
    >
      <template #default="{ expanded }">
        <div class="tamanhoBotaoOpenCardContasPagar">
          <div>
            <b-icon v-if="expanded" icon="dash-square-fill"></b-icon>
            <b-icon v-else icon="plus-square-fill"></b-icon>
          </div>
          <div style="margin-left: 10px">CONTAS A PAGAR</div>
        </div>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapsePagar" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-card
          class="
            mt-2
            col-md-12 col-sm-12 col-lg-12 col-xl-12
            cardDadosContasPagarBorda
          "
        >
          <div class="mt-4">
            <b-row class="d-flex">
              <b-form-input hidden class="col-sm-1"></b-form-input>

              <b-form-group
                id="input-group-1"
                label="Tipo"
                label-for="input-1"
                class="col-sm-12 col-md-6 col-lg-5 col-xl-3"
                size="sm"
              >
                <b-form-input
                  disabled
                  v-model="dataBillPayable.tipo"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Fornecedor"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-7 col-xl-7"
                size="sm"
                v-model="dataBillPayable.idFornecedor"
              >
                <b-form-select></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Funcionario"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-12 col-xl-6"
                size="sm"
                v-model="dataBillPayable.idFuncionario"
              >
                <b-form-select></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-7 col-xl-6"
                size="sm"
              >
                <div class="iconFormaPagamentoPagar">
                  <div>
                    <label for="input-1">Forma de pagamento</label>
                  </div>

                  <div
                    class="btnFormaPagamentoPagar mr-1"
                    @click="openModalFormaPagamento"
                  >
                    <b-icon-plus-square-fill
                      scale="1.5"
                      size="sm"
                    ></b-icon-plus-square-fill>
                  </div>
                </div>

                <b-form-select
                  value-field="id"
                  text-field="tipo"
                  v-model="dataBillPayable.idFormaPagamento"
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
                  v-model="dataBillPayable.valorPago"
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
                  v-model="dataBillPayable.valorTotal"
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
                  v-model="dataBillPayable.valorRestante"
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
                  v-model="dataBillPayable.data"
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
                  disabled
                  v-model="dataBillPayable.dataPagamento"
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
                  v-model="dataBillPayable.descricao"
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
                    >Salvar
                    <b-icon-person-check class="ml-1"></b-icon-person-check
                  ></b-button>

                  <b-button
                    class="mr-4"
                    size="sm"
                    style="border: none !important"
                    >Limpar
                    <b-icon-person-check class="ml-1"></b-icon-person-check
                  ></b-button>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import api from "../../services/axios";
export default {
  data() {
    return {
      dataBillPayable: {
        id: "",
        tipo: "saida",
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
      listProviderSelectBox: [],
      listEmployeeSelectBox: [],
    };
  },
  methods: {
    async saveBill() {
      try {
        const { data } = await api.post("/bills", this.dataBillPayable);
        this.dataBillPayable.id = data.id;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProviderForSelectBox() {
      try {
        const { data } = await api.get("/providers/combobox");
        this.listProviderSelectBox = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    openModalFormaPagamento() {
      this.$bvModal.show("modalFormaPagamento");
    },
  },
};
</script>

<style scoped>
#dadosContasPagarStyle {
  border: none !important;
}

.tamanhoCardsContasPagar {
  width: 100% !important;
  display: flex;
  background-color: #ff1414 !important;
  box-shadow: 2px 2px 4px 0px black !important ;
}

.tamanhoBotaoOpenCardContasPagar {
  color: white;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
}

.cardDadosContasPagarBorda {
  margin-top: 25px !important;
  margin-bottom: 20px;
  background-color: #ff1414 !important;
  color: white;
  border: none !important;
}

.cardDadosContasPagar {
  width: 100% !important;
  background-color: #ffffff !important;
  box-shadow: 2px 2px 4px 0px rgb(17, 1, 1) !important ;
  border-radius: 5px;
}

.iconFormaPagamentoPagar {
  display: flex;
  justify-content: space-between;
}

.btnFormaPagamentoPagar {
  cursor: pointer;
}
</style>