<template>
  <div>
    <b-collapse
      visible
      id="accordion-search"
      accordion="my-accordion"
      role="tabpanel"
      class="mt-2"
    >
      <b-card class="shadow">
        <h3>Pesquisa</h3>
        <hr />
        <div class="d-flex align-items-center">
          <b-row class="col-sm-12">
            <b-form-group
              id="input-group-1"
              label="Pesquisa"
              label-for="input-1"
              class="col-sm-4"
            >
              <b-form-input
                id="input-1"
                type="email"
                placeholder="Pesquisa"
                required
              ></b-form-input>
            </b-form-group>
            <div style="margin: 16px">
              <b-button variant="primary" class="mt-3 mb-3">
                <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
                Pesquisar</b-button
              >
            </div>
          </b-row>
        </div>
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Fornecedor</th>
              <th>Valor total</th>
              <th>Forma de pagamento</th>
            </tr>
          </thead>
        </table>
        <hr />
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.textoGrande {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px !important;
}
</style>