<template>
  <b-card class="shadow">
    <h3>Dados Cadastrais</h3>
    <div class="mt-4">
      <b-row class="d-flex">
        <b-form-input
          hidden
          class="col-sm-1"
          v-model="dadosFuncionario.id"
        ></b-form-input>

        <b-form-group
          id="input-group-1"
          label="Nome Funcionário"
          label-for="input-1"
          class="col-sm-5"
        >
          <b-form-input
            id="input-1"
            placeholder="Nome"
            required
            v-model="dadosFuncionario.nomeFuncionario"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="CPF"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="CNPJ"
            required
            v-model="dadosFuncionario.cpf"
            v-mask="maskCpf"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="RG"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Registro Geral"
            required
            v-model="dadosFuncionario.rg"
          ></b-form-input>
        </b-form-group>
      </b-row>

      <b-row class="d-flex">
        <b-form-group
          id="input-group-1"
          label="Endereço"
          label-for="input-1"
          class="col-sm-5"
        >
          <b-form-input
            id="input-1"
            placeholder="Endereço"
            required
            v-model="dadosFuncionario.endereco"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Bairro"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Bairro"
            required
            v-model="dadosFuncionario.bairro"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Número"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="Número"
            required
            v-model="dadosFuncionario.numero"
          ></b-form-input>
        </b-form-group>
      </b-row>

      <b-row class="d-flex">
        <b-form-group
          id="input-group-1"
          label="Cidade"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Cidade"
            required
            v-model="dadosFuncionario.cidade"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="UF"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="UF"
            required
            v-model="dadosFuncionario.uf"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="CEP"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="CEP"
            required
            v-model="dadosFuncionario.cep"
            v-mask="maskCep"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Email"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Email"
            required
            v-model="dadosFuncionario.email"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <b-row class="d-flex">
        <b-form-group
          id="input-group-1"
          label="Telefone"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="Telefone"
            required
            v-model="dadosFuncionario.telefone"
            v-mask="maskTelefone"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Celular"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="Celular"
            required
            v-model="dadosFuncionario.celular"
            v-mask="maskCelular"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Comissão"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="Comissão"
            required
            v-model="dadosFuncionario.comissao"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Função"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="Função"
            required
            v-model="dadosFuncionario.funcao"
          ></b-form-input>
        </b-form-group>
      </b-row>

      <b-row>
        <b-form-group
          id="input-group-1"
          label="CTPS"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="CTPS"
            required
            v-model="dadosFuncionario.ctps"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="PIS"
          label-for="input-1"
          class="col-sm-2"
        >
          <b-form-input
            id="input-1"
            placeholder="PIS"
            required
            v-model="dadosFuncionario.pis"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Data adminissão"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            type="date"
            placeholder="Data adminissão"
            required
            v-model="dadosFuncionario.dataAdimissao"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Matricula"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="Matricula"
            required
            v-model="dadosFuncionario.matricula"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <div>
        <div class="d-flex justify-content-end">
          <div>
            <b-button
              class="mr-4"
              style="
                border: none !important;
                background-color: #56aafe !important;
              "
              @click="saveFuncionario"
              >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
            ></b-button>
            <b-button variant="light"
              >Limpar
              <b-icon-arrow-clockwise class="ml-1"></b-icon-arrow-clockwise
            ></b-button>
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import api from "../../services/axios";

export default {
  props: {
    dataEmployee: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      dadosFuncionario: {
        id: "",
        nomeFuncionario: "",
        cpf: "",
        rg: "",
        comissao: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        email: "",
        telefone: "",
        celular: "",
        ctps: "",
        funcao: "",
        pis: "",
        matricula: "",
        dataAdimissao: "",
      },
    };
  },
  methods: {
    clear() {
      this.dadosFuncionario = {};
    },
    async saveFuncionario() {
      try {
        if (this.dadosFuncionario.id !== "") {
          this.updateFuncionario();
          return this.$toast.open({
            message: "Funcionário Atualizado com Sucesso",
            type: "success",
          });
        }
        const { data } = await api.post("/employees", this.dadosFuncionario);
        this.dadosFuncionario.id = data.id;
        this.clear();
        return this.$toast.open({
          message: "Funcionário salvo com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        return this.$toast.open({
          message: "Não foi possível salvar o Funcionário",
          type: "warning",
        });
      }
    },
    async updateFuncionario() {
      try {
        const id = this.dadosFuncionario.id;
        const { data } = await api.put(
          `/employees/${id}`,
          this.dadosFuncionario
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    dataEmployee() {
      Object.assign(this.dadosFuncionario, this.dataEmployee);
      this.dadosFuncionario.dataAdimissao =
        this.dataEmployee.dataAdimissao.split("T")[0];
    },
  },
  computed: {
    maskCpf() {
      return "###.###.###-##";
    },

    maskCelular() {
      return "(##) #####-####";
    },
    maskTelefone() {
      return "(##) ####-####";
    },
    maskCep() {
      return "#####-###";
    },
  },
};
</script>
<style scoped>
</style>