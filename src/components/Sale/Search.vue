<template>
  <div>
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
            <th>Funcionário</th>
            <th>Fornecedor</th>
            <th>Valor total</th>
            <th>Forma de pagamento</th>
            <th>Parcelas</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <b-button
              size="sm"
              class="mr-2"
              style="background-color: #56aafe; border: none !important"
              @click="editCustomer(customer)"
              v-b-popover.hover.left="{
                variant: 'info',
                content: 'Editar',
              }"
            >
              <b-icon-check scale="2"></b-icon-check>
            </b-button>
            <b-button
              size="sm"
              variant="secondary"
              style="border: none !important"
              @click="destroyCustomer(customer.id)"
              v-b-popover.hover.right="{
                variant: 'secondary',
                content: 'Excluir',
              }"
            >
              <b-icon-trash scale="0.7"></b-icon-trash
            ></b-button>
          </td>
        </tbody>
      </table>
      <hr />
    </b-card>
  </div>
</template>

<script>
// import api from "../../services/axios";

export default {
  data() {
    return {
      dataSale: {},
    };
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