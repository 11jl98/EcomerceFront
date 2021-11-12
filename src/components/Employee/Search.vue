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
            <b-form-group
              id="input-group-1"
              label="Status"
              label-for="input-1"
              class="col-sm-3"
            >
              <b-form-select></b-form-select>
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
                  @click="deleteEmployee(Employee.id)"
                  v-b-popover.hover.right="{
                    variant: 'secondary',
                    content: 'Excluir',
                  }"
                >
                  <b-icon-trash scale="0.7"></b-icon-trash
                ></b-button>
              </td>
            </tr>
          </thead>
        </table>
        <hr />
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import api from "../../services/axios";
export default {
  components: {},
  data() {
    return {
      dataEmployees: {},
    };
  },
  methods: {
    async readEmployee() {
      try {
        const { data } = await api.get(`/employees/`);
        console.log(data);
        this.dataEmployees = data.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async editEmployee(Employee) {
      this.$emit("readOrEditEmployees", Employee);
      this.$root.$emit("bv::toggle::collapse", "accordion-dadosCadastrais");
    },
    async destroyEmployee(idEmployee) {
      try {
        const { data } = await api.delete(`/employees/${idEmployee}`);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.readEmployee();
  },
};
</script>
<style scoped>
</style>