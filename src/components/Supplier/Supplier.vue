<template>
  <b-card class="shadow">
    <h3>Dados Cadastrais</h3>
    <hr />
    <div class="mt-4">
      <b-row class="d-flex">
        <b-form-input
          hidden
          class="col-sm-1"
          v-model="dadosSupplier.idSupplier"
        ></b-form-input>

        <b-form-group
          id="input-group-1"
          label="Nome Fantasia"
          label-for="input-1"
          class="col-sm-5"
        >
          <b-form-input
            id="input-1"
            placeholder="Nome"
            required
            v-model="dadosSupplier.nomeFantasia"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Razão Social"
          label-for="input-1"
          class="col-sm-4"
        >
          <b-form-input
            id="input-1"
            placeholder="Razão Social"
            required
            v-model="dadosSupplier.razaoSocial"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="CNPJ"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="CNPJ"
            required
            v-model="dadosSupplier.cpfCnpj"
            v-mask="maskCnpj"
            size="sm"
          ></b-form-input>
        </b-form-group>
      </b-row>

      <b-row>
        <b-form-group
          id="input-group-1"
          label="Inscrição Estadual"
          label-for="input-1"
          class="col-sm-3"
        >
          <b-form-input
            id="input-1"
            placeholder="Inscrição Estadual"
            required
            v-model="dadosSupplier.ie"
            size="sm"
          ></b-form-input>
        </b-form-group>

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
            v-model="dadosSupplier.endereco"
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
            v-model="dadosSupplier.bairro"
            size="sm"
          ></b-form-input>
        </b-form-group>
      </b-row>

      <b-row class="d-flex">
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
            v-model="dadosSupplier.numero"
            size="sm"
          ></b-form-input>
        </b-form-group>

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
            v-model="dadosSupplier.cidade"
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
            v-model="dadosSupplier.uf"
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
            v-model="dadosSupplier.email"
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
            type="text"
            placeholder="Telefone"
            required
            v-model="dadosSupplier.telefone"
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
            v-model="dadosSupplier.celular"
            v-mask="maskCelular"
            size="sm"
          ></b-form-input>
        </b-form-group>
      </b-row>

      <b-row class="d-flex"> </b-row>
      <div>
        <div class="d-flex justify-content-end">
          <div>
            <b-button
              class="mr-4"
              style="
                border: none !important;
                background-color: #56aafe !important;
              "
              @click="saveAndUpdateSupplier"
              size="sm"
              >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
            ></b-button>
            <b-button variant="light" @click="clear" size="sm"
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
import toastAlertErros from "../../utils/toastAlertErros";

export default {
  props: {
    dataSupplier: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      dadosSupplier: {
        id: "",
        nomeFantasia: "",
        razaoSocial: "",
        cpfCnpj: "",
        ie: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        email: "",
        telefone: "",
        celular: "",
      },
    };
  },
  methods: {
    async saveSupllier() {
      try {
        const { data } = await api.post("/Providers", this.dadosSupplier);
        this.dadosSupplier.id = data.id;

        return this.$toast.open({
          message: "Fornecedor salvo com sucesso",
          type: "success",
        });
      } catch (error) {
        toastAlertErros.validateErroDoesNotContainFor(error, this.$toast);
        console.log(error.response.data.erros);
      }
    },

    async updateSupplier() {
      try {
        await api.put(
          `/Providers/${this.dadosSupplier.id}`,
          this.dadosSupplier
        );

        return this.$toast.open({
          message: "Fornecedor atualizado com sucesso",
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    },

    saveAndUpdateSupplier() {
      this.dadosSupplier.id !== ""
        ? this.updateSupplier()
        : this.saveSupllier();
    },
    clear() {
      this.dadosSupplier.id = "";
      this.dadosSupplier.nomeFantasia = "";
      this.dadosSupplier.razaoSocial = "";
      this.dadosSupplier.cpfCnpj = "";
      this.dadosSupplier.ie = "";
      this.dadosSupplier.endereco = "";
      this.dadosSupplier.numero = "";
      this.dadosSupplier.bairro = "";
      this.dadosSupplier.cidade = "";
      this.dadosSupplier.uf = "";
      this.dadosSupplier.email = "";
      this.dadosSupplier.telefone = "";
      this.dadosSupplier.celular = "";
    },
  },
  watch: {
    dataSupplier() {
      Object.assign(this.dadosSupplier, this.dataSupplier);
    },
  },

  computed: {
    maskCnpj() {
      return "##.###.###/####-##";
    },

    maskCelular() {
      return "(##) #####-####";
    },
    maskTelefone() {
      return "(##) ####-####";
    },
  },
};
</script>
<style scoped></style>
