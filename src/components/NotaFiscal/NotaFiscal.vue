<template>
  <div class="containerGeralNfe">
    <div class="conteudoBotaoEmail">
      <b-button variant="info" size="sm">Envio de E-mail</b-button>
    </div>
    <b-row>
      <div
        class="
          col-sm-12 col-md-12 col-lg-12 col-lg-12
          d-flex
          justify-content-between
        "
      >
        <div>
          <b-form-group
            id="input-group-1"
            label="Data da Emissão"
            label-for="input-1"
            class="col-sm-12"
            size="sm"
          >
            <b-form-input
              value-field="id"
              text-field="nome"
              v-model="dataNfe.dataEmissao"
              type="date"
              size="sm"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="mr-2 containerCheckBox">
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-checkbox
              :aria-describedby="ariaDescribedby"
              value="Entrada"
              unchecked-value="Saída"
              class="chkSaidaEntrada"
              v-model="dataNfe.tipoEmiss"
              size="sm"
              switch
            >
              <div style="width: 115px">
                {{ dataNfe.tipoEmiss.toUpperCase() }}
              </div>
            </b-form-checkbox>
          </b-form-group>
        </div>
      </div>
    </b-row>
    <b-card class="conteudoDadosNfe col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <b-card-text>
        <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <b-navbar toggleable class="cardDadosNfe">
            <b-navbar-toggle
              target="navbar-toggle-collapse"
              id="dadosVendaStyle"
              class="tamanhoCards"
            >
              <template #default="{ expanded }">
                <div class="tamanhoBotaoOpenCard">
                  <div>
                    <b-icon
                      v-if="expanded"
                      icon="dash-square-fill"
                      variant="info"
                    ></b-icon>
                    <b-icon v-else icon="plus-square-fill" variant="info">
                    </b-icon>
                  </div>
                  <div style="margin-left: 10px">Dados do produto</div>
                </div>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-card
                  class="
                    mt-2
                    col-md-12 col-sm-12 col-lg-12 col-xl-12
                    cardDadosNfeBorda
                  "
                >
                  <b-row sm="12">
                    <b-form-group
                      label="Produto"
                      class="col-sm-12 col-md-7 col-lg-8 col-xl-4"
                    >
                      <b-form-select
                        size="sm"
                        v-model="productSelected"
                        :options="products"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Cod. Ref"
                      class="col-sm-6 col-md-5 col-lg-4 col-xl-2"
                    >
                      <b-form-input size="sm" disabled />
                    </b-form-group>

                    <b-form-group
                      label="Quant."
                      class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                    >
                      <b-form-input size="sm" type="number" />
                    </b-form-group>

                    <b-form-group
                      label="Vl. Unitario"
                      class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                    >
                      <b-form-input size="sm" />
                    </b-form-group>

                    <b-form-group
                      label="Vl. Total"
                      class="col-sm-6 col-md-4 col-lg-4 col-xl-2"
                    >
                      <b-form-input size="sm" />
                    </b-form-group>
                  </b-row>
                </b-card>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      productSelected: null,
      products: [
        { value: 1, text: "amv" },
        { value: 2, text: "jpg" },
        { value: 2, text: "jpge" },
      ],
      dataNfe: {
        dataEmissao: moment().format("YYYY-MM-DD"),
        tipoEmiss: "Saída",
      },
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
  margin-top: 10px;
}

.cardDadosNfe {
  padding-bottom: 15px !important;
  border-radius: 5px !important;
  background-color: rgba(255, 255, 255, 0.788) !important;
  box-shadow: inset 0 0 0.5em rgb(255, 255, 255), 0 0 0.5em rgba(5, 5, 5, 0.171);
  padding: 0px 16px 0px 16px !important;
}

.cardDadosNfeBorda {
  border-radius: 5px !important;
  margin-top: 25px !important;
  margin-bottom: 20px;
  /* background-color: #6a88bd !important; */
  /* color: white; */
}

.tamanhoCards {
  width: 100%;
  display: flex;
  /* background-color: #6a88bd !important; */
  /* box-shadow: 2px 2px 4px 0px black !important ; */
}

.tamanhoBotaoOpenCard {
  color: black;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  /* color: white; */
}

.chkSaidaEntrada {
  margin-top: 18px;
}

.containerCheckBox {
  display: flex;
  height: 32px !important;
  margin-top: 31px;
  align-items: center !important;
  background-color: #e9ecef !important;
  border: solid 1px rgb(216, 215, 215);
  border-radius: 5px;
  padding-left: 15px !important;
}
</style>