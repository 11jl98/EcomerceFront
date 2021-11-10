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
          <b-row class="d-flex justify-content-around">
            <b-form-input
              hidden
              class="col-sm-1"
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
              ></b-form-input>
            </b-form-group>

          <b-form-group
              id="input-group-1"
              label="UF"
              label-for="input-1"
              class="col-sm-4"
            >
              <b-form-input
                id="input-1"
                placeholder="UF"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="CEP"
              label-for="input-1"
              class="col-sm-4"
            >
              <b-form-input
                id="input-1"
                placeholder="CEP"
                required
              ></b-form-input>
            </b-form-group>
          </b-row>
          <b-row class="d-flex justify-content-around">
            <b-form-group
              id="input-group-1"
              label="Email"
              label-for="input-1"
              class="col-sm-3"
            >
              <b-form-input
                id="input-1"
                type="email"
                placeholder="Email"
                required
              ></b-form-input>
            </b-form-group>

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
                type="email"
                placeholder="Celular"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="email"
              label-for="input-1"
              class="col-sm-3"
            >
                <b-form-input
                id="input-1"
                type="email"
                placeholder="Email"
                required
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
              ></b-form-textarea>
            </b-form-group>
            <div class="d-flex justify-content-end">
              <div>
                <b-button
                  class="mr-4"
                  style="
                    border: none !important;
                    background-color: #ff6400 !important;
                  "
                  >Salvar
                  <b-icon-person-check class="ml-1"></b-icon-person-check
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
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>