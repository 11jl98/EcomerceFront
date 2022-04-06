<template>
  <div>
    <b-card class="shadow">
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
              v-model="dataSafe.textPesquisa"
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
              @click="filterSafe(page)"
              size="sm"
            >
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>

      <div class="tableSearchSafe">
        <table class="table table-sm">
          <thead>
            <tr style="background-color: #56aafe; color: white">
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
              <td>
                {{ safe.nomeCliente || safe.nomeFornecedor || ". . . . . . ." }}
              </td>
              <td>{{ safe.data | moment }}</td>
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
                  @click="editSafe(safe.id)"
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
                  @click="deleteSafe"
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
      </div>
      <b-modal id="modalConfirmDeleteSafe">
        <h3>Deseja realmente deletar ?</h3>

        <template #modal-footer="{ cancel }">
          <b-button size="sm" variant="danger"> Deletar </b-button>
          <b-button size="sm" variant="info" @click="cancel()">
            Fechar
          </b-button>
        </template>
      </b-modal>
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
import moment from "moment";
import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";
export default {
  data() {
    return {
      tabIndex: 0,
      dataSafe: {
        textPesquisa: "",
        type: "",
        startDate: "",
        endDate: "",
      },
      listTableSafe: [],
      listSelectSafe: [
        { value: "nomeCliente", text: "Cliente" },
        { value: "nomeFantasia", text: "Fornecedor" },
        { value: "tipo", text: "Tipo de movimentação" },
        { value: "tipoFormaPagamento", text: "Tipo de Pagamento" },
      ],
      page: 1,
      dataLength: 0,
    };
  },
  methods: {
    async filterSafe(page) {
      try {
        if (this.dataSafe.textPesquisa !== "") {
          const { data } = await api.get(
            `/safe?q=${this.dataSafe.textPesquisa}&type=${this.dataSafe.type}&page=${page}&startDate=${this.dataSafe.startDate}&endDate=${this.dataSafe.endDate}`
          );
          this.dataLength = data.data.length;
          console.log(data);
          this.listTableSafe = data;
        }
      } catch (error) {
        toastAlertErros.validateErro(error);
      }
    },

    async editSafe(idSafe) {
      const { data } = await api.get(`/safe/${idSafe}`);
      this.$emit("searchDataForTheForm", data);
      this.$emit("alterTabIndex", this.tabIndex);
      return data;
    },

    async deleteSafe() {
      this.$bvModal.show("modalConfirmDeleteSafe");
    },

    nextPage() {
      this.filterSafe((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.filterSafe((this.page -= 1));
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

.searchSafe {
  width: 100% !important;
  display: flex;
  justify-content: flex-end !important;
}

.tableSearchSafe {
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
