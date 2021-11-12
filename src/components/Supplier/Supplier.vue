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
          <b-form-input hidden class="col-sm-1" v-model="idSupplier"></b-form-input>

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
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="UF"
            label-for="input-1"
            class="col-sm-2"
          >
            <b-form-input id="input-1" placeholder="UF" required v-model="dadosSupplier.uf"></b-form-input>
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
                  background-color: #ff6400 !important;
                "
                @click="saveSupllier"
                >Salvar <b-icon-person-check class="ml-1"></b-icon-person-check
              ></b-button>
              <b-button
                style="
                  border: none !important;
                  background-color: #038c5a !important;
                "
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
import api from '../../services/axios'

export default {
  components: {},
  data() {
    return {
      idSupplier: '',
      dadosSupplier: {
        nomeFantasia: '',
        razaoSocial: '',
        cpfCnpj: '',
        ie: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        email: '',
        telefone: '',
        celular: ''
      }
    };
  },
  methods: {
    async saveSupllier(){
      const {data} = await api.post('/Provider', this.dadosSupplier)
      console.log(data)
      // this.idSupplier = data.id;
      return data
    }
  }
};
</script>
<style scoped>
</style>