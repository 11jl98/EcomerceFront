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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
            size="sm"
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
              @click="saveAndUpdateEmployee"
              size="sm"
              >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
            ></b-button>
            <b-button variant="light" @click="clear" size="sm"
              >Novo
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
import toastAlertErros from "../../utils/toastAlertErros";

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
      this.dadosFuncionario.id = "";
      this.dadosFuncionario.nomeFuncionario = "";
      this.dadosFuncionario.cpf = "";
      this.dadosFuncionario.rg = "";
      this.dadosFuncionario.comissao = "";
      this.dadosFuncionario.endereco = "";
      this.dadosFuncionario.numero = "";
      this.dadosFuncionario.bairro = "";
      this.dadosFuncionario.cidade = "";
      this.dadosFuncionario.uf = "";
      this.dadosFuncionario.email = "";
      this.dadosFuncionario.telefone = "";
      this.dadosFuncionario.celular = "";
      this.dadosFuncionario.ctps = "";
      this.dadosFuncionario.funcao = "";
      this.dadosFuncionario.pis = "";
      this.dadosFuncionario.matricula = "";
      this.dadosFuncionario.dataAdimissao = "";
    },

    async saveEmployee() {
      try {
        const { data } = await api.post("/employees", this.dadosFuncionario);
        this.dadosFuncionario.id = data.id;
        return this.$toast.open({
          message: "Funcionário salvo com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        return toastAlertErros.validateErroDoesNotContainFor(
          error,
          this.$toast
        );
      }
    },
    async updateFuncionario() {
      try {
        await api.put(
          `/employees/${this.dadosFuncionario.id}`,
          this.dadosFuncionario
        );
        return this.$toast.open({
          message: "Funcionário Atualizado com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    },

    saveAndUpdateEmployee() {
      this.dadosFuncionario.id !== ""
        ? this.updateFuncionario()
        : this.saveEmployee();
    },
  },
  watch: {
    dataEmployee() {
      Object.assign(this.dadosFuncionario, this.dataEmployee);
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
<style scoped></style>
