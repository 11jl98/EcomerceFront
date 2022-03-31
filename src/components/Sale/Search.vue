<template>
  <div>
    <b-card class="shadow">
      <div class="d-flex align-items-center">
        <b-row class="col-sm-12">
          <b-form-group
            id="input-group-1"
            label="Pesquisa"
            label-for="input-1"
            class="col-sm-3"
          >
            <b-form-input
              id="input-1"
              type="email"
              size="sm"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Filtro"
            label-for="input-1"
            class="col-sm-3"
          >
            <b-form-select size="sm"></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Data Inicio"
            label-for="input-1"
            class="col-sm-4 col-md-3 col-lg-3 col-xl-3"
          >
            <b-form-input type="date" size="sm"></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Data Fim"
            label-for="input-1"
            class="col-sm-4 col-md-3 col-lg-3 col-xl-3"
          >
            <b-form-input type="date" size="sm"></b-form-input>
          </b-form-group>
          <div style="margin: 16px" class="searchSale">
            <b-button variant="primary" class="mt-3 mb-3" size="sm">
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>
      <div class="col-sm-12 tableSearchSale">
        <table class="table col-sm-12">
          <thead>
            <tr style="background-color: #56aafe; color: white">
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
      </div>
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
.searchSale {
  width: 100% !important;
  display: flex;
  justify-content: flex-end !important;
}

.tableSearchSale {
  margin-top: 31px;
  overflow-x: auto !important;
}
</style>
