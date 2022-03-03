<template>
  <div id="container-geral-seach-financial">
    <div
      id="container-components-financial"
      class="col-md-12 col-sm-12 col-lg-12 col-xl-12"
    >
      <div class="containerCheckBoxFinancial">
        <div class="rdFinancialPagarReceber d-flex">
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            class="mr-3"
            size="sm"
            >Pagar</b-form-radio
          >
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            size="sm"
            >Receber</b-form-radio
          >
        </div>
      </div>
      <b-row class="d-flex">
        <b-form-group
          label="Filtro"
          class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
        >
          <b-form-select
            v-model="filtro"
            :options="tipoFiltro"
            size="sm"
            value-field="value"
            text-field="text"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Tipo" class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
          <b-form-input size="sm"></b-form-input>
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
            >Pesquisar <b-icon-search class="ml-1"></b-icon-search
          ></b-button>
        </b-form-group>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tipoFiltro: [
        { value: "nome", text: "Nome" },
        { value: "IDFORMAPAGAMENTO", text: "Forma Pagamento" },
      ],
      filtro: "",
    };
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