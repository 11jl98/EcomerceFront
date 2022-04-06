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
              v-model="textPesquisa"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Filtro"
            label-for="input-1"
            class="col-sm-3"
          >
            <b-form-select
              size="sm"
              value-field="value"
              text-field="text"
              v-model="type"
              :options="filterCombobox"
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
              v-model="startDate"
              size="sm"
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
              v-model="endDate"
              size="sm"
            ></b-form-input>
          </b-form-group>
          <div style="margin: 16px" class="searchSale">
            <b-button
              variant="primary"
              class="mt-3 mb-3"
              @click="filterSale(page)"
              size="sm"
            >
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>
      <div class="col-sm-12 tableSearchSale">
        <table class="table table-sm col-sm-12">
          <thead>
            <tr style="background-color: #56aafe; color: white">
              <th>Cliente</th>
              <th>Funcionário</th>
              <th>Status</th>
              <th>Data Venda</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="dataSearchSale in dataSale" :key="dataSearchSale.id">
              <td>{{ dataSearchSale.nomeCliente }}</td>
              <td>
                {{ dataSearchSale.nomeFuncionario || ". . . . . . . . " }}
              </td>
              <td>{{ dataSearchSale.status }}</td>
              <td>{{ dataSearchSale.data | moment }}</td>
              <td>
                <b-button
                  size="sm"
                  class="mr-2"
                  style="background-color: #56aafe; border: none !important"
                  @click="editSale(dataSearchSale.id)"
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
                  <b-icon-trash scale="0.7"></b-icon-trash
                ></b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <b-button
        size="sm"
        class="buttonPagePrevious"
        @click="previousPage"
        :disabled="this.page === 1 ? true : false"
      >
        <b-icon-arrow-left-square-fill
          class="ml-2"
          scale="1.5"
          style="cursor: pointer"
          variant="info"
        ></b-icon-arrow-left-square-fill
      ></b-button>

      <b-button
        size="sm"
        class="buttonPageNext"
        @click="nextPage"
        :disabled="this.dataLength === 0 ? true : false"
      >
        <b-icon-arrow-right-square-fill
          scale="1.5"
          variant="info"
          style="cursor: pointer"
        ></b-icon-arrow-right-square-fill>
      </b-button>
    </b-card>
  </div>
</template>

<script>
import api from "../../services/axios";
import moment from "moment";

export default {
  data() {
    return {
      textPesquisa: "",
      type: "",
      startDate: "",
      endDate: "",
      filterCombobox: [
        { value: "nomeCliente", text: "Cliente" },
        { value: "nomeFuncionario", text: "Funcionario" },
        { value: "tipoFormaPagamento", text: "Tipo Pagamento" },
        { value: "status", text: "Orçamento/Venda" },
      ],
      dataSale: {},
      tabIndex: 0,
      page: 1,
      dataLength: 0,
    };
  },
  methods: {
    async filterSale(page) {
      try {
        if (this.textPesquisa !== "") {
          const { data } = await api.get(
            `/sales?q=${this.textPesquisa}&type=${this.type}&page=${page}&startDate=${this.startDate}&endDate=${this.endDate}`
          );
          this.dataLength = data.data.length;
          this.dataSale = data.data;
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },

    editSale(idSale) {
      this.$emit("idSale", idSale);
      this.$emit("alterTabIndex", this.tabIndex);
    },

    nextPage() {
      this.filterSale((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.filterSale((this.page -= 1));
      }
    },
  },

  filters: {
    moment: function (date) {
      return moment(date).format("DD/MM/YYYY");
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
.searchSale {
  width: 100% !important;
  display: flex;
  justify-content: flex-end !important;
}

.tableSearchSale {
  margin-top: 31px;
  overflow-x: auto !important;
}

.buttonPagePrevious {
  background-color: transparent !important;
  border: none !important;
  padding-left: 0px !important;
}

.buttonPageNext {
  background-color: transparent !important;
  border: none !important;
}
</style>
