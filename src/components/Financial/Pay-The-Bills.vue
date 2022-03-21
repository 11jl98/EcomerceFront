<template>
  <div>
    <b-modal
      id="modalMakePayment"
      size="lg"
      @ok="getBillForPay"
      title="Baixar contas"
      ><div>
        <b-row class="d-flex">
          <b-form-input hidden class="col-sm-1"></b-form-input>

          <b-form-group
            id="input-group-1"
            label="Vl. Pago"
            label-for="input-1"
            class="col-sm-12 col-md-6 col-lg-5 col-xl-4"
            size="sm"
          >
            <b-form-input type="number" size="sm"></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Vl. Total"
            label-for="input-1"
            class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
            size="sm"
          >
            <b-form-input disabled size="sm"></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="VL. Restante"
            label-for="input-1"
            class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <b-form-input disabled size="sm"></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Data vencimento"
            label-for="input-1"
            class="col-sm-6"
          >
            <b-form-input type="date" disabled size="sm"></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Data Pagamento"
            label-for="input-1"
            class="col-sm-6"
            size="sm"
          >
            <b-form-input type="date" disabled size="sm"></b-form-input>
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
        </b-row></div
    ></b-modal>
  </div>
</template>

<script>
import api from "../../services/axios"
export default {
  props: {
    idBillPay: {
      type: String,
    },
  },
  data() {
    return {
      dataBillPayable: {
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
    }
  },
  methods: {
    async getBillForPay(idBill) {
      const { data } = await api.get(`/bills/${idBill}`)
      console.log(data, "Funcionando")
      return data
    },
  },
  watch: {
    idBillPay() {
      this.getBillForPay(this.idBillPay)
    },
  },
}
</script>

<style>
.iconFormaPagamento {
  display: flex;
  justify-content: space-between;
}
</style>