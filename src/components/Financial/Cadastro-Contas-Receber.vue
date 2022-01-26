<template>
  <b-navbar toggleable class="cardDadosContasReceber">
    <b-navbar-toggle
      target="navbar-toggle-collapse"
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

    <b-collapse id="navbar-toggle-collapse" is-nav>
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
              <b-form-input hidden class="col-sm-1"></b-form-input>

              <b-form-group
                id="input-group-1"
                label="Tipo"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-5 col-xl-4"
                size="sm"
              >
                <b-form-select
                  v-model="dataBillReceive.tipo"
                  text-field="tipo"
                  value-field="id"
                  :options="descriptionType"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Cliente"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-7 col-xl-7"
                size="sm"
              >
                <b-form-select
                  v-model="selected"
                  :options="options"
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
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Forma de pagamento"
                label-for="input-1"
                class="col-sm-12 col-md-12 col-lg-7 col-xl-6"
                size="sm"
              >
                <b-form-select
                  v-model="dataBillReceive.tipo"
                  text-field="tipo"
                  value-field="id"
                  :options="descriptionType"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Vl. Parcela"
                label-for="input-1"
                class="col-sm-12 col-md-6 col-lg-5 col-xl-4"
                size="sm"
              >
                <b-form-input></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Vl. Total"
                label-for="input-1"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                size="sm"
              >
                <b-form-input></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="VL. Restante"
                label-for="input-1"
                class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                size="sm"
              >
                <b-form-input></b-form-input>
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

                  <b-button class="mr-4" size="sm" variant="secondary">
                    <b-icon-caret-down-fill></b-icon-caret-down-fill
                    >Relatórios</b-button
                  >
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
      dataBillReceive: {
        id: "",
        tipo: "",
        idCliente: "",
        idFuncionario: "",
        idFormaPagamento: "",
        idVenda: "",
        valorTotal: 0,
        valorPago: 0,
        valorRestante: 0,
        data: "",
        dataPagamento: null,
        descricao: "",
      },
      descriptionType: [{ tipo: "entrada", value: "id" }],
    };
  },
  methods: {
    async saveBill() {
      const { data } = await api.post("");
      console.log(data);
    },
  },
};
</script>

<style scoped>
#dadosContasStyle {
  border: none !important;
}

.tamanhoCardsContasReceber {
  width: 100% !important;
  display: flex;
  background-color: #6a88bd !important;
  box-shadow: 2px 2px 4px 0px black !important ;
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
  background-color: #6a88bd !important;
  color: white;
  border: none !important;
}

.cardDadosContasReceber {
  width: 50% !important;
  background-color: #ffffff !important;
  box-shadow: 2px 2px 4px 0px rgb(17, 1, 1) !important ;
  border-radius: 5px;
}
</style>