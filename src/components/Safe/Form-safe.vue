<template>
  <div>
    <b-form class="row">
      <b-form-input hidden class="col-sm-1"></b-form-input>
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        class="col-sm-12 col-md-12 col-lg-7 col-xl-3"
        size="sm"
      >
        <div class="iconFormaPagamento">
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
              variant="info"
            ></b-icon-plus-square-fill>
          </div>
        </div>

        <b-form-select
          v-model="form.idFormaPagamento"
          :options="payments"
          size="sm"
        ></b-form-select>
      </b-form-group>

      <b-form-group class="col-sm-3" id="tipo" label="Tipo:">
        <b-form-select size="sm" v-model="form.tipo" :options="tipos" />
      </b-form-group>

      <b-form-group class="col-sm-3" id="" label="Valor:">
        <b-form-input size="sm" v-model="form.valor" />
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Data da movimentação"
        label-for="input-1"
        class="col-sm-4 col-md-3 col-lg-3 col-xl-3"
      >
        <b-form-input type="date" size="sm" v-model="form.data"></b-form-input>
      </b-form-group>

      <b-form-group class="col-sm-12" id="" label="Descrição:">
        <b-form-textarea
          rows="6"
          size="sm"
          v-model="form.descricao"
        ></b-form-textarea>
      </b-form-group>
    </b-form>
    <b-button type="submit" size="sm" variant="primary" @click="handle()"
      >Salvar</b-button
    >
    <ModalFormaPagamento />
  </div>
</template>

<script>
import api from "../../services/axios";
import ModalFormaPagamento from "../../components/Sale/Modal-Forma-Pagamento.vue";
import toastAlertErros from "../../utils/toastAlertErros";
export default {
  components: {
    ModalFormaPagamento,
  },
  data() {
    return {
      form: {
        id: null,
        idFormaPagamento: "",
        tipo: "",
        valor: "",
        data: "",
        descricao: "",
      },
      payments: [],
      tipos: [
        { text: "Entrada", value: "entrada" },
        { text: "Saída", value: "saida" },
      ],
    };
  },
  created() {
    this.searchPayment();
  },
  methods: {
    async searchPayment() {
      const response = await api.get("/payments/combobox");
      this.payments = response.data.map((item) => {
        return { text: item.tipo, value: item.id };
      });
    },
    async save() {
      try {
        const response = await api.post("/safe", this.form);
        this.form.id = response.data.id;
      } catch (error) {
        return toastAlertErros.validateBillErro(error, this.$toast);
      }
    },

    async updated() {
      await api.put(`/safe/${this.form.id}`, this.form);
    },

    async handle() {
      if (!this.form.id) {
        await this.save();
      } else {
        await this.updated();
      }
    },

    openModalFormaPagamento() {
      this.$bvModal.show("modalFormaPagamento");
    },
  },
};
</script>

<style scoped>
.iconFormaPagamento {
  display: flex;
  justify-content: space-between;
}
.btnFormaPagamento {
  cursor: pointer;
}
</style>