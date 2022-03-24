<template>
  <div>
    <b-form class="row">
      <b-form-group
        class="col-sm-3"
        id="idFormaPagamento"
        label="Forma pagamento:"
      >
        <b-form-select v-model="form.idFormaPagamento" :options="payments" />
      </b-form-group>

      <b-form-group class="col-sm-3" id="tipo" label="Tipo:">
        <b-form-select v-model="form.tipo" :options="tipos" />
      </b-form-group>

      <b-form-group class="col-sm-3" id="" label="Valor:">
        <b-form-input v-model="form.valor" />
      </b-form-group>

      <b-form-group class="col-sm-3" id="" label="Data:">
        <b-form-datepicker v-model="form.data" class="mb-2"></b-form-datepicker>
      </b-form-group>

      <b-form-group class="col-sm-12" id="" label="Descrição:">
        <b-form-textarea v-model="form.descricao"></b-form-textarea>
      </b-form-group>
    </b-form>
    <b-button type="submit" variant="primary" @click="handle()"
      >Salvar</b-button
    >
  </div>
</template>

<script>
import api from "../../services/axios";
export default {
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
      const response = await api.post("/safe", this.form);
      this.form.id = response.data.id;
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
  },
};
</script>