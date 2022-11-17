<template>
  <div>
    <b-modal
      id="modalTaxInformation"
      size="lg"
      title="Preencher informações fiscais"
      ok-title="Salvar"
      centered
    >
      <template #modal-footer>
        <div
          class="
            col-sm-12 col-md-12 col-lg-12 col-xl-12
            d-flex
            justify-content-end
          "
        >
          <div>
            <b-button variant="info" size="sm">Salvar</b-button>
          </div>
        </div>
      </template>
      <div>
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab title="Geral" active
              ><b-card-text>Tab contents 1</b-card-text></b-tab
            >
            <b-tab title="ICMS"
              ><b-card-text>Tab contents 2</b-card-text></b-tab
            >
            <b-tab title="IPI"><b-card-text>Tab contents 3</b-card-text></b-tab>
            <b-tab title="PIS"><b-card-text>Tab contents 3</b-card-text></b-tab>
            <b-tab title="COFINS"
              ><b-card-text>Tab contents 3</b-card-text></b-tab
            >
            <b-tab title="ISSQN"
              ><b-card-text>Tab contents 3</b-card-text></b-tab
            >
            <b-tab title="Informações"
              ><b-card-text>Tab contents 3</b-card-text></b-tab
            >
          </b-tabs>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>