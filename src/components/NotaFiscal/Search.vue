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
          <div style="margin: 16px" class="searchNota">
            <b-button
              variant="primary"
              class="mt-3 mb-3"
              @click="filterNota(page)"
              size="sm"
            >
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>
      <div class="col-sm-12 tableSearchNota">
        <table class="table table-sm col-sm-12">
          <thead>
            <tr style="background-color: #56aafe; color: white">
              <th>Cliente</th>
              <th>CPF</th>
              <th>Data NF-e</th>
              <th>Nº NFe</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="dataSearchNota in dataNota" :key="dataSearchNota.id">
              <td>{{ dataSearchNota.nomeCliente }}</td>
              <td>
                {{ dataSearchNota.cpfCnpj }}
              </td>
              <td>{{ dataSearchNota.data | moment }}</td>
              <td v-if="dataSearchNota.response == null"></td>
              <td v-else>{{ dataSearchNota.response.nfe }}</td>
              <td>
                {{ dataSearchNota.status }}
              </td>
              <td>
                <b-button
                  size="sm"
                  class="mr-2"
                  style="background-color: #56aafe; border: none !important"
                  @click="editNota(dataSearchNota.id)"
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
                  @click="openModalDeleteNota(dataSearchNota.id)"
                  style="border: none !important"
                  v-b-popover.hover.right="{
                    variant: 'secondary',
                    content: 'Excluir',
                  }"
                >
                  <b-icon-trash scale="1.3"></b-icon-trash
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
    <b-modal id="modalConfirmDeleteNota">
      <h3>Deseja realmente deletar a nota fiscal e os intens nela ?</h3>

      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="danger" @click="deleteNotaAndItem">
          Deletar
        </b-button>
        <b-button size="sm" variant="info" @click="cancel()"> Fechar </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import api from "../../services/axios";
import moment from "moment";
import serviceNotaFiscal from "../../services/serviceNotaFiscal";

export default {
  data() {
    return {
      textPesquisa: "",
      type: "",
      startDate: "",
      endDate: "",
      filterCombobox: [
        { value: "nomeCliente", text: "Cliente" },
        { value: "cpfCnpj", text: "CPF/CNPJ" },
      ],
      dataNota: [],
      tabIndex: 0,
      page: 1,
      dataLength: 0,
      idNotaFromModal: null,
    };
  },
  methods: {
    async filterNota(page) {
      try {
        if (this.textPesquisa !== "") {
          const { data } = await api.get(
            `/nota?q=${this.textPesquisa}&type=${this.type}&page=${page}&startDate=${this.startDate}&endDate=${this.endDate}`
          );
          this.dataLength = data.data.length;
          this.dataNota = data.data;
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteNotaAndItem() {
      try {
        await serviceNotaFiscal.deleteNotaAndItem(this.idNotaFromModal);
        await this.filterNota(1);
        this.idNotaFromModal = null;

        this.$bvModal.hide("modalConfirmDeleteNota");
        return this.$toast.open({
          message: "Nota Fiscal deletada",
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    },

    editNota(idNota) {
      this.$emit("idNota", idNota);
      this.$emit("alterTabIndex", this.tabIndex);
    },

    nextPage() {
      this.filterNota((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.filterNota((this.page -= 1));
      }
    },

    openModalDeleteNota(id) {
      this.$bvModal.show("modalConfirmDeleteNota");
      this.idNotaFromModal = id;
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
.searchNota {
  width: 100% !important;
  display: flex;
  justify-content: flex-end !important;
}

.tableSearchNota {
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
