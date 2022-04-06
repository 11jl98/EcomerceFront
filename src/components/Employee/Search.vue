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
              required
              size="sm"
              v-model="textPesquisa"
            ></b-form-input>
          </b-form-group>
          <div style="margin: 16px">
            <b-button
              variant="primary"
              class="mt-3 mb-3"
              size="sm"
              @click="readEmployees(page)"
            >
              <b-icon-search class="mr-2" scale="0.8"></b-icon-search>
              Pesquisar</b-button
            >
          </div>
        </b-row>
      </div>
      <div class="tableSearchEmployee">
        <table class="table table-sm">
          <thead>
            <tr style="background-color: #56aafe; color: white">
              <th>Nome Funcionario</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Celular</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Employee in dataEmployees" :key="Employee.id">
              <td class="tdSearchEmployee">{{ Employee.nomeFuncionario }}</td>
              <td class="tdSearchEmployee">{{ Employee.cpf }}</td>
              <td class="tdSearchEmployee">{{ Employee.telefone }}</td>
              <td class="tdSearchEmployee">{{ Employee.celular }}</td>
              <td>
                <b-button
                  size="sm"
                  class="mr-2"
                  variant="info"
                  @click="editEmployee(Employee)"
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
                  @click="destroyEmployee(Employee.id)"
                  v-b-popover.hover.right="{
                    variant: 'secondary',
                    content: 'Excluir',
                  }"
                >
                  <b-icon-trash scale="1.0"></b-icon-trash
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
  components: {},
  data() {
    return {
      dataEmployees: [],
      tabIndex: 0,
      textPesquisa: "",
      page: 1,
      dataLength: 0,
    };
  },
  methods: {
    async readEmployees(page) {
      try {
        if (this.q !== "") {
          const { data } = await api.get(
            `/employees/filter/search/parameters?q=${this.textPesquisa}&page=${page}`
          );
          this.dataLength = data.data.length;
          this.dataEmployees = data.data;
          return data;
        } else {
          return;
        }
      } catch (error) {
        return this.$toast.open({
          message: "Não foi possível listar os funcionarios",
          type: "warning",
        });
      }
    },

    async editEmployee(Employee) {
      this.$emit("readOrEditEmployees", Employee);
      this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais");
      this.$emit("alterTabIndex", this.tabIndex);
    },

    async destroyEmployee(idEmployee) {
      try {
        await api.delete(`/employees/${idEmployee}`);
        this.readEmployees();
        return this.$toast.open({
          message: "Funcionário deletado!",
          type: "success",
        });
      } catch (error) {
        return toastAlertErros.validateMessage(error, this.$toast);
      }
    },

    nextPage() {
      this.readEmployees((this.page += 1));
    },

    previousPage() {
      if (this.page === 1) {
        return;
      } else {
        this.readEmployees((this.page -= 1));
      }
    },
  },
};
</script>
<style scoped>
.tableSearchEmployee {
  margin-top: 31px;
  overflow-x: auto !important;
}
.tdSearchEmployee {
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
