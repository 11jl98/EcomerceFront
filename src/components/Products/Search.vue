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
        <div class="d-flex align-items-center"></div>
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Nome Cliente</th>
              <th>CNPJ/CPF</th>
              <th>Cidade</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
        </table>
        <hr />
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
// import api from "../../services/axios";
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.textoGrande {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px !important;
}
</style>