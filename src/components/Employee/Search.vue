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
              @click="readEmployees"
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
            <th scope="col">Nome Funcionario</th>
            <th scope="col">CPF</th>
            <th scope="col">Telefone</th>
            <th scope="col">Celular</th>
            <th scope="col">Ações</th>
          </tr>
          <tr v-for="Employee in dataEmployees" :key="Employee.id">
            <td>{{ Employee.nomeFuncionario }}</td>
            <td>{{ Employee.cpf }}</td>
            <td>{{ Employee.telefone }}</td>
            <td>{{ Employee.celular }}</td>
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
        </thead>
      </table>
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
    };
  },
  methods: {
    async readEmployees() {
      try {
        const { data } = await api.get(
          `/employees/filter/search/parameters?q=${this.textPesquisa}`
        );
        console.log(data, "meu ovo ta aquiiiiiii");
        this.dataEmployees = data.data;
        return data;
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
  },
};
</script>
<style scoped></style>
