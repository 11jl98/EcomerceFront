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
            @change="teste"
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
        <b-form-group label="Nome" class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <b-form-input size="sm" v-model="typeText"></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Data Inicio"
          label-for="input-1"
          class="col-sm-4 col-md-3 col-lg-3 col-xl-2"
        >
          <b-form-input
            type="date"
            size="sm"
            v-model="startDate"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Data Fim"
          label-for="input-1"
          class="col-sm-4 col-md-3 col-lg-3 col-xl-2"
        >
          <b-form-input type="date" v-model="endDate" size="sm"></b-form-input>
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
    <div class="col-sm-12" style="margin-top: 31px">
      <table class="table table-responsive col-sm-12">
        <thead style="background-color: #56aafe !important; color: white">
          <tr>
            <th>Nome</th>
            <th>CNPJ/CPF</th>
            <th>Data Vencimento</th>
            <th>Valor Total</th>
            <th>Valor Pago</th>
            <th>Valor Restante</th>
            <th>Descrição</th>
            <th style="text-align: center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bill in dataBill" :key="bill.id">
            <td>
              {{ bill.nome || bill.nomeFantasia }}
            </td>
            <td>{{ bill.cpfCnpj || bill.cnpjFornecedor }}</td>
            <td>{{ bill.data | moment }}</td>
            <td>{{ bill.valorTotal }}</td>
            <td>{{ bill.valorPago }}</td>
            <td>{{ bill.valorTotal - bill.valorPago }}</td>
            <td>{{ bill.descricao }}</td>
            <td style="text-align: center">
              <b-button
                size="sm"
                class="mr-2"
                style="background-color: #56aafe; border: none !important"
                @click="alterTabIndexAndSearchBill(bill.id)"
              >
                <b-icon-pencil-square scale="1.2"></b-icon-pencil-square>
              </b-button>
              <b-button
                size="sm"
                variant="danger"
                style="border: none !important"
              >
                <b-icon-trash scale="1.2"></b-icon-trash
              ></b-button>

              <b-button
                size="sm"
                variant="warning"
                style="border: none !important; color: white"
                class="ml-2"
                @click="openModalPay(bill.id)"
              >
                Baixar</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ModalMakePayment
      @changeSearchTotalAmount="readBills"
      :idBillPay="idBillPay"
    />
  </div>
</template>

<script>
import api from "../../services/axios";
import moment from "moment";
import ModalMakePayment from "./Modal-Pay-The-Bills.vue";
export default {
  components: {
    ModalMakePayment,
  },
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
      startDate: "",
      endDate: "",
      tabIndex: 0,
      dataBillForReceiveAndPayable: [],
      idBillPay: "",
    };
  },
  methods: {
    async readBills() {
      try {
        const { data } = await api.get(
          `/bills?q=${this.typeText}&type=${this.tipo}&startDate=${this.startDate}&endDate=${this.endDate}`
        );
        this.dataBill = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    alterTabIndexAndSearchBill(idBill) {
      this.alterValueTabIndex();
      this.searchBillToUpdate(idBill);
      this.dropdownCardBillReceive();
    },

    async searchBillToUpdate(idBill) {
      try {
        const { data } = await api.get(`/bills/${idBill}`);
        this.dataBillForReceiveAndPayable = data;
        this.$emit(
          "dataBillForReceiveAndPayable",
          this.dataBillForReceiveAndPayable
        );
      } catch (error) {
        console.log(error);
      }
    },

    dropdownCardBillReceive() {
      if (
        document.getElementById("navbar-toggle-collapseReceber").style
          .display === "none" &&
        this.tipo === "entrada"
      ) {
        document.querySelector(".tamanhoCardsContasReceber").click();
      } else if (
        document.getElementById("navbar-toggle-collapsePagar").style.display ===
          "none" &&
        this.tipo === "saida"
      ) {
        document.querySelector(".tamanhoCardsContasPagar").click();
      }
    },

    alterValueTabIndex() {
      try {
        this.$emit("tabIndexFunction", this.tabIndex);
      } catch (error) {
        console.log(error);
      }
    },

    openModalPay(idBill) {
      this.idBillPay = idBill;
      this.$bvModal.show("modalMakePayment");
    },

    teste() {
      console.log("testeeeeeeeeeee");
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format("DD/MM/YYYY");
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
  justify-content: flex-end;
  user-select: none;
}

.chkFinancialReceber {
  margin-left: 15px;
}

#container-geral-seach-financial {
  user-select: none;
}
</style>
