<template>
  <div>
    <b-modal
      id="modalFormaPagamento"
      size="md"
      title="Cadastro forma de pagamento"
      ok-title="Salvar"
      centered
    >
      <template #modal-footer>
        <b-button variant="info" size="sm" @click="savePayment"
          >Salvar</b-button
        >
      </template>
      <b-tabs v-model="tabIndexSetetetete" content-class="mt-3">
        <b-tab title="Cadastro Tipo" active>
          <b-row class="d-flex justify-content-between">
            <b-form-input
              hidden
              class="col-sm-1"
              v-model="dataPayment.id"
            ></b-form-input>

            <b-form-group
              id="input-group-1"
              label="Tipo:"
              label-for="input-1"
              class="col-sm-12"
              size="sm"
            >
              <b-form-input
                v-model="dataPayment.tipo"
                placeholder="Ex: Cartão de crédito"
              ></b-form-input>
            </b-form-group> </b-row
        ></b-tab>
        <b-tab title="Pesquisar">
          <table class="table table-sm">
            <thead>
              <tr style="width: 100%">
                <th style="width: 50%">Tipo</th>
                <th style="width: 50%">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="typePayment in dataAllType" :key="typePayment.id">
                <td>{{ typePayment.tipo }}</td>
                <td>
                  <b-button
                    size="sm"
                    class="mr-2"
                    style="background-color: #56aafe; border: none !important"
                    v-b-popover.hover.left="{
                      variant: 'info',
                      content: 'Editar',
                    }"
                    @click="getPaymentFindById(typePayment.id)"
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
                    <b-icon-trash scale="1.3"></b-icon-trash
                  ></b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-tab>
      </b-tabs>
    </b-modal>
  </div>
</template>

<script>
import api from "../../services/axios";
export default {
  data() {
    return {
      dataPayment: {
        id: "",
        tipo: "",
      },
      dataAllType: [],
      tabIndexSetetetete: 0,
    };
  },
  methods: {
    async savePayment() {
      try {
        const { data } = await api.post("/payments", this.dataPayment);
        this.dataPayment.id = data.id;
        return this.$toast.open({
          message: "Salvo com sucesso!",
          type: "success",
        });
      } catch (error) {
        console.log(error.response);
      }
    },

    async getPaymentFindById(idTipoPagamento) {
      const { data } = await api.get(`/payments/${idTipoPagamento}`);
      console.log(idTipoPagamento);
      return data;
    },

    async getAllPayment() {
      const { data } = await api.get(`/payments/combobox`);
      this.dataAllType = data;
      return data;
    },
  },
  mounted() {
    this.getAllPayment();
  },
};
</script>

<style>
</style>