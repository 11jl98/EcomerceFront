<template>
  <div>
    <b-card class="shadow">
      <h3>Pesquisa</h3>
      <hr />

      <div class="d-flex align-items-center">
        <b-row class="col-sm-12">
          <b-form-group
            id="input-group-1"
            label="Nome"
            label-for="input-1"
            class="col-sm-3"
          >
            <b-form-input
              id="input-1"
              type="email"
              v-model="dataSafe.q"
              required
              size="sm"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Filtro"
            label-for="input-1"
            class="col-sm-3"
          >
            <b-form-select
              text-field="text"
              size="sm"
              value-field="value"
              v-model="dataSafe.type"
              :options="listSelectSafe"
            ></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Data Inicio"
            label-for="input-1"
            class="col-sm-4 col-md-3 col-lg-3 col-xl-3"
          >
            <b-form-input
              type="date"
              size="sm"
              v-model="dataSafe.startDate"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Data Fim"
            label-for="input-1"
            class="col-sm-4 col-md-3 col-lg-3 col-xl-3"
          >
            <b-form-input
              type="date"
              v-model="dataSafe.endDate"
              size="sm"
            ></b-form-input>
          </b-form-group>

          <div style="margin: 16px" class="searchSafe">
            <b-button
              variant="primary"
              class="mt-3 mb-3"
              @click="filterSafe"
              size="sm"
            >
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Tipo Pag</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="safe in listTableSafe.data" :key="safe.id">
            <td>{{ safe.nomeCliente || ". . . . . . ." }}</td>
            <td>{{ safe.data }}</td>
            <td>
              {{ safe.tipoMov || safe.tipoCaixa }}
            </td>

            <td>
              {{ safe.tipoFormaPag || ". . . . . . ." }}
            </td>

            <td>
              {{ safe.valor }}
            </td>

            <td>
              <b-button
                size="sm"
                class="mr-2"
                style="background-color: #56aafe; border: none !important"
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
                v-b-popover.hover.right="{
                  variant: 'secondary',
                  content: 'Excluir',
                }"
              >
                <b-icon-trash scale="1"></b-icon-trash
              ></b-button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </b-card>
  </div>
</template>

<script>
import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";
export default {
  data() {
    return {
      tabIndex: 0,
      dataSafe: {
        q: "",
        type: "",
        startDate: "",
        endDate: "",
      },
      listTableSafe: [],
      listSelectSafe: [
        { value: "nome", text: "Cliente" },
        { value: "nomeFantasia", text: "Fornecedor" },
        { value: "tipo", text: "Tipo" },
        { value: "tipoFormaPagamento", text: "Forma de Pagamento" },
      ],
    };
  },
  methods: {
    async filterSafe() {
      try {
        const { data } = await api.get(
          `/safe?q=${this.dataSafe.q}&type=${this.dataSafe.type}&startDate=${this.dataSafe.startDate}&endDate=${this.dataSafe.endDate}`
        );
        this.listTableSafe = data;
        console.log(this.listTableSafe);
      } catch (error) {
        toastAlertErros.validateBillErro(error);
      }
    },
  },
};
</script>
<style scoped>
.textoGrande {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px !important;
}

.searchSafe {
  width: 100% !important;
  display: flex;
  justify-content: flex-end !important;
}
</style>