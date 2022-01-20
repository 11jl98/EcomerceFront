<template>
  <b-card class="shadow">
    <h3>Dados Cadastrais</h3>
    <hr />
    <div class="mt-4">
      <b-row class="d-flex justify-content-around">
        <b-form-input
          hidden
          class="col-sm-1"
          v-model="dataCostumer.id"
        ></b-form-input>

        <b-form-group
          id="input-group-1"
          label="Nome Cliente"
          label-for="input-1"
          class="col-sm-5"
        >
          <b-form-input
            id="input-1"
            placeholder="Nome"
            required
            v-model="dataCostumer.nome"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="CNPJ/CPF"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="CNPJ/CPF"
            required
            v-model="dataCostumer.cpfCnpj"
            v-mask="maskCpfCnpj"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Endereço"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Endereço"
            required
            v-model="dataCostumer.endereco"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <b-row class="d-flex justify-content-around">
        <b-form-group
          id="input-group-1"
          label="Número"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Número"
            required
            v-model="dataCostumer.numero"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Complemento"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Complemento"
            required
            v-model="dataCostumer.complemento"
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
            v-model="dataCostumer.bairro"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <b-row class="d-flex justify-content-around">
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
            v-model="dataCostumer.cidade"
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
            v-model="dataCostumer.uf"
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
            v-model="dataCostumer.cep"
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
            v-model="dataCostumer.email"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <b-row class="d-flex justify-content-around">
        <b-form-group
          id="input-group-1"
          label="Telefone"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            type="text"
            v-mask="maskTelefone"
            placeholder="Telefone"
            require
            v-model="dataCostumer.telefone"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Celular"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Celular"
            required
            v-mask="maskCelular"
            v-model="dataCostumer.celular"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Dada Nasc."
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            type="date"
            v-model="dataCostumer.dataNascimento"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <div>
        <b-form-group
          id="input-group-1"
          label="Observação"
          label-for="input-1"
          class="col-sm-12"
        >
          <b-form-textarea
            id="textarea"
            rows="3"
            max-rows="6"
            v-model="dataCostumer.observacao"
          ></b-form-textarea>
        </b-form-group>
        <div class="d-flex justify-content-end">
          <div>
            <b-button
              class="mr-4"
              style="
                border: none !important;
                background-color: #56aafe !important;
              "
              @click="saveOrUpdateCustomer"
              >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
            ></b-button>
            <b-button variant="light" @click="clearInputs"
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
    readOrEditCustomers: {
      type: Object,
    },
  },
  data() {
    return {
      dataCostumer: {
        id: "",
        nome: "",
        cpfCnpj: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        telefone: "",
        celular: "",
        email: "",
        dataNascimento: "",
        observacao: "",
      },
    };
  },

  methods: {
    clearInputs() {
      (this.dataCostumer.id = ""),
        (this.dataCostumer.nome = ""),
        (this.dataCostumer.cpfCnpj = ""),
        (this.dataCostumer.endereco = ""),
        (this.dataCostumer.numero = ""),
        (this.dataCostumer.complemento = ""),
        (this.dataCostumer.bairro = ""),
        (this.dataCostumer.cidade = ""),
        (this.dataCostumer.uf = ""),
        (this.dataCostumer.cep = ""),
        (this.dataCostumer.email = ""),
        (this.dataCostumer.telefone = ""),
        (this.dataCostumer.celular = ""),
        (this.dataCostumer.dataNascimento = ""),
        (this.dataCostumer.observacao = "");
    },

    saveOrUpdateCustomer() {
      if (this.dataCostumer.id === "") return this.saveCustomer();

      this.updateCustomer();
    },

    async saveCustomer() {
      try {
        const { data } = await api.post("/customers", this.dataCostumer);
        console.log(data);
        this.dataCostumer.id = data.id;
        return this.$toast.open({
          message: "Cliente salvo com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        return this.$toast.open({
          message: "Não foi possível salvar o cliente",
          type: "warning",
        });
      }
    },
    async updateCustomer() {
      try {
        await api.put("/customers/" + this.dataCostumer.id, this.dataCostumer);

        this.$toast.open({
          message: "Cliente editado com Sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        this.$toast.open({
          message: "Não foi possível editar o cliente",
          type: "warning",
        });
      }
    },
  },
  watch: {
    readOrEditCustomers() {
      console.log(this.readOrEditCustomers);
      Object.assign(this.dataCostumer, this.readOrEditCustomers);
      this.dataCostumer.dataNascimento =
        this.readOrEditCustomers.datanascimento.split("T")[0];
    },
  },
  computed: {
    maskCpfCnpj() {
      return this.dataCostumer.cpfCnpj.length > 14
        ? "##.###.###/####-##"
        : "###.###.###-##";
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