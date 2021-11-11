<template>
  <b-collapse
    visible
    id="accordion-dadosCadastrais"
    accordion="my-accordion"
    role="tabpanel"
    class="mt-2"
  >
    <b-card class="shadow">
      <h3>Dados Cadastrais</h3>
      <hr />
      <div class="mt-4">
        <b-row class="d-flex">
          <b-form-input hidden class="col-sm-1" v-model="id"></b-form-input>

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
              v-model="nomeFuncionario"
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
              v-model="cpf"
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
              v-model="rg"
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
              v-model="comissao"
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
              v-model="endereco"
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
              v-model="numero"
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
              v-model="cidade"
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
              v-model="uf"
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
              v-model="cep"
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
              v-model="email"
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
              v-model="telefone"
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
              v-model="celular"
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
              v-model="comissao"
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
              v-model="funcao"
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
              v-model="ctps"
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
              v-model="pis"
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
              v-model="dataAdimissao"
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
              v-model="matricula"
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
                >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
              ></b-button>
              <b-button
                  variant="light"
                >Limpar
                <b-icon-arrow-clockwise class="ml-1"></b-icon-arrow-clockwise
              ></b-button>
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </b-collapse>
</template>

<script>
export default {
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
    
  },
};
</script>
<style scoped>
</style>