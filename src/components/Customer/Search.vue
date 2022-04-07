<template>
  <div>
    <b-card class="shadow">
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
              v-model="textPesquisa"
              required
              size="sm"
            ></b-form-input>
          </b-form-group>
          <div style="margin: 16px">
            <b-button
              variant="primary"
              class="mt-3 mb-3"
              @click="readCustomers(page)"
              size="sm"
            >
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>

      <div class="tableSearchCustomer">
        <table class="table table-sm">
          <thead>
            <tr style="background-color: #56aafe; color: white">
              <th>Nome Cliente</th>
              <th>CNPJ/CPF</th>
              <th>Cidade</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in readCustomer" :key="customer.id">
              <td class="tdSearchCustomer">
                {{ customer.nome }}
              </td>
              <td class="tdSearchCustomer">{{ customer.cpfCnpj }}</td>
              <td class="tdSearchCustomer">
                {{ customer.cidade }} - {{ customer.uf }}
              </td>
              <td class="tdSearchCustomer">
                {{ customer.endereco }}
              </td>
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
  </div>
</template>

<script>
import api from "../../services/axios";
import toastAlertErros from "../../utils/toastAlertErros";
export default {
  data() {
    return {
      readCustomer: [],
      textPesquisa: "",
      tabIndex: 0,
      page: 1,
      dataLength: 0,
    };
  },
  methods: {
    nextPage() {
      this.readCustomers((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.readCustomers((this.page -= 1));
      }
    },

    async readCustomers(page) {
      try {
        if (this.textPesquisa !== "") {
          const { data } = await api.get(
            `/customers?q=${this.textPesquisa}&page=${page}`
          );
          this.dataLength = data.data.length;
          this.readCustomer = data.data;
        } else {
          return;
        }
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível listar os clientes",
          type: "warning",
        });
      }
    },
    async editCustomer(customer) {
      this.$emit("readOrEditCustomers", customer);
      this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais");
      this.$emit("alterTabIndex", this.tabIndex);
    },
    async destroyCustomer(idCustomer) {
      try {
        await api.delete(`/customers/${idCustomer}`);
        this.readCustomers();
        return this.$toast.open({
          message: "Cliente excluido com sucesso",
          type: "success",
        });
      } catch (error) {
        toastAlertErros.validateMessage(error, this.$toast);
      }
    },
  },
};
</script>
<style scoped>
.tableSearchCustomer {
  margin-top: 36px;
  overflow-x: auto !important;
}

.tdSearchCustomer {
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
