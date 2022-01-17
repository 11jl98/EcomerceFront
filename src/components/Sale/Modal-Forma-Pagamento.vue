<template>
  <div>
    <b-modal
      id="modalFormaPagamento"
      size="md"
      title="Cadastro forma de pagamento"
      ok-only
      ok-title="Salvar"
    >
      <b-row class="d-flex justify-content-between">
        <b-form-input
          hidden
          class="col-sm-1"
          v-model="dataPayment.id"
        ></b-form-input>

        <b-form-input
          hidden
          class="col-sm-1"
          v-model="dataPayment.idEmpresa"
        ></b-form-input>

        <b-form-group
          id="input-group-1"
          label="Tipo:"
          label-for="input-1"
          class="col-sm-12"
          size="sm"
        >
          <b-form-input
            v-model="dataPayment.id"
            placeholder="Ex: Cartão de crédito"
          ></b-form-input>
        </b-form-group>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataPayment: {
        id: "",
        idEmpresa: "",
        tipo: "",
      },
    };
  },
};
</script>

<style>
</style>