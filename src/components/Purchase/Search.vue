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
        <div class="d-flex align-items-center">
          <b-row class="col-sm-12">
            <b-form-group
              id="input-group-1"
              label="Pesquisa"
              label-for="input-1"
              class="col-sm-6 col-md-3 col-lg-3 col-xl-4"
            >
              <b-form-input
                id="input-1"
                v-model="textPesquisa"
                size="sm"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Filtro"
              label-for="input-1"
              class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
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
              class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
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
              class="col-sm-6 col-md-3 col-lg-3 col-xl-2"
            >
              <b-form-input
                type="date"
                v-model="endDate"
                size="sm"
              ></b-form-input>
            </b-form-group>

            <div style="margin: 16px">
              <b-button
                variant="primary"
                @click="filterPurchase"
                class="mt-3 mb-3"
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
                <th>Fornecedor</th>
                <th>NF-e</th>
                <th>Data Compra</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="dataPurchase in dataPurchasee" :key="dataPurchase.id">
                <td>{{ dataPurchase.razaoSocial }}</td>
                <td>{{ dataPurchase.numeroNfe }}</td>
                <td>{{ dataPurchase.data | moment }}</td>
                <td>
                  <b-button
                    size="sm"
                    class="mr-2"
                    style="background-color: #56aafe; border: none !important"
                    @click="editPurchase(dataPurchase.id)"
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
                    @click="openModalDeletePurchase(dataPurchase.id)"
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
          :disabled="this.dataLength === 1 ? true : false"
        >
          <b-icon-arrow-right-square-fill
            scale="1.5"
            variant="info"
            style="cursor: pointer"
          ></b-icon-arrow-right-square-fill>
        </b-button>
      </b-card>
    </b-collapse>
    <b-modal id="modalConfirmDeletePurchase">
      <h3>Deseja realmente deletar ?</h3>

      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="danger" @click="deleteAll">
          Deletar
        </b-button>
        <b-button size="sm" variant="info" @click="cancel()"> Fechar </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import servicePurchase from "../../services/servicePurchase";
import moment from "moment";

export default {
  data() {
    return {
      textPesquisa: "",
      type: "",
      startDate: "",
      endDate: "",
      filterCombobox: [
        { value: "razaoSocial", text: "Fornecedor" },
        { value: "numeroNfe", text: "NF-e" },
      ],
      dataPurchasee: {},
      tabIndex: 0,
      page: 1,
      dataLength: 0,
      idPurchaseFromModal: null,
    };
  },
  methods: {
    async filterPurchase() {
      try {
        if (this.textPesquisa !== "") {
          const data = await servicePurchase.searchPurchase(
            this.textPesquisa,
            this.type,
            this.page,
            this.startDate,
            this.endDate
          );
          this.dataLength = data.data.length;
          this.dataPurchasee = data.data;
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async openModalDeletePurchase(id) {
      this.$bvModal.show("modalConfirmDeletePurchase");
      this.idPurchaseFromModal = id;
    },

    async deleteAll() {
      try {
        await servicePurchase.deleteAll(this.idPurchaseFromModal);
        this.filterPurchase();
        this.idPurchaseFromModal = null;
        this.$bvModal.hide("modalConfirmDeletePurchase");
        return this.$toast.open({
          message: "Deletado com sucesso!",
          type: "success",
        });
      } catch (error) {
        return this.$toast.open({
          message: `${error.response}`,
          type: "error",
        });
      }
    },

    async editPurchase(id) {
      try {
        const data = await servicePurchase.findPurchaseById(id);
        this.$emit("editPurchase", data);
        this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais");
        this.$emit("alterTabIndex", this.tabIndex);
      } catch (error) {
        console.log(error);
      }
    },

    nextPage() {
      this.filterPurchase((this.page += 1));
      console.log("nextPage");
    },

    previousPage() {
      if (this.page === 1) {
        console.log("meio");
        return;
      } else {
        this.filterPurchase((this.page -= 1));
        console.log("previousPage");
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
.tableSearchPurchase {
  margin-top: 31px;
  overflow-x: auto !important;
}

.tdSearchPurchase {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 80px;
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
