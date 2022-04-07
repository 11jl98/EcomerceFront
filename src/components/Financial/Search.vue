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
        <b-form-group
          label="Pesquisa"
          class="col-sm-6 col-md-4 col-lg-4 col-xl-4"
        >
          <b-form-input size="sm" v-model="textPesquisa"></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Data Inicio"
          label-for="input-1"
          class="col-sm-4 col-md-4 col-lg-4 col-xl-4"
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
          class="col-sm-4 col-md-4 col-lg-4 col-xl-4"
        >
          <b-form-input type="date" v-model="endDate" size="sm"></b-form-input>
        </b-form-group>

        <div style="margin: 16px" class="searchFinancial">
          <b-button
            size="sm"
            style="border: none; background-color: #56aafe !important"
            @click="readBills(page)"
            >Pesquisar <b-icon-search class="ml-1"></b-icon-search
          ></b-button>
        </div>
      </b-row>
    </div>
    <div class="tableSearchFinancial">
      <table class="table table-sm col-sm-12">
        <thead>
          <tr style="background-color: #56aafe; color: white">
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
            <td class="tdSearchFinancial">
              {{ bill.nome || bill.nomeFantasia }}
            </td>
            <td class="tdSearchFinancial">
              {{ bill.cpfCnpj || bill.cnpjFornecedor }}
            </td>
            <td class="tdSearchFinancial">{{ bill.data | moment }}</td>
            <td class="tdSearchFinancial">{{ bill.valorTotal }}</td>
            <td class="tdSearchFinancial">{{ bill.valorPago }}</td>
            <td class="tdSearchFinancial">
              {{ bill.valorTotal - bill.valorPago }}
            </td>
            <td class="tdSearchFinancial">{{ bill.descricao }}</td>
            <td style="text-align: center" class="tdIconsSearch">
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
                <b-icon-trash scale="1.3"></b-icon-trash
              ></b-button>

              <b-button
                size="sm"
                style="
                  border: none !important;
                  color: white;
                  background-color: #2bc94f;
                "
                class="ml-2"
                @click="openModalPay(bill.id)"
              >
                <b-icon-stickies scale="1.2"></b-icon-stickies
              ></b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ModalMakePayment
      @changeSearchTotalAmount="readBills"
      :idBillPay="idBillPay"
    />
    <hr />
    <b-button
      size="sm"
      class="buttonPagePrevious"
      @click="previousPage"
      :disabled="this.page === 1 ? true : false"
    >
      <b-icon-arrow-left-square-fill
        class="ml-2"
        scale="1.5"
        style="cursor: pointer"
        variant="info"
      ></b-icon-arrow-left-square-fill
    ></b-button>

    <b-button
      size="sm"
      class="buttonPageNext"
      @click="nextPage"
      :disabled="this.dataLength === 0 ? true : false"
    >
      <b-icon-arrow-right-square-fill
        scale="1.5"
        variant="info"
        style="cursor: pointer"
      ></b-icon-arrow-right-square-fill>
    </b-button>
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
      textPesquisa: "",
      startDate: "",
      endDate: "",
      tabIndex: 0,
      dataBillForReceiveAndPayable: [],
      idBillPay: "",
      page: 1,
      dataLength: 0,
    };
  },
  methods: {
    async readBills(page) {
      try {
        if (this.textPesquisa !== "") {
          const { data } = await api.get(
            `/bills?q=${this.textPesquisa}&type=${this.tipo}&page=${page}&startDate=${this.startDate}&endDate=${this.endDate}`
          );
          this.dataLength = data.data.length;
          this.dataBill = data.data;
        }
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

    nextPage() {
      this.readBills((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.readBills((this.page -= 1));
      }
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped>
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

.tableSearchFinancial {
  margin-top: 31px;
  overflow-x: auto !important;
}

.searchFinancial {
  width: 100% !important;
  display: flex;
  justify-content: flex-end !important;
}

.tdIconsSearch {
  padding-right: 0 !important;
  padding-left: 0 !important;
  width: 15% !important;
}

.tdSearchFinancial {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px;
}

.buttonPagePrevious {
  background-color: transparent !important;
  border: none !important;
  padding-left: 0px !important;
}

.buttonPageNext {
  background-color: transparent !important;
  border: none !important;
}
</style>
