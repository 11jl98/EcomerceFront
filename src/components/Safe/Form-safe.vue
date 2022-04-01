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
        <b-form-input size="sm" type="number" v-model="form.valor" />
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
    <b-button
      type="submit"
      class="ml-2"
      size="sm"
      variant="light"
      @click="clear"
      >Novo</b-button
    >
    <ModalFormaPagamento />
  </div>
</template>

<script>
import moment from "moment";
import api from "../../services/axios";
import ModalFormaPagamento from "../../components/Sale/Modal-Forma-Pagamento.vue";
import toastAlertErros from "../../utils/toastAlertErros";
export default {
  props: {
    searchDataForTheForm: {
      type: Object,
    },
  },
  components: {
    ModalFormaPagamento,
  },
  data() {
    return {
      form: {
        id: null,
        idFormaPagamento: "",
        tipo: "",
        valor: 0,
        data: "",
        descricao: "",
        idConta: null,
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
        return this.$toast.open({
          message: "Movimentação Salva!",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateErro(error, this.$toast);
      }
    },

    async updated() {
      await api.put(`/safe/${this.form.id}`, this.form);
      return this.$toast.open({
        message: "Movimentação Atualizada!",
        type: "info",
      });
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

    clear() {
      this.form.id = null;
      this.form.idFormaPagamento = "";
      this.form.tipo = "";
      this.form.valor = 0;
      this.form.data = "";
    },
  },
  watch: {
    searchDataForTheForm() {
      Object.assign(this.form, this.searchDataForTheForm);
      this.form.data = moment(this.searchDataForTheForm.data).format(
        "YYYY-MM-DD"
      );
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
