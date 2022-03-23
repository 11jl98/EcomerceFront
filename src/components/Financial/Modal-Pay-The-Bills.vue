<template>
  <div>
    <b-modal
      id="modalMakePayment"
      size="lg"
      title="Baixar contas"
      ok-title="Baixar"
      ok-variant="warning"
      cancel-title="Cancelar"
      text-variant="warning"
      ><div>
        <b-row class="d-flex">
          <b-form-input
            hidden
            class="col-sm-1"
            v-model="billReductionData.id"
          ></b-form-input>

          <b-form-group
            id="input-group-1"
            label="Lançar Valor"
            label-for="input-1"
            class="col-sm-12 col-md-6 col-lg-4 col-xl-3"
            size="sm"
          >
            <b-form-input
              type="number"
              size="sm"
              v-model="launchValue"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Vl. Já Pago"
            label-for="input-1"
            class="col-sm-12 col-md-6 col-lg-5 col-xl-3"
            size="sm"
          >
            <b-form-input
              type="number"
              size="sm"
              disabled
              v-model="billReductionData.valorPago"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Vl. Total"
            label-for="input-1"
            class="col-sm-12 col-md-6 col-lg-6 col-xl-3"
            size="sm"
          >
            <b-form-input
              disabled
              size="sm"
              v-model="billReductionData.valorTotal"
              type="number"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="VL. Restante"
            label-for="input-1"
            class="col-sm-12 col-md-6 col-lg-6 col-xl-3"
          >
            <b-form-input
              disabled
              size="sm"
              v-model="billReductionData.valorRestante"
              type="number"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Data vencimento"
            label-for="input-1"
            class="col-sm-6"
          >
            <b-form-input
              type="date"
              disabled
              size="sm"
              v-model="billReductionData.data"
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
              size="sm"
              v-model="billReductionData.dataPagamento"
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
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Registros"
            label-for="input-1"
            class="col-sm-12"
          >
            <b-form-textarea
              id="textarea"
              rows="5"
              max-rows="6"
              disabled
            ></b-form-textarea>
          </b-form-group>
        </b-row>
      </div>
      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancelar
        </b-button>
        <b-button
          size="sm"
          variant="warning"
          style="color: white"
          @click="payTheBills"
        >
          Realizar Baixa
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import api from "../../services/axios";
import moment from "moment";
// import BillService from "../../services/Bill/billService";
export default {
  props: {
    idBillPay: {
      type: String,
    },
  },
  data() {
    return {
      billReductionData: {
        id: "",
        tipo: "saida",
        idFornecedor: "",
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
      payment: {
        id: "",
        price: "",
        description: "",
        datePayment: "",
      },
      launchValue: "0.00",
    };
  },
  methods: {
    async getBillForPay(idBill) {
      const { data } = await api.get(`/bills/${idBill}`);
      Object.assign(this.billReductionData, data);
      this.calculateRemainingValue();
      this.formatDate();
      return data;
    },

    async payTheBills() {
      try {
        this.assigningValuesToAnotherVariable();

        const { data } = await api.post("/bills/payment", this.payment);

        this.billReductionData.valorRestante =
          parseFloat(this.billReductionData.valorRestante) -
          parseFloat(this.launchValue);

        this.billReductionData.valorPago =
          parseFloat(this.billReductionData.valorPago) +
          parseFloat(this.launchValue);

        this.launchValue = "0.00";

        this.$emit("changeSearchTotalAmount");
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    assigningValuesToAnotherVariable() {
      this.payment.id = this.billReductionData.id;
      this.payment.price = this.launchValue;
      this.payment.datePayment = moment(new Date()).format("YYYY-MM-DD HH:mm");
      this.payment.description = this.billReductionData.descricao;
    },

    formatDate() {
      this.billReductionData.data = moment(this.billReductionData.data).format(
        "YYYY-MM-DD"
      );
      if (
        this.billReductionData.dataPagamento === "Invalid date" ||
        this.billReductionData.dataPagamento === null
      ) {
        this.billReductionData.dataPagamento = "";
      } else {
        this.billReductionData.dataPagamento = moment(
          this.billReductionData.dataPagamento
        ).format("YYYY-MM-DD");
      }
    },

    calculateRemainingValue() {
      const changedValue =
        this.billReductionData.valorTotal - this.billReductionData.valorPago;

      this.billReductionData.valorRestante = changedValue;
    },
  },
  watch: {
    idBillPay() {
      this.getBillForPay(this.idBillPay);
    },
  },
};
</script>

<style>
.iconFormaPagamento {
  display: flex;
  justify-content: space-between;
}
</style>