<template>
  <div class="containerGeralNfe">
    <div class="conteudoBotaoEmail">
      <b-button variant="info" size="sm">Envio de E-mail</b-button>
    </div>
    <b-card class="conteudoDadosNfe col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <b-row sm="12" class="dadosNfe">
        <b-col sm="4" style="padding: 0 5px !important">
          <b-card>
            <b-form-group label="Produto">
              <b-form-select
                size="sm"
                v-model="productSelected"
                :options="products"
              ></b-form-select>
            </b-form-group>
            <b-card> </b-card>
          </b-card>
        </b-col>

        <b-col sm="4" style="padding: 0 5px !important">
          <b-card>
            <b-form-group label="Informações fiscais"> </b-form-group>
            <b-card> </b-card>
          </b-card>
        </b-col>

        <b-col sm="4" style="padding: 0 5px !important">
          <b-card>
            <b-form-group label="Valores"> </b-form-group>

            <b-card> </b-card>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productSelected: null,
      products: [
        { value: 1, text: "amv" },
        { value: 2, text: "jpg" },
        { value: 2, text: "jpge" },
      ],
    };
  },
};
</script>

<style scoped>
.containerGeralNfe {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.conteudoBotaoEmail {
  height: 50px;
}

.conteudoBotaoEmail button:hover {
  background-color: #025f6b !important;
  transition: all 0.3s linear;
}

.conteudoDadosNfe {
  border-radius: 5px;
  padding: 0 !important;
}
</style>