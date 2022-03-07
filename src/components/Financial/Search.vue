<template>
  <div id="container-geral-seach-financial">
    <div
      id="container-components-financial"
      class="col-md-12 col-sm-12 col-lg-12 col-xl-12"
    >
      <div class="containerCheckBoxFinancial">
        <div class="rdFinancialPagarReceber d-flex">
          <b-form-radio
            name="some-radios"
            class="mr-3"
            size="sm"
            v-model="tipo"
            value="entrada"
            >Receber</b-form-radio
          >
          <b-form-radio
            name="some-radios"
            size="sm"
            value="saida"
            v-model="tipo"
            >Pagar</b-form-radio
          >
        </div>
      </div>
      <b-row class="d-flex">
        <b-form-group label="Tipo" class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <b-form-input size="sm" v-model="typeText"></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Data Inicio"
          label-for="input-1"
          class="col-sm-4 col-md-3 col-lg-3 col-xl-2"
        >
          <b-form-input type="date" size="sm"></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Data Fim"
          label-for="input-1"
          class="col-sm-4 col-md-3 col-lg-3 col-xl-2"
        >
          <b-form-input type="date" size="sm"></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="."
          label-for="input-1"
          class="col-sm-4 col-md-3 col-lg-3 col-xl-2 btnPesquisar"
        >
          <b-button
            size="sm"
            style="border: none; background-color: #56aafe !important"
            @click="readBills"
            >Pesquisar <b-icon-search class="ml-1"></b-icon-search
          ></b-button>
        </b-form-group>
      </b-row>
    </div>
    <div>
      <b-card class="shadow">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CNPJ/CPF</th>
              <th>Tipo</th>
              <th>Valor Total</th>
              <th>Valor Pago</th>
              <th>Valor Restante</th>
              <th>Descrição</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bill in dataBill" :key="bill.id">
              <td>
                {{ bill.nome || bill.nomeFantasia }}
              </td>
              <td>{{ bill.cpfCnpj || bill.cnpjFornecedor }}</td>
              <td>
                <b-button
                  size="sm"
                  class="mr-2"
                  style="background-color: #56aafe; border: none !important"
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
                  style="border: none !important"
                  v-b-popover.hover.right="{
                    variant: 'secondary',
                    content: 'Excluir',
                  }"
                >
                  <b-icon-trash scale="0.7"></b-icon-trash
                ></b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
  </div>
</template>

<script>
import api from "../../services/axios";
export default {
  data() {
    return {
      tipo: "entrada",
      tipoFiltro: [
        { value: "nome", text: "Nome" },
        { value: "IDFORMAPAGAMENTO", text: "Forma Pagamento" },
      ],
      dataBill: [],
      filtro: "",
      typeText: "",
    };
  },
  methods: {
    async readBills() {
      try {
        const { data } = await api.get(
          `/bills?q=${this.typeText}&type=${this.tipo}`
        );
        this.dataBill = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.btnPesquisar {
  color: white;
  user-select: none;
}
.containerCheckBoxFinancial {
  width: 100%;
  display: flex;
  justify-content: end;
  user-select: none;
}
.chkFinancialReceber {
  margin-left: 15px;
}

#container-geral-seach-financial {
  user-select: none;
}
</style>